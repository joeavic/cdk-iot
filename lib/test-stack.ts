import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_iot as iot } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // certificateSigningRequest -> Generate this on the device using th e below command
    // sudo openssl req -new -newkey rsa:2048 -nodes -keyout test.com.key -out test.com.csr
    // paste the content of the test.com.csr file in certificateSigningRequest parameter as a String
    const cfnCertificate = new iot.CfnCertificate(this, 'MyCfnCertificate', {
	      status: 'ACTIVE',
              certificateMode: 'DEFAULT',
	     certificateSigningRequest: ''
 });
 
  }
}
