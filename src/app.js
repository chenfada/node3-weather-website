const express = require('express');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express();
const PublicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs')
app.use(express.static(PublicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Fada Chen',
  });
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Fada Chen',
  });
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: "This is some helpful text",
  });
});

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({error: 'You must provide the address'});
  }

  res.send({forecast: '55 degree', location: req.query.address});
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    res.send({error: 'You must provide a search term'})
  }
  console.log(req.query.search);
  res.send({products: []});
} )

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000.');
});
