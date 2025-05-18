const express = require('express');
const router = express.Router();
//const authMiddleware = require('../middleware/authMiddleware');

// controllers 
const blogController = require('../controllers/blogController'); 



const authMiddleware = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
     filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)


});

const upload = multer({ storage });

router.post('/', authMiddleware, upload.single('image'), blogController.createBlog);


router.get('/', authMiddleware, blogController.getBlogs);
router.put('/:id', authMiddleware, upload.single('image'), blogController.updateBlog);


router.delete('/:id', authMiddleware, blogController.deleteBlog);



module.exports = router;
















