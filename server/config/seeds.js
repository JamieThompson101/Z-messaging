const db = require('./connection');
const { User, Product, Category } = require('../models');
//const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  //const categories = await Category.insertMany([
   // { name:  },
   // { name:  },
    //{ name:  },
    //{ name:  },
   // { name:  }
  //]);
  //add the category names that we want to seed for the messaging app like utilizing for the messaging app
  console.log('categories seeded');

  // const products = await Product.insertMany([
   // {
      //name: 
      //description:
       // image: 
      //category: categories[0]._id,
     // price: 2.99,
     // quantity: 500
    //},
    //{
     // name: 
      //description:
    //{
     // name:
     // category: categories[1]._id
    //},
    //{
     // name: 'Handmade Soap',
     // category: categories[1]._id,
     // description:
   // },
   // {
      //name: '
     // category: categories[1]._id,
    //},
   // {
     // category: categories[2]._id,
   // },
   // {
    //  name: 
    //  category: categories[2]._id,
    //},
    //{
      //name: 
     // category: categories[3]._id,
    //},
    //{
      //name: 'Spinning Top',
      //category: categories[4]._id,
    //},
   // {
     // name: 'Set of Plastic Horses',
     // category: categories[4]._id,
    // },
    //{
    //  name: 'Teddy Bear',
      //category: categories[4]._id,
   // },
   // {
     // name: 'Alphabet Blocks',
    //  category: categories[4]._id,
   // }
 // ]);

  //console.log('products seeded');

 // await User.create({
   // firstName: 'Pamela',
   // lastName: 'Washington',
   // email: 'pamela@testmail.com',
   // password: 'password12345',
   // orders: [
   //   {
    //    products: [products[0]._id, products[0]._id, products[1]._id]
    //  }
  //  ]
 // });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
