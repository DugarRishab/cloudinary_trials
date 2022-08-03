const express = require('express');
const imageController = require('../controllers/imageController');
const { upload } = require('../utils/multer');

const Router = express.Router();

Router.post("/", upload.single('image'), imageController.uploadImage);

module.exports = Router;
