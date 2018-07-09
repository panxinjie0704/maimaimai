$(function () {
  var id = Tools.query(location.href).categoryId;
  var category = Tools.query(location.href).category;
  category = decodeURI(category);
  console.log(category);
  var titleId = Tools.query(location.href).titleId;
  var pageid = Tools.query(location.href).pageId;
  // 获取面包屑的内容
  Route.getcategorybyid(id, function (info) {
    $('.breadcrumb').html(template('tpl', info));
    // console.log(info);
  });

  // 获取商品的列表
  Route.getproductlist(id, pageid, function (info) {
    console.log(info);
    var productName = info.result[0].productName;
    console.log(productName);
    var result = productName.split(' '); //把字符串按照字符串截取成数组
    console.log(productName.split(' '));
    var txt = result.shift(result[0]); //获取删除的那个字符串
    console.log(txt);
    // 
    info.logo = txt;
    info.category = category;
    console.log(info.category);
    // ------坑----------
    //先要把值添加进去，然后在渲染
    $('.content ul').html(template('tpl1', info));
    console.log(info);


    //分页功能
    var pageid = Tools.query(location.href).pageId;
    console.log(pageid);
    var totalpage = Math.ceil(info.totalCount / info.pagesize);
    console.log(totalpage);
    // 把这些变量存到info中
    info.pageid = pageid;
    info.totalpage = totalpage;
    info.currentPage = pageid;
    console.log(info);

    $('#selected').html(template('pagetpl', info)); //selected的渲染

    $('.pre').on('click', function (e) {
      if (pageid == 1) {
        e.preventDefault();
        return;
      }
      pageid--;//先判断，再把pageid--
      $(this).attr('href', 'productlist.html?categoryId=' +
        id + '&category=' + category + '&pageId=' + pageid);
      console.log($(this).attr('href'));
    });

    $('.next').on('click', function (e) {
      console.log(pageid);
      if (pageid == totalpage) {
        e.preventDefault();
        return;
      }
      pageid++;
      $(this).attr('href', 'productlist.html?categoryId=' +
        id + '&category=' + category + '&pageId=' + pageid);
      console.log($(this).attr('href'));
    })


    console.log($('#selected option'));

    $('#selected').on('change', function () {
      $("#selected option:selected").val();
      console.log($("#selected option:selected").val());

      location.href = 'productlist.html?categoryId=' + id + '&category=' + category + '&pageId=' + $("#selected option:selected").val();
    })
  });








})