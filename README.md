# Electron_Comp2068
Steps to install and make a simple application with Electron.js

1) initialize the node.js in your application folder using and yor entry point to the application should be main.js 

npm init

{
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "author": "Jane Doe",
  "license": "MIT"
}

2) install the electron.js 
npm install electron --save-dev

3) add a start command in Script section of package.json file 
{
  "scripts": {
    "start": "electron ."
  }
}

4) add .gitignore file to your project you can use this link as template 
https://github.com/github/gitignore/blob/main/Node.gitignore

5) start the application in the terminal 
npm start 

link to my DemoApplication is https://electron-uzvh.onrender.com/
