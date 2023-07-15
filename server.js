const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/transform', upload.single('photo'), function (req, res, next) {
  console.log('Received transformation request:');
  console.log('Transform type:', req.body['transform-type']);
  console.log('Photo:', req.file);
  
  let transformType = req.body['transform-type'];
  let photoPath = req.file.path;
  // TODO: Send 'photoPath' and 'transformType' to the AI tool.
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
