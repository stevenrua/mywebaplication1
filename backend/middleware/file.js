const multer = require('multer')

const Dir = './public/'

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,Dir)
    },

    filename : (req,file,cb)=>{
        const filename = Date.now() + '-' + file.originalname.toLowerCase().split(' ').join('-')
        cb(null,filename)
    }
})

const upload = multer({
    storage : storage,
    fileFilter : (req,file,cb)=>{
        if(file.mimetype=="image/png" || file.mimetype=="image/jpg" || file.mimetype=="image/jpeg"){
            cb(null,true)
        }else{
            cb(null,false)
            return(new Error('Solo aceptamos .png,.jpg,y jpeg'))
        }
    }
})
module.exports = upload