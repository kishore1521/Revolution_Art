pipeline {
  agent any
  stages {
    stage('Install dependencies and build') {
      steps {
        sh '''npm install
npm run build'''
      }
    }

    stage('Testing ') {
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