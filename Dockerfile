FROM node:6.10

# create project directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy project files fo WORKDIR
COPY . .

# install AWS CLI
# To configure AWS CLI setup environment variables:
# AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION
RUN apt-get update
RUN apt-get -y install python-setuptools python-dev build-essential python-pip
RUN pip install --upgrade pip
RUN pip install awscli --upgrade --user

ENV PATH=~/.local/bin:$PATH

# install dependencies
RUN npm i --silent -g serverless
