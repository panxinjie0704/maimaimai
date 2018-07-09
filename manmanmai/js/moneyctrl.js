$(function () {

  // 获取省钱控的商品列表
  Route.getmoneyctrl(function (info) {
    console.log(info);
  $('.content').html(template('tpl',info));
  });

 







})