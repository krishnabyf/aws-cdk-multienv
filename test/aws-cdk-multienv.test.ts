import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaS3Stack } from '../lib/lambda-s3-stack';

test('Stack contains an S3 Bucket', () => {
  const app = new cdk.App();
  const stack = new LambdaS3Stack(app, 'TestStack');

  const template = Template.fromStack(stack);
  template.hasResource('AWS::S3::Bucket', {});
});

test('Stack contains a Lambda Function', () => {
  const app = new cdk.App();
  const stack = new LambdaS3Stack(app, 'TestStack');

  const template = Template.fromStack(stack);
  template.hasResource('AWS::Lambda::Function', {});
});
