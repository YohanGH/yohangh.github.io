```
# **************************************************************************** #
#                                                                              #
#                                                         .--.    No           #
#    README.md                                           |o_o |    Pain        #
#                                                        |:_/ |     No         #
#    By: YohanGH <YohanGH@proton.me>                    //    ''     Code      #
#                                                      (|     | )              #
#    Created: 2024/03/02 18:36:17 by YohanGH           '__   _/_               #
#    Updated: 2025/11/10 by YohanGH                    (___)=(___)              #
#                                                                              #
# **************************************************************************** #
```

# Full Stack Documentation Hub

**Hub de documentation Full Stack** - Une arborescence interactive de ressources, outils et documentations pour développeurs Full Stack.

🌐 **[Visiter le site](https://yohangh.github.io/)**

## 📋 Vue d'ensemble

Ce projet compile une collection complète de ressources gratuites et d'outils pour les développeurs Full Stack. L'objectif est d'aider les professionnels et les passionnés à trouver des ressources précieuses pour le développement, le déploiement et la maintenance d'applications full-stack sans frais initiaux.

### ✨ Fonctionnalités

- 🌳 **Arborescence Interactive** : Visualisation D3.js navigable pour explorer des centaines de ressources
- 📚 **Documentation Complète** : Couvre Front-End, Back-End, DevOps, Bases de données et plus
- 🔧 **Outils Gratuits** : Sélection d'outils et frameworks open-source
- 🎯 **Organisé par Catégories** : Ressources classées par domaines techniques
- 🚀 **Mise à Jour Continue** : Contenu régulièrement actualisé
- 🌐 **Open Source** : Projet sous licence GPL-3.0

## 🗂️ Structure du Projet

```
yohangh.github.io/
├── index.html              # Page d'accueil moderne
├── arborescence.html       # Visualisation de l'arborescence interactive
├── arf.json               # Données de l'arborescence (ressources)
├── addContent.json        # Données additionnelles
├── styles/
│   ├── style.css          # Styles pour l'arborescence
│   └── landing.css        # Styles pour la page d'accueil
├── scripts/
│   ├── arf.js            # Logique de visualisation D3.js
│   ├── d3.v3.min.js      # Bibliothèque D3.js
│   └── color-scheme.js   # Gestion du thème clair/sombre
├── assets/
│   └── images/
│       └── favicon.ico
├── SECURITY.md           # Politique de sécurité
├── LICENCE.GPL           # Licence GPL-3.0
├── CHANGELOG.md          # Journal des modifications
└── README.md             # Ce fichier
```

## 🚀 Démarrage Rapide

### Utilisation

1. Visitez [yohangh.github.io](https://yohangh.github.io/)
2. Explorez la page d'accueil pour découvrir les fonctionnalités
3. Cliquez sur "Explorer l'Arborescence" pour accéder à la visualisation interactive
4. Naviguez dans les catégories en cliquant sur les nœuds de l'arbre
5. Basculez entre les modes clair et sombre avec l'interrupteur

### Développement Local

```bash
# Cloner le dépôt
git clone https://github.com/YohanGH/yohangh.github.io.git
cd yohangh.github.io

# Ouvrir avec un serveur local (exemple avec Python)
python -m http.server 8000

# Ou avec Node.js
npx http-server

# Accéder à http://localhost:8000
```

## 📚 Catégories de Ressources

L'arborescence couvre les domaines suivants :

### Front End
- **Web Development** : HTML, CSS, JavaScript, Frameworks (React, Vue, Angular)
- **Design & Media** : Outils de conception, icônes, images, vidéos
- **Build Tools** : Webpack, Parcel, Rollup
- **Testing** : Jest, Mocha
- **Type Checkers** : TypeScript

### Back End
- **Languages** : Python, Node.js
- **Databases** : MySQL, PostgreSQL, Redis
- **APIs** : REST, GraphQL
- **Containerization** : Docker
- **Web Servers** : Nginx, Apache
- **CI/CD** : Jenkins, GitLab CI

### Soft Skills
- Communication
- Teamwork
- Problem Solving
- Time Management
- Leadership

### Tools & Analysis
- Postman, Swagger
- Version Control: Git, GitHub, GitLab
- Competitive Intelligence
- Learning Resources

### Regulations
- GDPR

## 🤝 Contribuer

Les contributions sont les bienvenues ! Voici comment vous pouvez aider :

### Ajouter une Nouvelle Ressource

1. **Fork** le dépôt
2. **Modifiez** le fichier `arf.json` en ajoutant votre ressource au format suivant :

```json
{
  "name": "Nom de la Ressource",
  "type": "url",
  "url": "https://example.com"
}
```

3. **Assurez-vous** que la ressource est :
   - Gratuite et accessible publiquement
   - Légitime et de confiance
   - Pertinente pour le développement Full Stack

4. **Créez une Pull Request** avec une description claire de la ressource et de sa valeur

### Guidelines de Contribution

- Ajoutez une virgule au dernier accolade de l'entrée précédente si vous ajoutez à une catégorie existante
- Validez les URLs externes avant de les ajouter
- Suivez la structure existante de l'arborescence
- Testez localement avant de soumettre

## 🔒 Sécurité

Consultez [SECURITY.md](SECURITY.md) pour notre politique de sécurité et comment signaler des vulnérabilités.

### Signaler un Lien Malveillant

Si vous découvrez un lien compromis dans l'arborescence :
1. Ouvrez une issue GitHub avec le tag `[SECURITY]`
2. Incluez l'URL et une description du problème
3. Nous retirerons le lien sous 24 heures

## 📝 Changelog

Consultez [CHANGELOG.md](CHANGELOG.md) pour l'historique des modifications.

## 📜 Licence

Ce projet est sous licence **GPL-3.0**. Voir le fichier [LICENCE.GPL](LICENCE.GPL) pour plus de détails.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
```

## 🌐 Liens

- **Site Web** : [yohangh.github.io](https://yohangh.github.io/)
- **GitHub** : [@YohanGH](https://github.com/YohanGH)
- **LinkedIn** : [Yohan Regnier](https://www.linkedin.com/in/yohan-regnier-5a2505254)

## 💬 Contact & Notifications

### Pour les Mises à Jour
- **Suivez** le projet sur GitHub (Watch/Star)
- **Connectez-vous** sur LinkedIn pour les annonces

### Suggestions, Commentaires, Feedback
Les retours et suggestions de nouveaux outils sont extrêmement bienvenus ! N'hésitez pas à :
- Ouvrir une **issue** sur GitHub
- Me contacter sur **LinkedIn**
- Soumettre une **Pull Request**

## 🙏 Inspiration

Ce projet a été inspiré par le [OSINT Framework](https://github.com/lockfale/osint-framework) créé par lockfale. Il vise à fournir un ensemble complet de ressources pour le développement Full Stack et les pratiques DevOps.

---

**Construit avec passion pour la communauté des développeurs Full Stack.**

Happy Coding! 🚀

---

*© 2024-2025 Yohan Regnier - Licence GPL-3.0*
