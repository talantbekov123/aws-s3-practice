import 'dotenv/config';
import * as fs from 'fs';
import { S3 } from 'aws-sdk';
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const config = {
  bucketName,
  region,
  accessKeyId,
  secretAccessKey,
};

var s3 = new S3(config);

// uploads a file to s3
function uploadFile(file) {
  console.log(file);
  const fileStream = fs.createReadStream(file.path);
  console.log('1');

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  console.log('2');
  return new Promise((resolve, reject) => {
    s3.upload(uploadParams, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
}

export { uploadFile };
