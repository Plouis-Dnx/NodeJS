# API NodeJS

## Installation
Clonez le projet : ```git clone https://github.com/Plouis-Dnx/NodeJS.git``` \
Déplacez-vous dans le dossier NodeJS/api-node-ts \
Dans votre terminal, installez les paquets manquants : \
```npm install ...``` :
 - express
 - dotenv
 - -D typescript ts-node @types/node @types/express nodemon

## Lancement
Lancez le serveur avec ```npm run dev``` \
Vous devriez voir quelque chose comme : 
![Alt text](./images_tests/console/message_serveur.png "Message de lancement du serveur")

## Description des Routes
```/``` retourne un message "API Node.js avec TypeScript fonctionne !" \
```/users``` retourne la liste des utilisateurs

## Tests et Démonstrations
### Console
![Alt text](./images_tests/console/curlGET_console.png)
![Alt text](./images_tests/console/curlPOST_console.png)
![Alt text](./images_tests/console/message_serveur.png)
![Alt text](./images_tests/console/curlPOST_noEmail.png)
![Alt text](./images_tests/console/curlPOST_noName.png)

### Postman
GET http://localhost:4000/ \
![Alt text](./images_tests/postman/getRoot_postman.png) 

GET http://localhost:4000/users : \
![Alt text](./images_tests/postman/curlGET_users_PostMan.png) 

POST http://localhost:4000/users \
![Alt text](./images_tests/postman/POST_postman.png)