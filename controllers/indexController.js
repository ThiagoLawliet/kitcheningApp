const products = require('../data/products.json')

module.exports = {
    home : (req, res) => {
        /* toda la lógica!!! */
        return res.render('home',{
          title: 'Kitchening | Home',
          products
        });
      }
}