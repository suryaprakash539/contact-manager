const Contact = require('../models/contact')

module.exports.create=(req,res)=>{
    const body = req.body
    const contact = new Contact(body)
    contact.userId = req.user._id
    contact.save()
     .then(contact=>{
         res.json(contact)
     })
     .catch(err=>{
         res.json(err)
     })
}

module.exports.list=(req,res)=>{
    Contact.find({userId:req.user._id})
     .then(contacts=>{
         res.json(contacts)
     })
     .catch(err=>{
         res.json(err)
     })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Contact.findOne({userId:req.user._id,_id:id})
     .then(contact=>{
         res.json(contact)
     })
     .catch(err=>{ 
         res.json(err)
     })
}

module.exports.destroy=(req,res)=>{
    const id = req.params.id
    Contact.findOneAndDelete({userId:req.user._id,_id:id})
     .then(contact=>{
         if(contact){
            res.json(contact)
         }
         else
         {
             res.json({})
         }     
     })
     .catch(err=>{
         res.json(err)
     })
}

module.exports.update=(req,res)=>{
    const id = req.params.id
    const body = req.body
    Contact.findOneAndUpdate({userId:req.user._id,_id:id},body,{new:true,runValidators:true})
     .then(contact=>{
         res.json(contact)
     })
     .catch(err=>{
         res.json(err)
     })
}