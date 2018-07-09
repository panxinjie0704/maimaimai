$(function () {
  

//  获取tab栏中的标题
Route.getbaicaijiatitle(function(info){
console.log(info);
$('.main').html(template('tpl',info));
  // 获取ul的宽度
  var lis = $('.main li');
  // console.log(lis);
  
  //动态生成ul的长度
  var ulWidth = 0;
  for (var i =0;i<lis.length;i++){
    // console.log($(lis[i]));
    ulWidth=ulWidth+$(lis[i]).outerWidth(true);
    // console.log(ulWidth);
  }
    console.log(ulWidth);  
   $('.main').width(ulWidth);
   console.log( $('.main').width());

   //使用iscroll的步骤：
  //1. 要满足条件：  父盒子里面要有一个子盒子，子盒子大大小超过父盒子

  var result=new IScroll(".coupon-title", {
    scrollY: false,
    scrollX: true
  });
  new IScroll(".main");

var id = $('.main li a').data('id');
console.log(id);
render();
function render(){
  Route.getbaicaijiaproduct(id,function(info){
  console.log(info);
  $('.coupon-list ul').html(template('tpl2',info));

var li = $('.main li a');
//排他思想
for (var i = 0; i<li.length;i++){
$(li[i]).off().on('click',function(){
  //  console.log('haha');
   for (var i = 0 ; i< li.length;i++){
     $(li[i]).removeClass('now');
    //  console.log($(li[i]));
     $(this).addClass('now');
   }
   id= $(this).data('id');
 console.log(id);

  result.scrollToElement(this,1000,false);
 
 
   render();

  //  $('em').width({{info.}})
 });
};

  });
}





});






});