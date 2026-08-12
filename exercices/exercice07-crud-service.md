# Exo Crud. 1 Service


- Création d'un nouveau projet : ng new nom-projet

- Configuration du router-outlet dans le fichier app.html 

- Creation d'une page d'accueil qui sera affichée par défaut ( ng g c home )

- Création d'une navbar qui sera afficher au dessus du router-outlet ( ng g c navbar)

- Création de deux pages : 
    - Page 1 : Liste des voitures ( ng g c list-vehicule)
    - Page 2 : Ajout d'une voiture ( ng g c add-vehicule )

    - les rendre accessible via la navbar ( routerLink )

- Création d'un modèle Car : 
    - Id : number
    - brand : string
    - color : string
    - puissance : number
    - imageUrl : string

- Création d'un service qui permet la gestion des voitures ( ng g s vehicule/vehiculeService )
    - Liste de voitures ( signal<Car[]>([]) )
    - Methode : Ajout d'une voiture ( add(newCar : Car))
    - Methode : Suppression d'une voiture ( delete(id : number) )
    - Methode : Récupération des voitures ( getAll() )

- Implémenter la page liste pour afficher les voitures au chargement du composant ( onInit , injection du service )

- Implémenter la page ajout pour ajouter une voiture via le service ( injection du service )
    - Bonus :  rediriger vers la page liste après l'ajout