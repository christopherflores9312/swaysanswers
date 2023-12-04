const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

const AWS = require('aws-sdk');
require('dotenv').config();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_BUCKET_REGION
});

const s3 = new AWS.S3();

app.get('/download', (req, res) => {
    const bucketName = 'swaysanswers';
    const fileName = 'TreeStructureApp.zip';

    const options = {
        Bucket: bucketName,
        Key: fileName,
    };

    s3.getObject(options, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error -> " + err });
        } else {
            // Set Content-Disposition to suggest filename
            res.setHeader('Content-Disposition', 'attachment; filename=' + fileName);
            res.send(data.Body);
        }
    });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back the index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
