const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "please check your data, no name specified!"]
    },

    rating: {
        type: Number,
        min: 1,
        max: 10
    },

    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const Kiwi = new Fruit ({
    name: "Kiwi",
    score: 10,
    review: "Nunc aliquam aliquam morbi interdum nec hendrerit quisque quam felis."
});

const orange = new Fruit ({
    name: "Orange",
    score: 4,
    review: "Consectetur varius arcu sed eu elementum sit lorem ut eu."
});

const banana = new Fruit ({
    name: "Banana",
    score: 4,
    review: "Tortor massa quam lacus congue nec lorem condimentum mi tincidunt."
});


/*Fruit.insertMany([Kiwi, orange, banana], function(err) {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits in my_database")
    }
});*/

const humanSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Human = mongoose.model("Human", humanSchema);


Fruit.find(function (err, fruits) {
    if(err){
        console.log(err);
    } else {

        mongoose.connection.close();


        fruits.forEach(function (fruit) {
            console.log(fruit.name)
        });
    }
});