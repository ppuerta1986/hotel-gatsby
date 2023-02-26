pipeline {
    agent any
    tools {nodejs "NODEJS-18-0-0"}
    stages {
        stage("Crear .env") {
            steps {
                sh "sudo touch .env.production"
                sh "echo 'NAME=${NAME}' >> .env.production"
                sh "echo 'LASTNAME=${LASTNAME}' >> .env.production"
            }
        }
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
