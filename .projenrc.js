const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '1.143.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-s3-deployment',

  deps: [
    '@aws-cdk/core',
    '@aws-cdk/aws-s3-deployment',
    '@aws-cdk/aws-s3',
    'path',
    'chalk',
  ], /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();