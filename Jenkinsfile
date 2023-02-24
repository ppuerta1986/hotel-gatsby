pipeline {
    agent any
    tools {nodejs "NODEJS-14-18-1"}
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
