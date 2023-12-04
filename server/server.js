const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const AWS = require('aws-sdk');
require('dotenv').config();


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

    s3.getObject(options)
        .createReadStream()
        .on('error', function (err) {
            res.status(500).json({ error: "Error -> " + err });
        }).pipe(res);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
