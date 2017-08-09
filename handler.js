'use strict';

const aws    = require('aws-sdk');
const s3     = new aws.S3({ region: 'ap-northeast-1' });
const BUCKET = 'lambda-random-image';

module.exports.main = (event, context, callback) => {
  s3.listObjects({ Bucket: BUCKET }).promise().then(data => {
    const idx = Math.floor(Math.random() * data.Contents.length);
    const file = data.Contents[idx];
    console.log(data);

    const url = `https://s3-ap-northeast-1.amazonaws.com/${BUCKET}/${file.Key}`;
    console.log(url);
    callback(null, { statusCode: 302, location: url });
  })
  .catch(e => console.log(e));
};
