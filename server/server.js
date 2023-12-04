const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_REGION'
});

const s3 = new AWS.S3();

app.get('/download', (req, res) => {
    const bucketName = 'YOUR_BUCKET_NAME';
    const fileName = 'YOUR_FILE_NAME.zip';
  
    const options = {
      Bucket: bucketName,
      Key: fileName,
    };
  
    s3.getObject(options)
      .createReadStream()
      .on('error', function(err){
        res.status(500).json({ error: "Error -> " + err });
      }).pipe(res);
  });
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
