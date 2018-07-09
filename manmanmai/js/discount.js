$(function(){
  var id = Tools.query(location.href).productId;
  console.log(id);
  Route.getdiscountproduct(id,function(info){
    console.log(info);
    $('.content').html(template('tpl',info));

    $('.comment').html(info.result[0].productComment);
  })

 



})