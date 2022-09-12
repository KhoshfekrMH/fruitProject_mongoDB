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
    rating: 10,
    review: "Nunc aliquam aliquam morbi interdum nec hendrerit quisque quam felis."
});

const orange = new Fruit ({
    name: "Orange",
    rating: 4,
    review: "Consectetur varius arcu sed eu elementum sit lorem ut eu."
});

const banana = new Fruit ({
    name: "Banana",
    rating: 4,
    review: "Tortor massa quam lacus congue nec lorem condimentum mi tincidunt."
});

/*Fruit.insertMany([Kiwi, orange, banana], function(err) {
    if(err){
        console.log(err);
    } else {
        console.log("Successfully saved all the fruits in my_database")
    }
});*/

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

/*Fruit.deleteMany({rating: undefined} , function(err){
   if(err){
       console.log(err);
   } else {
       console.log("Successfully deleted");
   }
});*/

/*Fruit.updateOne({_id: "631e01bb4c5d5191d3a45d70"}, {review: "Fusce amet commodo massa consectetur erat sollicitudin port."}, function (err) {
   if(err) {
       console.log(err);
   } else {
       console.log("Successfully updated");
   }
});*/

const humanSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const Human = mongoose.model("Human", humanSchema);

const human2 = new Human({
    name: "Amy",
    age: 23,
    favoriteFruit: Kiwi
});

/*
human2.save();*/

Human.updateOne({_id: "631e03399193e01de0915bb6"}, {favoriteFruit: orange}, function (err) {
   if(err) {
       console.log(err);
   } else {
       console.log("successfully updated");
   }
});