# Example repository of a CI/CD system with Github Actions and Google App Engine.

This repository serves as an example of how to set up 3 different environments for one service in GAE.

The repository deploys a NodeJS application that serves static files (or an API if you want to change it), but the concepts can be reused for any other language.

The blog post explaining the process can be found [here](https://blog.etereo.io/multi-environment-deployment-with-google-app-engine-and-github-actions-351041ced92a?sk=b0d2c26304f452602f5684a3cc471f04) and [here](https://blog.etereo.io/deploying-a-node-application-in-google-app-engine-with-github-actions-2bd0d4e443db?sk=700209e9b13de262cd6217c53b413ac4)


If you want to match certain branches or tag names for your workflows, check the pattern matching guide: 
[here](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)