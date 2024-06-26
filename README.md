# README - Argent Bank 💸
[![HTML](https://img.shields.io/badge/html-20232a?style=for-the-badge&logo=html5&logoColor=61dafb)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/css-20232a?style=for-the-badge&logo=css3&logoColor=1572b6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/javascript-20232a?style=for-the-badge&logo=javascript&logoColor=f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=61dafb)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/redux_toolkit-20232a?style=for-the-badge&logo=redux&logoColor=764abc)](https://redux-toolkit.js.org/)


## Objectifs

Ce projet vise à développer une application web pour Argent Bank en deux phases distinctes : l'authentification des utilisateurs et la gestion des transactions.

### Phase 1: Authentification des utilisateurs

#### Contraintes techniques :

- Développement d'une application web responsive avec React.
- Utilisation de Redux pour gérer l'état de l'application.
- Intégration du HTML statique et du CSS fournis pour les pages d'accueil, de connexion et de profil.

#### Contraintes fonctionnelles :

- L'utilisateur peut visiter la page d'accueil.
- Connexion au système via JWT pour l'authentification.
- Accès à la page de profil une fois connecté.
- Modification du profil (nom et prénom) avec conservation des données.
- Déconnexion de l'utilisateur avec redirection vers la page d'accueil.

### Phase 2: Modéliser l'API pour la gestion des transactions

#### Contraintes techniques :

- Utilisation de Swagger et YAML pour spécifier les endpoints d'API.
- Utilisation de Redux Toolkit (createAsyncThunk et createSlice) sur la branche Main.
- Utilisation de RTK Query et createApi pour une gestion optimisée des appels à l'API sur la branche createApi.

### Compétences évaluées

- Implémentation d'un gestionnaire d'état dans une application React avec Redux et Redux Toolkit.
- Authentification et interaction avec une API REST.
- Modélisation et documentation d'une API avec Swagger.

## Installation

### Prérequis

- Git
- Node.js v18
- MongoDB Community Server

### Dépendances

- React: ^18.2.0
- React-router-dom: 6.23.1
- React-redux: ^9.1.2
- Redux: ^5.0.1
- @reduxjs/toolkit: 1.22.19

### Procédure d'installation

1. **Clonage du repository :**

   ```bash
   git clone https://github.com/Ekkilibre/Argent-Bank
    ```

2. **Installation et lancement du Back-end :**

- Aller dans le dossier "Back"
- Vérifier la version de Node: node --version
- Vérifier la version de MongoDB: mongo --version
- Installer les dépendances: npm install ou yarn
- Installer les dépendances:
  ```bash
  npm install
  ```
  ou
  ```bash
  yarn
  ```
- Lancer le back-end:
    ```bash
    npm run dev:server
    ```
    ou
    ```bash
    yarn dev:server
    ```

3. **Création d'utilisateurs dans la base de données :**
   ```bash
   npm run populate-db
    ```

4. **API Documentation :**
   
   Une fois le serveur local lancé, visitez : http://localhost:3001/api-docs

5. **Installation et lancement du Front-end :**
- Aller dans le dossier "Front"
- Installer les dépendances pour le front-end:
- ```bash
    npm install
    ```
    ou
    ```bash
    yarn
    ```
- Lancer le front-end:
  ```bash
  npm start
  ```
  ou
  ```bash
  yarn dev
  ```
Le front-end sera accessible à l'URL : http://localhost:5173/

## Utilisateurs en base de données

- **Tony Stark**
  - First Name: Tony
  - Last Name: Stark
  - Email: tony@stark.com
  - Password: password123

- **Steve Rogers**
  - First Name: Steve
  - Last Name: Rogers
  - Email: steve@rogers.com
  - Password: password456


## Outils utilisés

- Visual Studio Code
- React 18
- Vite
- React Router V6
- Redux Toolkit - Bibliothèque JS de gestion d'état pour applications web
- GitHub - Outil de gestion de versions

## Auteur

Développé avec ❤️ par [Dany XIONG](https://github.com/Ekkylibre).