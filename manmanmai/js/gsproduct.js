$(function(){
var  shopid=0;
var  areaid=0;
  // 获取店铺的名
  Route.getgsshop(function(info){
  //  console.log(info);
   $('.popsort').html(template('tpl',info));
   shopid= info.result[0].shopId;
   
  });


  // 获取地区名
  Route.getgsshoparea(function(info){
    // console.log(info);
     $('.popcat').html(template('tpl2',info));
     areaid=info.result[0].areaId;


    });

    // 这边是先渲染一下
    // 获取下拉列表的内容
    Route.getgsproduct(shopid,areaid,function(info){
      // console.log(info);
      $('.list ul').html(template('tpl3',info));
      });
  

  // 点击事件
  $('.shop').on('click',function(){
  $('.popsort').toggleClass('now');
  $('.popcat').removeClass('now');
  $('.popprice').removeClass('now');

  
  
  $('.popsort a').off().on('click',function(){

 $(this).find('.icon').addClass('now');
 $(this).parent().siblings().find('.icon').removeClass('now');
 
    shopid= $(this).data('shopid');
    console.log( $(this).data('shopid'));
    $('.popsort').removeClass('now');

    var text= $(this).text();
    console.log(text);
    $('.shop a').text(text);


    // 点击里面的li ,让里面的内容再次渲染
    Route.getgsproduct(shopid,areaid,function(info){
      // console.log(info);
      $('.list ul').html(template('tpl3',info));

 
    });
  })
  });


  $('.area').off().on('click',function(){
  $('.popcat').toggleClass('now');
  $('.popsort').removeClass('now');
  $('.popprice').removeClass('now');
  
  $('.popcat a').on('click',function(){
    var areaid=$(this).data('areaid');
    // console.log($(this).data('areaid'));
    $('.popcat').removeClass('now');

    var text= $(this).text();
    console.log(text);
    // $('.shop a').text(text);
   console.log(text);
   var result=text.split('（');//这边注意是中文的（
    console.log(result);
    var txt =result[0];
    console.log(txt);
    
    $('.area a').text(txt);
    

   
   

   
    Route.getgsproduct(shopid,areaid,function(info){
      // console.log(info);
      $('.list ul').html(template('tpl3',info));

      });

    
    
  })
  });
     
  $('.price').on('click',function(){
    $('.popprice').toggleClass('now');
    $('.popsort').removeClass('now'); 
    $('.popcat').removeClass('now');  
  });


 

  
  

  






})