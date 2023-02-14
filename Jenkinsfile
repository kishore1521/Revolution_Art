pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install --force'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Testing') {
      steps {
        echo 'Testing '
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm start'
      }
    }

  }
}