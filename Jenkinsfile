pipeline {
    agent any
    tools {nodejs "NODEJS-18-0-0"}
    stages {
        stage("Docker Build") {
            steps {
                sh "docker rm ${WORKSPACE}"
                sh "docker build -t ${WORKSPACE} ."
                sh "docker run --name ${WORKSPACE} -d -p 8000:80 ${WORKSPACE}"
                sh "docker cp ${WORKSPACE}:/usr/share/nginx/html /tmp/${WORKSPACE}"
            }
        }
        stage("Deploy in apache") {
            steps {
                sh "sudo rm -rf /var/www/hotel.lan"
                sh "sudo cp -r /tmp/${WORKSPACE} /var/www/hotel.lan/"
            }
        }
        stage("Docker Stop") {
            steps {
                sh "docker stop ${WORKSPACE}"
            }
        }
    }
}
