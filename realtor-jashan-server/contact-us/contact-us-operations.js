async function saveContact(contactUsRepo, contactInfo, callBack){
    const res = await contactUsRepo.create(contactInfo)
    callBack(null, res)
}
async function findContact(contactUsRepo, contactInfo, callBack){
    const res = await contactUsRepo.findById(contactInfo.id)
    callBack(null, res)
}
module.exports = {
    createContactUs: ({contactUsRepo}) => saveContact.bind(null, contactUsRepo),
    createFindContact: ({contactUsRepo}) => findContact.bind(null, contactUsRepo)
}