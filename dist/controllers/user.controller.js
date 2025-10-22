"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.getUsers = void 0;
/**
* Contrôleur pour la route GET /users
* Description : Renvoie un message avec la liste des utilisateurs (simulation)
* @param req - Objet représentant la requête HTTP (non utilisé ici)
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
const getUsers = (req, res) => {
    res.json({ message: 'Liste des utilisateurs' }); // Envoie une réponse JSON avec un message
};
exports.getUsers = getUsers;
/**
* Contrôleur pour la route POST /users
* Description : Ajoute un nouvel utilisateur en récupérant les données du corps de la requête
* @param req - Objet représentant la requête HTTP contenant les données utilisateur
* @param res - Objet permettant d'envoyer une réponse HTTP
*/
const addUser = (req, res) => {
    const { name, email } = req.body; // Récupération des données envoyées dans le corps de la requête
    // Envoie une réponse JSON confirmant l'ajout de l'utilisateur
    res.json({ message: `Utilisateur ${name} ajouté avec succès !`, email });
};
exports.addUser = addUser;
