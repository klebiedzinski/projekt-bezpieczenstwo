const Keycloak = require('keycloak-connect');
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({store: memoryStore});

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(
    session({
      secret: 'mySecret',
      resave: false,
      saveUninitialized: true,
      store: memoryStore,
    })
  );    

  app.set('trust proxy', true);

app.use(keycloak.middleware());

app.get('/api', keycloak.protect(), (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {console.log('dziala');});
