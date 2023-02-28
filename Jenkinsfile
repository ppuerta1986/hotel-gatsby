pipeline {
    agent any
    stages {
        stage("Docker Build") {
            steps {
                sh "docker build -t ${JOB_NAME} ."
                sh "docker run --name ${JOB_NAME} -d -p 8000:80 ${JOB_NAME}"
            }
        }
    }
}
