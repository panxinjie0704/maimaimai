$(function(){

var logo = Tools.query(location.href).logo;
logo = decodeURI(logo);//转码
console.log(logo);

var productid = Tools.query(location.href).productId;
console.log(productid);

var category = Tools.query(location.href).category;
category = decodeURI(category);//转码
console.log(category);


Route.getproduct(productid,function(info){
console.log(info);
$('.nav').html(template('tpl',info));

$('.top').html(info.result[0].bjShop);

});

Route.getproductcom(productid,function(info){
console.log(info);
$('.content').html(template('tpl1',info));
});


//设置面包屑的值

$('.breadcrumb .one').text(category+'>');

$('.breadcrumb .two').text(logo);





})