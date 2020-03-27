const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: "AKIA22IHPBJCY5RQFWP3",
    secretAccessKey: "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"
});

const fileName = '../public/img/dog1.jpg';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'buddyfinder2020', // pass your bucket name
         Key: 'pictures.jpg', // file will be saved as buddyfinder2020/pictures.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};

uploadFile();