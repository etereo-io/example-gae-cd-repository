const express = require('express');
const app = express();
const path = require('path')

require('dotenv').config()


// In a React APP you can change 'static' by 'build'
app.use(express.static('static', { etag: false, lastModified: false, setHeaders: (res, path) => {
  // No cache for index html otherwhise there's gonna be problems loading the scripts
  if (path.indexOf('index.html') !== -1) {
    res.set('Cache-Control', 'no-store')
  }
} }));

app.set('etag', false)

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.set( 'X-Powered-By', 'My projecet v0.0.1' );
  res.set('Cache-Control', 'no-store')
  next()
})

app.get('/', (req,res) =>{
  res.set('Cache-Control', 'no-store')
  res.sendFile(path.join(__dirname+'/static/index.html'), { etag: false, lastModified: false });
});

app.get('*', (req,res) =>{
  res.set('Cache-Control', 'no-store')
  res.sendFile(path.join(__dirname+'/static/index.html'), { etag: false, lastModified: false });
});

const port = process.env.PORT || 8080

app.listen(port, () => console.log('App listening on ' + port));