# Consomation API dans un nouveau projet

## Création d'un nouveau projet ANGULAR

- configuration du router-outlet
- Implémentation d'une barre de navigation
- implémentation d'une page d'accueuil

# Consomation API

- Configuration dans le fichier : app.config.ts

- Consommer au moins 3 API différentes ( GET )
- Pour chaque API implémenter le service 
- prévoir un sous-routage par consomation de service 
- Implémenter les composants ( list - details) pour chaque service

# Simulation d'un AuthService

- implémenter un authService qui contient au moins un signal isLogged
- une methode login - logout 
- tenir compte de la persistance des données ( localStorage )
- implémenter un composant login ( page ou composant dans la navbar)
- login avec un FormGroup et message d'erreur
- afficher logout si l'utilisateur est connecté
- utiliser le signal du authService pour afficher ou cacher les liens vers les pages list de chaques service
- implémentation d'un guard pour limiter l'accès au routes list et détails de chaque services

# Consignes : 
- prévoir les modèles utilisé dans l'application
- utilisation du router et activatedRoute 
- implémenter un composant pour les éléments de la liste en utilisant ( input-output )
- implémenter au moins un resolver

Liens API : 
- https://sampleapis.com/api-list
- https://github.com/public-apis/public-apis