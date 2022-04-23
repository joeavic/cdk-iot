"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_cdk_lib_2 = require("aws-cdk-lib");
// import * as sqs from 'aws-cdk-lib/aws-sqs';
class TestStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        // example resource
        // const queue = new sqs.Queue(this, 'TestQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        // The code below shows an example of how to instantiate this type.
        // The values are placeholders you should change.
        const cfnCertificate = new aws_cdk_lib_2.aws_iot.CfnCertificate(this, 'MyCfnCertificate', {
            status: 'status',
            // the properties below are optional
            caCertificatePem: 'caCertificatePem',
            certificateMode: 'certificateMode',
            certificatePem: 'certificatePem',
            certificateSigningRequest: 'certificateSigningRequest',
        });
    }
}
exports.TestStack = TestStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3Qtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFFOUMsTUFBYSxTQUFVLFNBQVEsbUJBQUs7SUFDbEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2Q0FBNkM7UUFFN0MsbUJBQW1CO1FBQ25CLG1EQUFtRDtRQUNuRCxpREFBaUQ7UUFDakQsTUFBTTtRQUNOLG1FQUFtRTtRQUNuRSxpREFBaUQ7UUFDakQsTUFBTSxjQUFjLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDckUsTUFBTSxFQUFFLFFBQVE7WUFFZCxvQ0FBb0M7WUFDekMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ2xDLGVBQWUsRUFBRSxpQkFBaUI7WUFDaEMsY0FBYyxFQUFFLGdCQUFnQjtZQUM5Qix5QkFBeUIsRUFBRSwyQkFBMkI7U0FDM0QsQ0FBQyxDQUFDO0lBRUwsQ0FBQztDQUNGO0FBdkJELDhCQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBhd3NfaW90IGFzIGlvdCB9IGZyb20gJ2F3cy1jZGstbGliJztcbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mtc3FzJztcblxuZXhwb3J0IGNsYXNzIFRlc3RTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvLyBUaGUgY29kZSB0aGF0IGRlZmluZXMgeW91ciBzdGFjayBnb2VzIGhlcmVcblxuICAgIC8vIGV4YW1wbGUgcmVzb3VyY2VcbiAgICAvLyBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ1Rlc3RRdWV1ZScsIHtcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4gICAgLy8gfSk7XG4gICAgLy8gVGhlIGNvZGUgYmVsb3cgc2hvd3MgYW4gZXhhbXBsZSBvZiBob3cgdG8gaW5zdGFudGlhdGUgdGhpcyB0eXBlLlxuICAgIC8vIFRoZSB2YWx1ZXMgYXJlIHBsYWNlaG9sZGVycyB5b3Ugc2hvdWxkIGNoYW5nZS5cbiAgICBjb25zdCBjZm5DZXJ0aWZpY2F0ZSA9IG5ldyBpb3QuQ2ZuQ2VydGlmaWNhdGUodGhpcywgJ015Q2ZuQ2VydGlmaWNhdGUnLCB7XG5cdCAgICAgIHN0YXR1czogJ3N0YXR1cycsXG5cblx0ICAgICAgICAvLyB0aGUgcHJvcGVydGllcyBiZWxvdyBhcmUgb3B0aW9uYWxcblx0XHQgIGNhQ2VydGlmaWNhdGVQZW06ICdjYUNlcnRpZmljYXRlUGVtJyxcblx0XHQgICAgY2VydGlmaWNhdGVNb2RlOiAnY2VydGlmaWNhdGVNb2RlJyxcblx0XHQgICAgICBjZXJ0aWZpY2F0ZVBlbTogJ2NlcnRpZmljYXRlUGVtJyxcblx0XHQgICAgICAgIGNlcnRpZmljYXRlU2lnbmluZ1JlcXVlc3Q6ICdjZXJ0aWZpY2F0ZVNpZ25pbmdSZXF1ZXN0JyxcbiAgICB9KTtcbiBcbiAgfVxufVxuIl19