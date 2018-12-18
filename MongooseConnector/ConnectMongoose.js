var mongoose = require('mongoose');
var URL=require('./URLProvider');
mongoose.connect(URL.CONNCT_URL, { useNewUrlParser: true }, function (err) {
    if (err) throw err;

    console.log('Successfully connected');
});
/*
MongoDb Query
db.inventory.find( {
     status: "A",
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} ) is equivalent to
SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%") in SQL

*/