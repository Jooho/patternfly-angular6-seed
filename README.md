# Patternfly Angular6 Seed project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Patternfly Setup

Install packages
```
npm install --save patternfly
npm install --save patternfly-ng
npm install --save jquery 
npm install --save bootstrap@3
```

Add styles and scripts in angular.json
```
           "styles": [
               "node_modules/dragula/dist/dragula.min.css",
               "node_modules/patternfly/dist/css/patternfly.css",
               "node_modules/patternfly/dist/css/patternfly-additions.css",
               "node_modules/patternfly-ng/dist/css/patternfly-ng.css",
               "src/styles.css"
            ],
            "scripts": [
               "node_modules/patternfly/dist/js/patternfly-settings.js",
               "node_modules/jquery/dist/jquery.js",
               "node_modules/bootstrap/dist/js/bootstrap.js"
            ]
```         

Add global in polyfiles.ts
```
(window as any).global = window;
```
