$(function () {
  var productid = location.search ? Tools.query(location.href) : { dataId: 0 }
  console.log(productid);
  Route.getdiscountproduct( productid.productid,function (data) {
    console.log(data);
    $('.discount_main').html(template('tpl',data))

  })






})