$(function(){

var id = Tools.query(location.href).couponId;
console.log(id);
Route.getcouponproduct(id,function(info){
console.log(info);

$('.show ul').html(template('tpl',info));

})






})