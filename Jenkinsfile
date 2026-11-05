pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t vle7-app:${BUILD_NUMBER} .'
            }
        }

        stage('Load Image into Kubernetes') {
            steps {
                sh '/usr/local/bin/kind load docker-image vle7-app:${BUILD_NUMBER} --name pbl3'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
                sh 'kubectl set image deployment/vle7-deployment vle7-container=vle7-app:${BUILD_NUMBER}'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl rollout status deployment/vle7-deployment --timeout=120s'
                sh 'kubectl get pods'
                sh 'kubectl get services'
            }
        }
    }
}
