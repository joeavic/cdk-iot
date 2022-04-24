import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_iot as iot } from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    // The code below shows an example of how to instantiate this type.
    // The values are placeholders you should change.
    const cfnCertificate = new iot.CfnCertificate(this, 'MyCfnCertificate', {
	      status: 'ACTIVE',
              certificateMode: 'DEFAULT',
              certificatePem: '',
	      caCertificatePem : ''
 });
 
  }
}
