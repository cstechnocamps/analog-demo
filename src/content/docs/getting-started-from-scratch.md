---
title: "Getting Started from Scratch" 
date: "2024-03-3"
category: "Guides"
mainImage: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's get this party started from scratch"
---

# Getting Started From Scratch
this is to get started with a project like this, although I would recommend doing the normal [getting started](./docs/getting-started)
more info can be found on the [official docs](https://analogjs.org/docs/getting-started) 

1. Create a folder for your project 
2. Open it in Vs Code 
3. Use ctr/cmd + ` to open a terminal
4. write the following 
    ```bash
    npm create analog@latest
    ```
5. give the project a name
6. use angular 17 template
7. use tailwindcss
8. create the necessary folders:
    - in the assets folder add the following folders:
        - fonts 
        - images
    - in the src folder add this folder:
        - content  
            - blog
    - in the app folder add 
        - components
        - layouts
        - models
        - services
9. cd into the analog-demo folder by typing 
    ```bash
    cd analog-demo
    ```
10. run 
    ```bash
    npm i 
    ```
    to install all of the dependencies
11. use 
    ```bash
    npm run dev
    ```
    to run the program