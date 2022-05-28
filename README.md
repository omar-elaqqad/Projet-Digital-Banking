# Projet-Digital-Banking
Web application based on Spring and Angular which allows to manage bank accounts.

On souhaite créer une application Web basée sur Spring et Angular qui permet de gérer des comptes bancaires. Chaque compte appartient à un client il existe deux types de comptes : Courant et Epargnes. chaque Compte peut subir des opérations de types Débit ou crédit.
L'application se compose des couches suivantes :
 - Couche DAO (Entités JPA et Repositories)
 - Couche Service définissant les opérations suivantes :
    - Ajouter des comptes
    - Ajouter des client
    - Effectuer un débit (Retrait)
    - Effectuer un crédit (Versement)
    - Effectuer un virement
    - Consulter un compte
- La couche DTO
- Mappers (DTO <=>Entities)
- La couche Web (Rest Controllers)
- Couche sécurité (Spring Security avec JWT)

Première partie du projet (Voir la vidéo : https://www.youtube.com/watch?v=muuFQWnCQd0)

Travail à faire :
  1. Créer et tester la couche DAO (Voir la vidéo : https://www.youtube.com/watch?v=muuFQWnCQd0)
  2. Créer et tester la couche service
  3. Créer et tester la couche Web (Rest Controller)
  4. Modifier la couche service et la couche web  en utilisant les DTO
  5. Créer un service d'authentification séparé basé sur Spring Security et JWT (Voir https://www.youtube.com/watch?v=3q3w-RT1sg0)
  6. Sécuriser l'application Digital Banking en utilisant Spring Security et JWT
  7. Créer la partie Frontend Web en utilisant Angular
  8. Créer la partie Frontend Mobile avec Flutter
