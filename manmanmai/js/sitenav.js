$(function(){

  Route.getsitenav(function(info){
  console.log(info);
  $('.brand').html(template('tpl',info));
  
  })


})