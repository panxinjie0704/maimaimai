$(function () {
  var id = Tools.query(location.href).productId;
  console.log(id);
  Route.getmoneyctrlproduct(id, function (info) {
    console.log(info);
    
    // 商品的渲染

    $('.content').html(template('tpl',info));

    // 城市的渲染

    $('.area').html(info.result[0].productCity);

    // 评论区渲染
    $('.comment').html(info.result[0].productComment);
  });

  





})