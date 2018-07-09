$(function () {
  var id = Tools.query(location.href).brandTitleId;
  console.log(id);
  //1
  Route.getbrand(id, function (info) {
    console.log(info);
    $('.desc').html(template('tpl', info));
  });
  
//2
  var pagesize = 4;
  Route.getbrandproductlist(id, pagesize, function (info) {
    console.log(info);
    $('.list ul').html(template('tpl2',info));

    var img = info.result[0]?info.result[0].productImg:"";
    console.log(img);

  
    

   var productName =info.result[0]?info.result[0].productName:''; 
    

    //3
    var brandId = info.result[0]?info.result[0].brandId:'';
    console.log(brandId);
    

    Route.getproductcom (brandId,function(info){
      console.log(info);
       info.img=img;
       console.log(img);
       info.productName =productName;
       
      $('.commit ul').html(template('tpl3',info));
      
    });

   
    

  });




})