import {courseReviews} from "courseReviews.js";

//this happens upon page load i think lol 
$(document).ready(function(){
    $('.sidenav').sidenav();
 
  });

  // this only needs to happen once lol
  for (let i = 0; i < courseReviews.length; i++){
      
    //if i feel really inspired i will try to get them paired up later
      for(let j = 0; j < courseReviews[i].reviews.length; j++){
        $("#total").append('<div class="row">\
        <div class="col m6">\
        <div class="card red accent-1">\
        <div class="card-content white-text">\
        <span class="card-title">'+ courseReviews[i].course + '</span>\
        <p>' + courseReviews[i].reviews[j] + '</p>\
        </div>\
        </div>\
        </div>\
        </div>\
');


      }
   

}