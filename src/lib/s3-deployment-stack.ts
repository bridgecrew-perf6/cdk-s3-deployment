import * as path from 'path';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3deploy from '@aws-cdk/aws-s3-deployment';
import * as cdk from '@aws-cdk/core';
import { envVars } from './env-vars';

export interface ProductConstructProps {

}

export class ProductS3Deployment extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: ProductConstructProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: envVars.S3_WEBSITE_BUCKETNAME,
      websiteIndexDocument: 'index.html',
      publicReadAccess: true,
    });

    //const websiteBucket = s3.Bucket.fromBucketName(this, 'WebsiteBucket', bucketName.valueAsString);

    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(path.join(__dirname, '..', './website-dist'))],
      destinationBucket: websiteBucket,
      //destinationKeyPrefix: 'web/static', // optional prefix in destination bucket
    });

  }
}