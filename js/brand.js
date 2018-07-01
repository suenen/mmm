$(function () {
  var id = Tools.query(location.href).brandTitleId;
  // console.log(id);
  // 拿到数据
  Route.getbrand(id, function (data) {
    // console.log(data);
    $('.bn1').html(template('tpl', data))
    $('.bn_left').each(function (i,e) {
      console.log( $(this));
      $('.bn_left:first').css('backgroundColor','blue')
    
     })


  })
  var pagesize = 4;
  Route.getbrandproductlist(id, pagesize, function (data) {
    console.log(data);
    $('.product').html(template('tpl2', data))
  
  })
  
  var productid = 1;
  Route.getproductcom(productid, function (data) {
    console.log(data);
    $('.product1').html(template('tpl3',data))

  })

  // Route.getbrandproductlist(brandtitleid, pagesize, function (info) {
  //   console.log(info);

  //   $('.chanpin ul').html( template('tpl2', info) );

  //   var arr = info.result;
  //   for (var i = 0; i < arr.length; i++) {
  //     var productId = arr[i].productId;

  //     Route.getproductcom(productId, function (info) {
  //       console.log(info);

  //       $('.wangyou ul').html( template('tpl3', info) );
  //     });
  //   }
  // });


})