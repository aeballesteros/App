#!/bin/bash

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server
sudo service mysql start
sudo mysql -uroot -p  -e "CREATE DATABASE mydb";
sudo mysql -uroot -p  -e "CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password'";
sudo mysql -uroot -p  -e "GRANT ALL PRIVILEGES ON *.* TO 'prueba'@'localhost'";
sudo mysql -uroot -p  -e "FLUSH PRIVILEGES";
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
sudo nvm install --lts
sudo npm install react-bootstrap bootstrap@5.1.3
sudo install react-router --save
sudo npm install bootstrap --save
sudo npm install react-bootstrap bootstrap@5.1.3
sudo npm i -g @nestjs/cli
sudo npm install --save @nestjs/typeorm typeorm mysql2
sudo npm run typeorm -- migration:generate -init
sudo npm run typeorm -- migration:run
clear
echo Entorno ¡Prepared Environment!