# Mettre en place une shopping list en trois composant.

- Parent ( contient la logique : la liste , les methodes d'ajout et de suppression )
- Enfant 1 ( Recuperation d'un nouvel article : plusieurs inputs pour récupérer les valeurs entrez par l'utilisateur et le boutton ajout )

- Enfant 2 ( Affichage de la liste ( for ) et suppression d'un article( utilisation de l'id) )

---

- Dans le premier, Plusieurs champs texte permettant l’ajout d’un article à la liste ( output)

- Dans le deuxième, l’affichage de la liste et la possibilité de supprimer un article. ( input et output)

- Les deux composant doivent être afficher dans le parent 

- Modele : 
```typescript
export interface Article {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
  promo : boolean;
  category : string;
}
```