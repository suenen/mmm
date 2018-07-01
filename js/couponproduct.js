$(function () {

  var id = location.search ? Tools.query(location.href) : { dataId: 0 }
  console.log(id);
  Route. getcouponproduct(id.couponid,function (data) { 
    console.log(data);
    $('.coupro_main').html(template('tpl',data))
    
   })






})