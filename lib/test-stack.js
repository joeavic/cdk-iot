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
            status: 'ACTIVE',
            certificateMode: 'SNI_ONLY',
            certificatePem: '/home/neti/Downloads/cacert.pem'
        });
    }
}
exports.TestStack = TestStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3Qtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQWdEO0FBRWhELDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFFOUMsTUFBYSxTQUFVLFNBQVEsbUJBQUs7SUFDbEMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2Q0FBNkM7UUFFN0MsbUJBQW1CO1FBQ25CLG1EQUFtRDtRQUNuRCxpREFBaUQ7UUFDakQsTUFBTTtRQUNOLG1FQUFtRTtRQUNuRSxpREFBaUQ7UUFDakQsTUFBTSxjQUFjLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDckUsTUFBTSxFQUFFLFFBQVE7WUFDVCxlQUFlLEVBQUUsVUFBVTtZQUMzQixjQUFjLEVBQUUsaUNBQWlDO1NBQzdELENBQUMsQ0FBQztJQUVGLENBQUM7Q0FDRjtBQW5CRCw4QkFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgYXdzX2lvdCBhcyBpb3QgfSBmcm9tICdhd3MtY2RrLWxpYic7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnYXdzLWNkay1saWIvYXdzLXNxcyc7XG5cbmV4cG9ydCBjbGFzcyBUZXN0U3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy8gVGhlIGNvZGUgdGhhdCBkZWZpbmVzIHlvdXIgc3RhY2sgZ29lcyBoZXJlXG5cbiAgICAvLyBleGFtcGxlIHJlc291cmNlXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdUZXN0UXVldWUnLCB7XG4gICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxuICAgIC8vIH0pO1xuICAgIC8vIFRoZSBjb2RlIGJlbG93IHNob3dzIGFuIGV4YW1wbGUgb2YgaG93IHRvIGluc3RhbnRpYXRlIHRoaXMgdHlwZS5cbiAgICAvLyBUaGUgdmFsdWVzIGFyZSBwbGFjZWhvbGRlcnMgeW91IHNob3VsZCBjaGFuZ2UuXG4gICAgY29uc3QgY2ZuQ2VydGlmaWNhdGUgPSBuZXcgaW90LkNmbkNlcnRpZmljYXRlKHRoaXMsICdNeUNmbkNlcnRpZmljYXRlJywge1xuXHQgICAgICBzdGF0dXM6ICdBQ1RJVkUnLFxuICAgICAgICAgICAgICBjZXJ0aWZpY2F0ZU1vZGU6ICdTTklfT05MWScsXG4gICAgICAgICAgICAgIGNlcnRpZmljYXRlUGVtOiAnL2hvbWUvbmV0aS9Eb3dubG9hZHMvY2FjZXJ0LnBlbSdcbiB9KTtcbiBcbiAgfVxufVxuIl19