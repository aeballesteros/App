#!/bin/bash

sudo apt-get update
sudo apt-get upgrade
sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
sudo nvm install --lts
sudo install react-router --save
sudo npm install bootstrap --save
sudo npm install react-bootstrap bootstrap@5.1.3
clear
echo Entorno ¡Prepared Environment!
