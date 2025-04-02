pipeline {
    agent any
   
    tools {
        nodejs '23.10.0'
        }
   
    stages {
        stage('Clone Repository') {
            steps {
                git branch:'main', url: 'https://github.com/sowjanya-it/nodeapp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Project') {
            steps {
                 echo 'Project Build Ready'      
                 }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}

    post {
        success {
            echo 'Build Successful!'
        }
        failure {
            echo 'Build Failed!'
        }
    }
}

