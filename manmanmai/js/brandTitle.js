$(function(){
  Route.getbrandtitle(function(info){
 console.log(info);
 $('.category-title').html(template('tpl',info));
 
  })

})