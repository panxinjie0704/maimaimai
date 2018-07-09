$(function () {
  Route.getcategorytitle(function (info) {
    console.log(info);
    var html = template('tpl', info);
    $('.mmm_accordion ul').html(html);
  });

  $('.mui-table-view').on('tap', 'a', function () {
    // console.log('haha');
    var id = $(this).data('id');
    // console.log(id);
    //  发送ajax请求
    Route.getcategory(id, function (info) {
      console.log(info);
      var html = template('tpl1',info);
      $('.mui-collapse-content ').html(html);

    })
  });
})