//import * as chalk from 'chalk';

export const envVars = {
  REGION: process.env.REGION || 'ap-northeast-2',
  COMPANY_NAME: 'demo',
  SOURCE_PROVIDER: 'GITHUB',
  REPO: 'jingood2/cdk-servicecatalog-cicd-template',
  BRANCH: 'main',
  GITHUB_TOKEN: 'atcl/jingood2/github-token',
  S3_WEBSITE_BUCKETNAME: 'ekme.com',
};

export function validateEnvVariables() {
  for (let variable in envVars) {
    if (!envVars[variable as keyof typeof envVars]) {
      throw Error(`[app]: Environment variable ${variable} is not defined!`);
    }
  }
}

export const identifyResource = (resourcePrefix:string, resourceId:string)=>{
  return `${resourcePrefix}-${resourceId}`;
};