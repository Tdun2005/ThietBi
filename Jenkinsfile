pipeline {
    agent any

    environment {
        DEPLOY_DIR = "D:\\ThietBi\\index"  

    stages {
        stage('Clone code từ GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Tdun2005/ThietBi.git'
            }
        }

        stage('Deploy vào IIS folder') {
            steps {
                bat "echo Deploying vào thư mục %DEPLOY_DIR%"
                bat "xcopy * %DEPLOY_DIR% /E /Y /I"
            }
        }
    }
}
