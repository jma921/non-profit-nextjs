const express = require('express');
const router = express.Router();

// const request = require('superagent');
const axios = require('axios');
// const Prismic = require('prismic-nodejs');
// const async = require('async');

// Initialize the prismic.io api
// function initApi(req) {
//   return Prismic.getApi('https://test-non-profit.prismic.io/api', {
//     req: req
//   });
// }

var contentful = require('contentful');
var util = require('util');
var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'w9a9qgmvdqmn',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken:
    '0eac9e06ccc1ee5b3d2f2c50a10c7379330603bc07723c4d3ccade96b86fa217'
});

// router.get('/search', (req, res) => {
//   request
//     .get('https://api.spotify.com/v1/search')
//     .set('Content-Type', 'application/json')
//     .query({
//       type: 'artist',
//       q: req.query.query,
//       limit: req.query.limit,
//       offset: req.query.offset
//     })
//     .end((err, response) => {
//       if (err) {
//         return res.status(500).json(err);
//       }
//       res.status(200).json(response.body);
//     });
// });

// router.get('/artist/:id', (req, res) => {
//   async.auto(
//     {
//       artist: function(callback) {
//         request
//           .get('https://api.spotify.com/v1/artists/' + req.params.id)
//           .end((err, response) => callback(err, response.body));
//       },
//       albums: [
//         'artist',
//         (results, callback) => {
//           request
//             .get(
//               'https://api.spotify.com/v1/artists/' + req.params.id + '/albums'
//             )
//             .query({
//               album_type: 'album',
//               limit: req.query.limit,
//               offset: req.query.offset
//             })
//             .end((err, response) => {
//               callback(err, {
//                 items: response.body.items,
//                 limit: response.body.limit,
//                 offset: response.body.offset,
//                 total: response.body.total
//               });
//             });
//         }
//       ]
//     },
//     (err, results) => {
//       if (err) {
//         return res.status(500).json(err);
//       }
//       res.status(200).json(results);
//     }
//   );
// });

// router.get('/album/:id', (req, res) => {
//   request
//     .get('https://api.spotify.com/v1/albums/' + req.params.id)
//     .end((err, response) => {
//       if (err) {
//         return res.status(500).json(err);
//       }
//       res.status(200).json(response.body);
//     });
// });

router.get('/starwars', (req, res) => {
  axios
    .get('https://swapi.co/api/people/3')
    .then(response => {
      //   console.log(response.data);
      res.json(response.data);
    })
    .catch(err => res.json(err));
  // return app.render(req, res, '/b', req.query);
});

// router.get('/posts', (req, res) => {
//   axios
//     .get('https://test-non-profit.prismic.io/api')
//     .then(response => {
//       console.log(response);
//       res.json(response.data);
//     })
//     .catch(err => res.json(err));
//   // return app.render(req, res, '/b', req.query);
// });

// router.get('/posts', (req, res) => {
//   // initApi(req).then(api => {
//   //   api.query('').then(posts => {
//   //     res.json(posts);
//   //   });
//   // });

//   client
//     .getEntries()
//     .then(response => {
//       // res.json(response.items);
//       // console.log(response.items);
//       const j = JSON.parse(response.stringifySafe());
//       res.json(j.items);
//     })
//     .catch(err => console.log(err));
// });

router.get('/posts', (req, res) => {
  // initApi(req).then(api => {
  //   api.query('').then(posts => {
  //     res.json(posts);
  //   });
  // });

  client
    .getEntries({
      content_type: '2wKn6yEnZewu2SCCkus4as'
    })
    .then(response => {
      // res.json(response.items);
      // console.log(response.items);
      // const j = JSON.parse(response.stringifySafe());
      res.json(JSON.parse(response.stringifySafe()));
    })
    .catch(err => console.log(err));
});

router.get('/post/:id', (req, res) => {
  console.log(req.params);
  client
    .getEntry(req.params.id)
    .then(entry => res.json(entry))
    .catch(console.error);
});

module.exports = router;
