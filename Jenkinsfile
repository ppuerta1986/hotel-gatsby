pipeline {
    agent any
    stages {
        stage("Docker Build") {
            steps {
                sh "docker stop ${JOB_NAME}"
                sh "docker rm ${JOB_NAME}"
                sh "docker build -t ${JOB_NAME} ."
                sh "docker run --name ${JOB_NAME} -d -p 8000:80 ${JOB_NAME}"
            }
        }
    }
}
