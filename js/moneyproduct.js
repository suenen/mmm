$(function () {
  // 拿到地址栏的参数
  var productid = Tools.query(location.href);
  console.log(productid);
  // productid是一个对象 传参数的时候注意
  Route.getmoneyctrlproduct(productid.productid, function (data) {
    console.log(data);
    $('.mpro_main').append(template('tpl', data));



  })




})