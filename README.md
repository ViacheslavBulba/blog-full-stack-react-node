Development notes

---

FRONTEND

---

npx create-react-app blog-full-stack-react-node

cd blog-full-stack-react-node

npm start

---

create 'pages' folder inside src

create new files inside it, for your pages, like About.js, Home.js etc.

import newly created components in App.js

npm i react-router-dom

---

REACT FEATURES USED:

{ BrowserRouter, Routes, Route } from 'react-router-dom';

{ Link } from 'react-router-dom';

{ useParams } from 'react-router-dom';

---

BACKEND

---

create folder 'server'

cd server

npm init -y

npm i express

add  "type": "module", into package.json for the server so you can use modern syntax like 'import...'

nodemon src/server.js
