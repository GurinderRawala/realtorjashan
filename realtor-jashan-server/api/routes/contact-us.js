const express = require('express')
const { validationResult } = require('express-validator');
const { createContactUs, createFindContact } = require('../../contact-us');
const { validateContacts } = require('../middleware/validate-contact-us');
const router = express.Router()

exports.registerRoutes = (server, modules) =>{
    router.post('/api/contact-us', validateContacts, (req, res, next) =>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422)
            return next({ err: errors.array() })
        }
        const createEntry = createContactUs(modules)
        createEntry(req.body, (err) =>{
            if(err){  
                res.status(500)
                return next({ serverErr: err }) 
            }
            res.sendStatus(201)
            next()
        })
    })
    router.get('/api/contact-us/:id', (req, res, next) => {
        const findContact = createFindContact(modules)
        findContact(req.params, (err, serverResponse) =>{
            if(err){ return next(err) }
            res.status(200).send({res: serverResponse})
            next()
        })
    })
    router.get('/api/test-route', (req, res, next) =>{
        res.status(200).send({msg: "working"})
    })
    server.use(router)
}