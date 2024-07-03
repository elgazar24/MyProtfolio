// server.js

/************************************************************************/
/************************** START SERVER SETUP ***************************/

// Load required modules
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const moment = require('moment');
const app = express();
const port = 443; 




let user = 0;



const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');


// Set up body parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


const credentials = { key: privateKey, cert: certificate };

// Serve static files from the 'public' directory
app.use(express.static('public'));


/************************** END SERVER SETUP ***************************/




/************************************************************************/
/************************** START HTML ROUTES ***************************/ 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/index.html'));
    console.log(`Server got "/" request`);

    user += 1;
    console.log(`Server USERS ${user}`);
});


/************************** END HTML ROUTES   **************************/


/***********************************************************************/
/************************** START CSS ROUTES ***************************/ 

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/styles.css'));
    console.log(`Server got "/styles.css" request`);
});

app.get('nav/nav.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/nav/nav.css'));
    console.log(`Server got "/styles.css" request`);
})
app.get('footer/footer.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/footer/footer.css'));
    console.log(`Server got "/styles.css" request`);
})
app.get('header/header.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/header/header.css'));
    console.log(`Server got "/styles.css" request`);
})
app.get('about/about.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/about/about.css'));
    console.log(`Server got "/styles.css" request`);
})
app.get('projects/projects.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/projects/projects.css'));
    console.log(`Server got "/styles.css" request`);
})
app.get('contact/contact.css' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/contact/contact.css'));
    console.log(`Server got "/styles.css" request`);
})

/************************** END CSS ROUTES   ***************************/





/***********************************************************************/
/************************** START SCRIPT ROUTES ************************/ 

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/website/home/script.js'));
    console.log(`Server got "/script.js" request`);
});

app.get('nav/nav.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/nav/nav.js'));
    console.log(`Server got "/nav.js" request`);
})
app.get('footer/footer.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/footer/footer.js'));
    console.log(`Server got "/footer.js" request`);
})
app.get('header/header.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/header/header.js'));
    console.log(`Server got "/header.js" request`);
})
app.get('about/about.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/about/about.js'));
    console.log(`Server got "/about.js" request`);
})
app.get('projects/projects.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/projects/projects.js'));
    console.log(`Server got "/projects.js" request`);
})
app.get('contact/contact.js' , (req , res) => {
    res.sendFile(path.join(__dirname, '/website/home/contact/contact.js'));
    console.log(`Server got "/contact.js" request`);
})

/************************** END SCRIPT ROUTES   ************************/




/***********************************************************************/
/************************** START DOWNLOAD ROUTES **********************/ 



// Route to serve the CV file for Instructor
app.get('/MohamedElgazarCV_Instructor.pdf', (req, res) => {

    const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_Instructor.pdf');

    res.download(file, 'MohamedElgazarCV.pdf', (err) => {
        if (err) {
            console.error('Error downloading the file:', err);
        }
    });

    console.log(`Server got "/MohamedElgazarCV_Instructor.pdf" request`);
});


// Route to serve the CV file for Flutter
app.get('/MohamedElgazarCV_Flutter.pdf', (req, res) => {

  const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_Flutter.pdf');

  res.download(file, 'MohamedElgazarCV.pdf', (err) => {
      if (err) {
          console.error('Error downloading the file:', err);
      }
  });

  console.log(`Server got "/MohamedElgazarCV_Flutter.pdf" request`);
});


// Route to serve the CV file for Embedded Systems
app.get('/MohamedElgazarCV_EmbeddedSystems.pdf', (req, res) => {

  const file = path.join(__dirname, 'assets/cv/MohamedElgazarCV_EmbeddedSystems.pdf');

  res.download(file, 'MohamedElgazarCV_EmbeddedSystems.pdf', (err) => {
      if (err) {
          console.error('Error downloading the file:', err);
      }
  });

  console.log(`Server got "/MohamedElgazarCV.pdf_EmbeddedSystems" request`);
});



/************************** END DOWNLOAD ROUTES   **********************/



/***********************************************************************/
/************************** IMAGES REQUEST *****************************/

app.get('../../assets/Photos/image1.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/image1.jpg'));
    console.log(`Server got "/image1.jpg" request`);
});

app.get('../../assets/Photos/myphoto.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/myphoto.png'));
    console.log(`Server got "/myphoto.png" request`);
});

app.get('../../assets/Photos/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/Photos/logo.png'));
    console.log(`Server got "/logo.png" request`);
});

app.get('../../assets/Photos/header.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/assets/Photos/header.JPG'));
  console.log(`Server got "header.JPG" request`);
});


/************************** END IMAGES REQUEST ******************* *****/



/***********************************************************************/
/************************** POST REQUEST *******************************/ 



// Handle form submission
app.post('/submit-form', (req, res) => {

    console.log(`Server got "/submit-form" request`);
  
    const { name, email, message } = req.body;
  
    console.log(req.body);
    
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  
    console.log(`Server Recieved data: Name: ${name}, Email: ${email} ,Message: ${message}, Timestamp: ${timestamp}`);
  
    // Save data to a file
    const data = `Name: ${name}, Email: ${email}, Message: ${message}, Timestamp: ${timestamp}\n`;
    
    fs.appendFile('messeges.txt', data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Server error');
            return;
        }
    });
  
    console.log(`Server Saved data: Name: ${name}, Email: ${email} ,Message: ${message}, Timestamp: ${timestamp}`);
  
    res.send('Form data submitted successfully!');
  });

  
/************************** END POST REQUEST ***************************/





/*********************************************************************/
/************************** START HTTPS SERVER ***********************/


// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start HTTPS server
httpsServer.listen(port, () => {
    console.log(`HTTPS Server is running on https://localhost:${port}`);
    console.log(`Server USERS ${user}`);
});


/************************** END HTTPS SERVER   ***********************/


