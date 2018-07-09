$(function(){

  Route.getinlanddiscount (function(info){
    console.log(info);
    $('.content ul').html(template('tpl',info));
    
  })


})