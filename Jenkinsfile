pipeline {
    agent any
    environment {
        NAME = ${NAME}
        LASTNAME = ${LASTNAME}
    }
    stages {
        stage("Docker Build") {
            steps {
                sh "docker build -t ${JOB_NAME} ."
                sh "docker run --name ${JOB_NAME} -d -p 8000:80 ${JOB_NAME}"
                sh "docker cp ${JOB_NAME}:/usr/share/nginx/html /tmp/${JOB_NAME}"
            }
        }
        stage("Deploy in apache") {
            steps {
                sh "sudo rm -rf /var/www/hotel.lan"
                sh "sudo cp -r /tmp/${JOB_NAME} /var/www/hotel.lan/"
                sh "sudo rm -rf /tmp/${JOB_NAME}"
            }
        }
        stage("Docker Stop") {
            steps {
                sh "docker stop ${JOB_NAME}"
                sh "docker rm ${JOB_NAME}"
                sh "sudo rm .env.production"
            }
        }
    }
}
