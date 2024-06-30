// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello, world!');
// });

// app.get('/about', (req, res) => {
//   res.send('About us page');
// });

// app.get('/users', (req, res) => {
//   res.json([
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' }
//   ]);
// });

// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   res.status(201).json(newUser);
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Example route to send HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/website/home/index.html');
    console.log(`Server got "/" request}`);

});

app.get('/script.js', (req, res) => {
  res.sendFile(__dirname + '/website/home/script.js');
  console.log(`Server got "/script.js" request}`);

});



app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/website/home/styles.css');
  console.log(`Server got "styles.css" request}`);

});

app.get('/image1.jpg', (req, res) => {
  res.sendFile(__dirname + '/assets/Photos/image1.jpg');
  console.log(`Server got "image1.jpg" request}`);

});


app.get('/myphoto.jpg', (req, res) => {
  res.sendFile(__dirname + '/assets/Photos/myphoto.png');
  console.log(`Server got "myphoto.jpg" request}`);

});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
