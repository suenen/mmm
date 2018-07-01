
$(function () {
  //获取地址栏参数
  var pro = Tools.query(window.location.href).productid;
  console.log(pro);

  Route.getproduct(pro, function (data) {
    // 这里边获取到productName 用切割的方法
    var pro = data.result[0].productName
    pro = pro.split(' ');
    pro =pro[0];
    console.log(data);
     console.log(pro);

     
    $('.bt_nav').append(template('tpl', data));
    $('.bijia').append(template('tpl2', data));
    
  });

  Route.getproductcom(pro, function (data) {
    // console.log(data);
    $('.bj_pinglun').append(template('tpl3', data));

  })

})


