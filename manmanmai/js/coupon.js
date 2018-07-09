$(function(){
  Route.getcoupon(function(info){
  console.log(info);
  $('.coupon_wrap ul').html(template('tpl',info));

  })


})
