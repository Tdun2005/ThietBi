pipeline {
    agent any

    environment {
        DEPLOY_DIR = "D:\\ThietBi\\index"  // hoặc dùng D:\\ThietBi\\index nếu muốn
    }

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
        stage('Deploy to IIS') {
            steps {
                powershell '''
               
        
                Import-Module WebAdministration
                if (-not (Test-Path IIS:\\Sites\\MySite123)) {
                    New-Website -Name "MySite82" -Port 82 -PhysicalPath "D:\\ThietBi\\index"
                }
                '''
            }
        } // end deploy iis

    }
}  // 👈👈 DẤU NÀY LÀ QUAN TRỌNG NHẤT! Dấu đóng cuối file!
