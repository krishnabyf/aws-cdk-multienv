import { S3 } from 'aws-sdk';

const s3 = new S3();

export const handler = async (event: any = {}): Promise<any> => {
  console.log('Event:', event);
  const bucketName = process.env.BUCKET_NAME;

  return {
    statusCode: 200,
    body: `Hello from Lambda! Bucket: ${bucketName}`,
  };
};
