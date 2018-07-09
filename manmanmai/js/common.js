
 //分装一个函数，可以获取到地址栏中的key 的值
 function getSearch() {
  //1、先获取到地址栏中信息
  var search = location.search;
  // console.log(search);
  //2、把获取到的信息解码
  search = decodeURI(search);
  //3、把？去掉
  search = search.slice(1);
  // console.log(search);
  //4、变成一个对象，以后可以无论获取什么样的值
  var arr = search.split('&'); //变成一个数组 ["key=111"]
  // console.log(arr);
  var obj = {};
  arr.forEach(function (e, i) {
    // console.log(e); // key=111
    // console.log(e.split('='));["key", "111"]
    var k = e.split('=')[0];
    var v = e.split('=')[1];
    obj[k] = v;
    // console.log(obj);

  })
  return obj;

}