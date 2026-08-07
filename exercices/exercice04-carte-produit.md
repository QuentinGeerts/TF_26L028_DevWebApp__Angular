# Exercice 04 - Carte produit

Créer un composant features/exercices/exo04-carte-produit

Le composant aura les propriétés suivantes :

- Nom du produit
- Prix
- URL de l'image
- Description de l'image
- Taille de l'image (valeur de départ: 200px)
- Stock (valeur de départ: 3)
- Produit en promotion (booléen)
- Note du vendeur (chaîne vide)

Vous devrez afficher les informations suivantes: 

```md
[Image du produit]

Nom du produit [ PROMO ]
Prix: 29.99
Stock: 3 article(s) <- en rouge quand le stock vaut 0
Statut: En stock 

[Ajouter au panier] [Réapprovisionner] [Agrandir l'image]

Renommer le produit: [___________]
Note du vendre: [___________]
Note actuelle: ...
```

## Comportements attendus:

- L'image utilise l'URL, la description et la taille stockées dans le composant
- [Ajouter au panier] diminue le stock de 1, jamais en-dessous de 0, est désactivé quand le stock vaut 0
- [Réapprovisionner] remet le stock à 3
- [Agrandir l'image] augmente la taille de 30
- Le badge [PROMO] n'est visible que si le produit est en promotion
- Le statut affiche "En stock" ou "Rupture de stock"
- Le champ "Renommer le produit" modifie le nom au fur et à mesure de la frappe
- Le champ "Note du vendeur" s'affiche en dessous seulement après avoir validé avec la touche Enter

## Contraintes

- Aucune valeur non textuelle ne doit passer par l'interpolation
- Le statut doit être calculé, pas stocké
- Le badge PROMO doit utiliser une class binding
- La couleur du stock utilise un style binding
- Le champ "Renommer le produit" doit utiliser la version manuelle du Two-Way Binding
- Le champ "Note du vendeur" doit utiliser la version automatique (ngModel)

## Bonus

- Afficher la valeur totale du stock restant (prix * stock)
- Vider la note du vendeur avec la touche Echap