const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

// /mid만 "Middleware" 프린트함
const printMiddleware = ( req, res, next ) => {

  // path의 첫번째 경로를 가져옴
  // const middleware = req.path.split("/")[1];

  // if( middleware === "mid" ) {
    console.log("Middleware");
  //   next();
  // }
  // else {
      next();
  // }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/mid', printMiddleware);

app.use('/', router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

