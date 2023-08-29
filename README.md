[//]: # (# TaskManager)

[//]: # ()

[//]: # (This project was generated with [Angular CLI]&#40;https://github.com/angular/angular-cli&#41; version 16.2.0.)

[//]: # ()

[//]: # (## Development server)

[//]: # ()

[//]: # (Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.)

[//]: # ()

[//]: # (## Code scaffolding)

[//]: # ()

[//]: # (Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.)

[//]: # ()

[//]: # (## Build)

[//]: # ()

[//]: # (Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.)

[//]: # ()

[//]: # (## Running unit tests)

[//]: # ()

[//]: # (Run `ng test` to execute the unit tests via [Karma]&#40;https://karma-runner.github.io&#41;.)

[//]: # ()

[//]: # (## Running end-to-end tests)

[//]: # ()

[//]: # (Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.)

[//]: # ()

[//]: # (## Further help)

[//]: # ()

[//]: # (To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference]&#40;https://angular.io/cli&#41; page.)

## Versions de NodeJs, NPM, Angular et Angular-CLI

- NodeJs : 18.17.1
- NPM : 9.6.7
- Angular et Angular CLI : 16.2.0

## Suite des commandes effectuées

- ng build

On constate que tous les fichiers de notre application sont minifiés

## Versions de yarn et Compodoc

- Yarn : 1.22.19
- Compodoc : 1.1.21

# Décrivez les opérations à effectuer pour mettre en place le module HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec un paramètre de requête "?param=test".

## Importer HttpClientModule

Vérier que HttpClientModule est importé dans votre AppModule

## Injecter HttpClient

Injecter HttpClient dans le service ou le composant où nous faisons la requête Http

## Effectuer la requête Http

Utilisez la méthode `get()` | `put()` | `post()` du service HttpClient pour effectuer une requête en fonction du type souhaité.

Dans notre cas si nous devons utiliser l'url "https://domain/data?param=test" nous devons utiliser la méthode `get()`

## Consommer les données

Dans le composant ou le service qui effectue la requête on peut souscrire à l'observable pour obtenir les données de la réponse.
