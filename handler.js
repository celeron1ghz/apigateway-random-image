'use strict';

const aws    = require('aws-sdk');
const s3     = new aws.S3({ region: 'ap-northeast-1' });
const BUCKET = 'apigateway-random-image';

module.exports.main = (event, context, callback) => {
  s3.listObjects({ Bucket: BUCKET }).promise().then(data => {
    const idx = Math.floor(Math.random() * data.Contents.length);
    const file = data.Contents[idx];
    console.log(file.Key);
    return s3.getObject({ Bucket: BUCKET, Key: file.Key }).promise();
  })
  .then(data => {
    callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'image/jpeg', 'Cache-Control': 'no-cache' },
        body: data.Body.toString('base64'),
        isBase64Encoded: true,
    });
  })
  .catch(e => console.log(e));
};
