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

## Serve static front end from server

cd client

npm run build

update server.js

```
import path from 'path';  // we need these 4 imports to recreate manually __dirname since it does not work after we specified "type": "module" in package.json
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../../client/build')));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});
```

```cd server```

```npm run dev```

http://localhost:8000/