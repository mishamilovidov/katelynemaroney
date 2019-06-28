# Katelyne Maroney 👩‍💻

This project is for [katelynemaroney.com](https://katelynemaroney.com). You can 
find Katelyne on 📷 [Instagram](https://www.instagram.com/katelyne_m/) and
🐦 [Twitter](https://twitter.com/imthunderbandit) @katelyne_m.

## Local Setup

You can get this project up and running using Node.js via npm.

### 🐢 Node.js via npm

* Install [Node.js](http://nodejs.org/) (v8 or newer)
* Clone repository
* Change to repository root
* Run `npm install` to install packages
* Run `npm start` to get local server up and running on port 3000


## Deployment

The site is hosting using Firebase Hosting and is deploy via Google Cloud Build.
A build is trigger anytime the master branch is changed. Build steps are outlined
in the [cloudbuild.yaml](cloudbuild.yaml) file in the root of the repo.
