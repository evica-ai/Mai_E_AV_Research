var express = require('express');
var app = express();

// NODE/EXPRESS applicatin basic express server// add socket here
const io = require('socket.io')(server);

const port = process.env.PORT || 3030;

// tell express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/assets/index.html');
});



const server = app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});




// Route for the video page
app.get('/video', (req, res) => {
    res.render('video', { videoUrl: '/assets/videos/skateboard.mp4' });
  });
  
  // Route for the audio page
  app.get('/audio', (req, res) => {
    res.render('audio', { audioUrl: '/assets/audio/hurt.mp3' });
  });
  