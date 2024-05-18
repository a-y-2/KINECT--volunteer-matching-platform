pipeline {
  agent any

  stages {
    //This stage checks out the code from a Git repository using the git step.
    stage('Git Pull') {
        steps {
            git branch: 'main', url: 'https://github.com/a-y-2/KINECT--volunteer-matching-platform.git'
        }
    }

    //This stage builds a Docker image for the frontend application and pushes it to a Docker registry.
    stage('Build and Push Frontend Image') {
      environment {
        IMAGE_NAME = ''
      }
      steps {
        //Changes the current working directory to client before executing the script inside.
        dir('frontend') {
          script {
            // sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            // sh 'docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}'
            // sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'

            // Find existing container with the image name
            def containerId = sh(script: 'docker ps -a -f name=ayushi988/kinect-frontend --format "{{.ID}}"', returnStdout: true).trim()
            if (containerId) {
            // Stop and remove the container if found
            sh "docker stop $containerId && docker rm $containerId"
            }
            IMAGE_NAME=docker.build "ayushi988/kinect-frontend"
            docker.withRegistry('','DockerHubCred'){
                IMAGE_NAME.push()
            }
          }
        }
      }
    }

    stage('Build, Test and Push Backend Image') {
      environment {
        IMAGE_NAME = ''
      }
      steps {
        dir('backend') {
          script {
                // Find existing container with the image name
            def containerId = sh(script: 'docker ps -a -f name=ayushi988/kinect --format "{{.ID}}"', returnStdout: true).trim()
            if (containerId) {
            // Stop and remove the container if found
            sh "docker stop $containerId && docker rm $containerId"
            }
            IMAGE_NAME=docker.build "ayushi988/kinect"
            docker.withRegistry('','DockerHubCred'){
                IMAGE_NAME.push()
            }
          }
        }
      }
    }

    stage('Deploy with Ansible') {
      steps {
          sh 'ansible-playbook -vvv ansible-book.yml -i ansible-deploy/inventory'
        }
    }

  }
}
