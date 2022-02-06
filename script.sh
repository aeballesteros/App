#!/bin/bash

sudo apt-get update
sudo apt-get upgrade
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