# AWS Lambda - Static outgoing IP address

This repository is created according to article [AWS Lambdas with a static outgoing IP](http://techblog.financialengines.com/2016/09/26/aws-lambdas-with-a-static-outgoing-ip/) by Ivonne Roberts. By using this repository you do not have to create all AWS resources by hand, but you can let AWS CloudFormation to do it for you. To see CloudFormation config open `serverless.yml` file. Steps mentioned in the article are marked in this file, so that it is easier to follow.

## Requirements:

- curl
- docker
- docker-compose

## Usage:

Clone repository:
```
git clone https://github.com/ikim23/aws-lambda-static-ip.git
```
Create `.env` file:
```
mv .env.template .env
```
Set environment variable values in `.env` file:

|Variable|Description|
|-|-|
|AWS_ACCESS_KEY_ID|Access key ID for serverless framework|
|AWS_SECRET_ACCESS_KEY|Access key for serverless framework|
|STAGE|name of deployment stage (e.g dev)|
|REGION|deployment region (e.g us-west-1)|

Install NPM modules:
```
docker-compose run install
```
Deploy app to AWS:
```
docker-compose run deploy
```
Trigger caller function to get Elastic IP address (static IP):
```
curl -XGET https://<API_IP>.execute-api.<REGION>.amazonaws.com/<STAGE/call
```
