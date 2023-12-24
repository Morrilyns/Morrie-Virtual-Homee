// index.js

// Import required modules
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send("Morrie Virtual Home is a web-based platform that offers visitors a 360-degree view of a meticulously designed 3D model home. Explore the virtual space to get a feel for the layout, design, and ambiance of the Morrie Home.");

});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
