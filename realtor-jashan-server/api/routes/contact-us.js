const express = require('express')
const { createContactUs, createFindContact } = require('../../contact-us')
const router = express.Router()

exports.registerRoutes = (server, modules) =>{
    router.post('/api/contact-us', (req, res, next) =>{
        const createEntry = createContactUs(modules)
        createEntry(req.body, (err, serverResponse) =>{
            if(err){ return next(err) }
            res.status(201).send({res: serverResponse})
            next()
        })
    })
    router.get('/api/contact-us/:id', (req, res, next) => {
        const findContact = createFindContact(modules)
        findContact(req.params, (err, serverResponse) =>{
            if(err){ return next(err) }
            res.status(201).send({res: serverResponse})
            next()
        })
    })
    router.get('/api/test-route', (req, res, next) =>{
        res.status(200).send({msg: "working"})
    })
    server.use(router)
}