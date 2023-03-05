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

npm i axios

---

REACT FEATURES USED:

{ BrowserRouter, Routes, Route } from 'react-router-dom';

{ Link } from 'react-router-dom';

{ useParams } from 'react-router-dom';

useState, useEffect

---

BACKEND

---

```cd server```

```npm run dev```

---

create folder 'server'

cd server

npm init -y

npm i express

add  "type": "module", into package.json for the server so you can use modern syntax like 'import...'

nodemon src/server.js

---

Access to XMLHttpRequest at 'http://localhost:8000/api/articles/learn-react' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

add into the front end package.json the following:

```"proxy": "http://localhost:8000/",```

