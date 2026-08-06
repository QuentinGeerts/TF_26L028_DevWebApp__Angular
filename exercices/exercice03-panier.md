# Exercice 03 - Panier

Créer un composant features/exercices/exo03-panier

Le composant aura deux propriétés :
- Prix unitaire (valeur de départ: 25)
- Quantité (valeur de départ: 2)

---

Vous devrez afficher les informations suivantes :

```md
Prix unitaire: 25 €
[+5 €] [-5 €]

Quantité: 2
[+] [-]

Total HT: 50 €
TVA (20%): 10 €
Total TTC: 60 €
```

Comportement des boutons :
- +5 € / -5 € modifie le prix unitaire
- + / - modifie la quantité

---

Contraintes : exactement 2 signaux dans tout le composant
Le total HT, la TVA et le total TTC doivent être calculé

---

Bonus : 
- Empêcher la quantité de descendre en dessoUS de 1
- Empêcher le prix unitaire de devenir négatif