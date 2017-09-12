var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');

const views = `${__dirname}/client/views`
const styles = `${__dirname}/client/styles`
const nodeModules = `${__dirname}/node_modules`
const js = `${__dirname}/client/js`


mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

// views Files
app.get('/', (req, res) => { res.sendFile(`${views}/index.html`) });
app.get('/index.html', (req, res) => { res.sendFile(`${views}/index.html`) });
app.get('/about.html', (req, res) => { res.sendFile(`${views}/about.html`) });
app.get('/account.html', (req, res) => { res.sendFile(`${views}/account.html`) });
app.get('/blog.html', (req, res) => { res.sendFile(`${views}/blog.html`) });
app.get('/checkout.html', (req, res) => { res.sendFile(`${views}/checkout.html`) });
app.get('/contacts.html', (req, res) => { res.sendFile(`${views}/contacts.html`) });
app.get('/elements.html', (req, res) => { res.sendFile(`${views}/elements.html`) });
app.get('/faq.html', (req, res) => { res.sendFile(`${views}/faq.html`) });
app.get('/gallery-no-gap.html', (req, res) => { res.sendFile(`${views}/gallery-no-gap.html`) });
app.get('/gallery-with-gap.html', (req, res) => { res.sendFile(`${views}/gallery-with-gap.html`) });
app.get('/home-v2.html', (req, res) => { res.sendFile(`${views}/home-v2.html`) });
app.get('/home-v3.html', (req, res) => { res.sendFile(`${views}/home-v3.html`) });
app.get('/login.html', (req, res) => { res.sendFile(`${views}/login.html`) });
app.get('/shop-filters-top.html', (req, res) => { res.sendFile(`${views}/shop-filters-top.html`) });
app.get('/shop-sidebar-left.html', (req, res) => { res.sendFile(`${views}/shop-sidebar-left.html`) });
app.get('/shop-sidebar-right.html', (req, res) => { res.sendFile(`${views}/shop-sidebar-right.html`) });
app.get('/shop-single.html', (req, res) => { res.sendFile(`${views}/shop-single.html`) });
app.get('/shopping-cart.html', (req, res) => { res.sendFile(`${views}/shopping-cart.html`) });
app.use('/js',express.static(`${js}`));
app.use('/img',express.static(`${styles}/img`));
app.use('/css',express.static(`${styles}/css`));
app.use('/fonts',express.static(`${styles}/fonts`));
app.use('/node_modules',express.static(nodeModules));
//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
  console.log('I\'m Listening...');
})