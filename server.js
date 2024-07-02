const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 443; // Default port for HTTPS

let user = 0;

// Read SSL certificate and key files
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');

const credentials = { key: privateKey, cert: certificate };

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Example route to send HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/index.html'));
    console.log(`Server got "/" request`);

    user += 1;
    console.log(`Server USERS ${user}`);
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/script.js'));
    console.log(`Server got "/script.js" request`);
});

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/styles.css'));
    console.log(`Server got "/styles.css" request`);
});

app.get('/image1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/image1.jpg'));
    console.log(`Server got "/image1.jpg" request`);
});

app.get('/myphoto.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/myphoto.png'));
    console.log(`Server got "/myphoto.png" request`);
});

app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/logo.png'));
    console.log(`Server got "/logo.png" request`);
});

// Route to serve the CV file
app.get('/MohamedElgazarCV_Instructor.pdf', (req, res) => {

    const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_Instructor.pdf');

    res.download(file, 'MohamedElgazarCV.pdf', (err) => {
        if (err) {
            console.error('Error downloading the file:', err);
        }
    });

    console.log(`Server got "/MohamedElgazarCV_Instructor.pdf" request`);
});


// Route to serve the CV file
app.get('/MohamedElgazarCV_Flutter.pdf', (req, res) => {

  const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_Flutter.pdf');

  res.download(file, 'MohamedElgazarCV.pdf', (err) => {
      if (err) {
          console.error('Error downloading the file:', err);
      }
  });

  console.log(`Server got "/MohamedElgazarCV_Flutter.pdf" request`);
});


// Route to serve the CV file
app.get('/MohamedElgazarCV_EmbeddedSystems.pdf', (req, res) => {

  const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_EmbeddedSystems.pdf');

  res.download(file, 'MohamedElgazarCV_EmbeddedSystems.pdf', (err) => {
      if (err) {
          console.error('Error downloading the file:', err);
      }
  });

  console.log(`Server got "/MohamedElgazarCV.pdf_EmbeddedSystems" request`);
});

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start HTTPS server
httpsServer.listen(port, () => {
    console.log(`HTTPS Server is running on https://localhost:${port}`);
    console.log(`Server USERS ${user}`);
});

app.get('/abdogalal', (req, res) => {
  res.sendFile(path.join(__dirname, '/abdogalal/index.html'));
  console.log(`Server got "/" request`);

  user += 1;
  console.log(`Server USERS ${user}`);
});