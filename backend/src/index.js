const Keycloak = require('keycloak-connect');
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({store: memoryStore});

const app = express();

app.use(cors({
    origin: 'http://localhost'
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

const items = [
  {
    id: 1,
    price: 100,
    name: 'Product 1',
    quantity: 10,
  },
  {
    id: 2,
    price: 200,
    name: 'Product 2',
    quantity: 20,
  },
  {
    id: 3,
    price: 300,
    name: 'Product 3',
    quantity: 30,
  }
]

app.get('/api/products', keycloak.protect(['realm:app-user','realm:app-admin']), (req, res) => {
    res.status(200).json(items);
});

app.post('/api/products', keycloak.protect('realm:app-admin'), (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json(item);
});

app.delete('/api/products/:id', keycloak.protect(['realm:app-admin']), (req, res) => {
    const id = parseInt(req.params.id);
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
    res.status(200).json(items);
});

app.listen(3001, () => {console.log('dziala');});