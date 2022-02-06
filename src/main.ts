import * as cdk from '@aws-cdk/core';
import { ProductS3Deployment } from './lib/s3-deployment-stack';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps = {}) {
    super(scope, id, props);

    // define resources here...
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

new ProductS3Deployment(app, 'StaticSite', { env: devEnv });
// new MyStack(app, 'my-stack-prod', { env: prodEnv });

app.synth();