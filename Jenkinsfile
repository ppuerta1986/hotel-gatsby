pipeline {
    agent any
    tools {nodejs "NODEJS-18-0-0"}
    stages {
        stage("Build") {
            steps {
                sh "yarn"
                sh "gatsby build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/hotel.lan"
                sh "sudo cp -r ${WORKSPACE}/public/ /var/www/hotel.lan/"
            }
        }
    }
}
