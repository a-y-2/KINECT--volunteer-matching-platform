# Kinect Volunteer Matching Platform

## Overview

Kinect is a volunteer matching platform designed to connect volunteers with suitable opportunities. This platform is built with a Next.js backend, a React frontend, and has a DevOps pipeline implemented using Jenkins. The project is containerized using Docker and deployed using Ansible and Kubernetes.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Cloning the Repository](#cloning-the-repository)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Docker](#docker)
  - [Ansible](#ansible)
  - [Kubernetes](#kubernetes)
  - [Kubernetes community collection for ansible](#kubernetes-community-module)
- [Running Tests](#running-tests)
- [Deployment Pipeline](#deployment-pipeline)
- [Logging metrics](#logging-metrics)

## Architecture

- **Frontend:** React
- **Backend:** Next.js
- **DevOps Pipeline:** Jenkins with Docker, Ansible, and Kubernetes
- **Logging:** ELK stack(Elasticsearch, Logstash, Kibana)

## Prerequisites

- Node.js
- React
- Git(VCS)
- Docker
- Jenkins
- Ansible
- Kubernetes
- Elasticsearch and Kibana

##Setup Instructions

### Cloning the Repository(Frontend)

```bash
git clone https://github.com/a-y-2/KINECT--volunteer-matching-platform.git
cd KINECT--volunteer-matching-platform
cd backend
npm install
npm start
```

### Cloning the Repository(Backend)

```bash
git clone https://github.com/a-y-2/KINECT--volunteer-matching-platform.git
cd KINECT--volunteer-matching-platform
cd backend
npm install
npm run start:dev(To start in dev)
npm run build
```

### Setting Up Docker on Ubuntu

Follow these steps to install and configure Docker on your Ubuntu system:

```bash
# Step 1: Update Your System
sudo apt update
sudo apt upgrade

# Step 2: Install Required Packages
sudo apt install apt-transport-https ca-certificates curl software-properties-common

# Step 3: Add Docker’s Official GPG Key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Step 4: Set Up the Docker Repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Step 5: Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Step 6: Start and Enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# Step 7: Verify Docker Installation
docker --version

# Step 8: Manage Docker as a Non-root User
sudo usermod -aG docker $USER

# Log out and back in so that your group membership is re-evaluated
# Alternatively, use the following command:
newgrp docker

# Step 9: Test Docker Installation
docker run hello-world

```

### Setting up Kubernetes

```
# Install Minikube
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb \
&& sudo dpkg -i minikube_latest_amd64.deb

# Start Minikube cluster
minikube start --driver=docker

# Install kubectl
sudo apt-get update \
&& sudo apt-get install -y apt-transport-https ca-certificates curl \
&& sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg \
&& echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list \
&& sudo apt-get update \
&& sudo apt-get install -y kubectl

# Verify installation
minikube status
kubectl version --client
```

### Setting up Ansible

```
sudo apt update && sudo apt install -y software-properties-common \
&& sudo add-apt-repository --yes --update ppa:ansible/ansible \
&& sudo apt install -y ansible

# Installing Ansible Collections
ansible-galaxy collection install community.general

# Installing Ansible Core
sudo apt remove -y ansible \
&& python3 -m pip install --user ansible-core

# Additional Ansible Setup
mkdir -p ~/ansible \
&& echo -e "[webservers]\nweb1.example.com\nweb2.example.com\n\n[dbservers]\ndb1.example.com" > ~/ansible/hosts \
&& echo -e "[defaults]\ninventory = ~/ansible/hosts\nremote_user = your-username" > ~/ansible/ansible.cfg

# Verify Ansible setup
ansible --version
```

### Installing kubernetes community collection for ansible

```
sudo apt install ansible-core
ansible-galaxy collection install community.kubernetes
pip install kubernetes
sudo apt install python3-pip
pip3 install kubernetes
sudo apt install python3-venv
python3 -m venv venv
source venv/bin/activate
source <path-to-venv/bin/activate> : to activate venv to run ansible playbook
```

### Running the ansible playbook file
```
cd into ansible-deploy folder
sudo ansible-playbook -vvv ansible-book.yml -i inventory
```

### Run the Jenkins build which runs the Jenkinsfile from the cloned repo and executes the stages

### After the job runs successfully, manually execute the port forwarding commands
```
kubectl port-forward kinect-backend-deployment-865c79587f-qxvs4 -n minikube 3000:3000
kubectl port-forward kinect-frontend-deployment-6b78b4fbb9-5559b -n minikube 2004:2004
```
### The frontend will noe be accessible at port 2004 and backend at 3000.

#Logging and metrics

```
1.Install Elasticsearch on local(Refer online sources)
2.Upload the log file generated by Wintston library into the file upload section in Elasticsearch dashboard
```






