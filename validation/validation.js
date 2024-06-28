const zod=require('zod');

const signupSchema=zod.object({
    
   username:zod.string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be lest of 3 characters"})
    .max(255,{message:"Name must not be more than 255 character"}),

   email:zod.string({required_error:"Email is required"})
   .trim()
   .email({message:"invalid email address"})
   .min(3,{message:"Name must be lest of 3 characters"})
   .max(255,{message:"Name must not be more than 255 character"}),

   password:zod.string({required_error:"Password is required"})
   .trim()
   .min(3,{message:"Name must be lest of 3 characters"})
   .max(255,{message:"Name must not be more than 255 character"}),
})

module.exports=signupSchema;