const home = require('../routes/home');
const products = require('../routes/products');

module.exports = function(app) {
    app.use('/', home);
    app.use('/api/products', products);
};

