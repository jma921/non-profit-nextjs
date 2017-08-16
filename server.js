// const express = require('express');
// const next = require('next');
// const axios = require('axios');
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.get('/starwars', (req, res) => {
//     axios
//       .get('https://swapi.co/api/people/3')
//       .then(response => {
//         console.log(response.data);
//         res.json(response);
//       })
//       .catch(err => res.json(err));
//     // return app.render(req, res, '/b', req.query);
//   });

//   server.get('/b', (req, res) => {
//     return app.render(req, res, '/a', req.query);
//   });

//   server.get('*', (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, err => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match');
const app = next({ dev });
const handle = app.getRequestHandler();
const { parse } = require('url');

const apiRoutes = require('./server/routes/apiRoutes.js');

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 }
    })
  );

  server.use('/api', apiRoutes);

  // Server-side
  const route = pathMatch();

  // server.get('/search', (req, res) => {
  //   return app.render(req, res, '/search', req.query);
  // });

  // server.get('/artist/:id', (req, res) => {
  //   const params = route('/artist/:id')(parse(req.url).pathname);
  //   return app.render(req, res, '/artist', params);
  // });

  server.get('/post/:id', (req, res) => {
    const params = route('/post/:id')(parse(req.url).pathname);
    return app.render(req, res, '/post', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  /* eslint-disable no-console */
  server.listen(3000, err => {
    if (err) throw err;
    console.log('Server ready on http://localhost:3000');
  });
});
