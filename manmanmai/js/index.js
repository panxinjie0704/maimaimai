$(function () {
  //获取首页上面的菜单栏数据
  Route.getindexmenu(function (info) {
    console.log(info);

    var html = template('tpl', info);
    $('.mmm_nav ul').html(html);

  });

  // 获取折扣列表内容

  Route.getmoneyctrl(function (info) {
    console.log(info);

    var html = template('tpl1',info);
    $('.content ul').html(html);

  });


  // //点击更多事件
  console.log($('[data-id=7]'));
  
  $('.mmm_nav ul').on('click','[data-id=7]',function(){
  $('.mmm_nav li:nth-child(8)~li').toggleClass('now');

    
  })
  


})