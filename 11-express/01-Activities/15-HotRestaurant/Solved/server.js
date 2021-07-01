// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


// function jumpingOnClouds(clouds, paths) {
//   if(clouds.length > 1) {
//     let path1 = paths.slice();
//     let path2 = paths.slice();

//     path1 = (clouds[1] !== 1) ? [...path1, 1] : 0;
//     path1 = (clouds[2] !== 1) ? [...path2, 2] : 0;

//     if(path1 === 0 && path2 === 0){
//       paths = 0;
//     } else if (path1 !== 0 && path2 === 0) {
//       return findPaths()
//     }
//   }
// }
