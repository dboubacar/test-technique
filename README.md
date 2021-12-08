**Projet : application web de services bancaires**

**A-PRÉREQUIS:**

- mysql-server
  - maven
    - tomcat server
      - installer node.js
        - npm install -g npm@latest

**B-INSTALLATION:**

**1-Configuration de la base de données:**

Le fichier **bank.sql** (se trouve à la racine du projet) contient le nom et le schéma de la base de données.

Le pilote JDBC se connecte au serveur  avec les identifiant suivants:

**Nom utilisateur :**root

**Mot Passe:** Devrep2021\*

**2-Démarrer le backend:**

Créer un war avec **mvn clean install** et déployer le war sur un **serveur tomcat**

**3-Démarrer le Front:**

npm start  puis se rendre: **localhost:4200/**
