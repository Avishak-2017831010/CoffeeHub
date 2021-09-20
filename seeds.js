var mongoose = require("mongoose");
var Coffeeshop = require("./models/coffeeshop");
var Comment = require("./models/comment");

var data = [
  {
    name: "Coffee Express",
    image: "https://assets3.thrillist.com/v1/image/2711845/size/tl-horizontal_main.jpg",
    description: "Quality what you deserve"
  },
  {
    name: "Sip Coffee",
    image: "https://assets3.thrillist.com/v1/image/1265482/size/tl-horizontal_main.jpg",
    description: "Exellence in taste"
  },
  {
    name: "Crimson Cup",
    image: "https://assets3.thrillist.com/v1/image/2711847/size/tl-horizontal_main.jpg",
    description: "Quality time with luxury"
  }
]

function seedDB(){
  // Remove all coffeeshops
  Coffeeshop.remove({}, function(err){
    if(err){
      console.log(err);
    }
    console.log("removed coffeeshops!");
    // Add a few coffeeshops
    data.forEach(function(seed){
      Coffeeshop.create(seed, function(err, coffeeshop){
        if(err){
          console.log(err);
        } else {
          console.log("added a coffeeshop");
          // Create a comment
          Comment.create(
            {
              text: "Great taste",
              author: "Tahseen"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                coffeeshop.comments.push(comment);
                coffeeshop.save();
                console.log("Created new comment");
              }
            });
        }
      });
    });
  });
}

module.exports = seedDB;
