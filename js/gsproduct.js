$(function () {
  // 定义两个全局变量
  var shopId = 0;
  var areaId = 0;

  // 第一个下拉栏

  Route.getgsshop(function (data) {
    console.log(data);
    // 把京东下拉菜单显示出来
    $('.chuxian').html(template('tpl', data));
    // 点击名称 让下边列表显示与隐藏
    $('.mingcheng').on('click', function () {
      // console.log(111);
      $(this).find('.chuxian').toggleClass('hidden');
      // 获取文本

      // console.log(txt);
      // 给下边每个li注册事件
      $('.chuxian').off().on('click', 'li', function () {
        var txt = $(this).text();
        $('.baoguom').text(txt)
        var id = $(this).data('id');
        console.log(id);
        Route.getgsproduct(id, areaId, function (data) {
          // console.log(data);
          $('.qingfudong').html(template('tpl3', data))

        })

      })

    })

  })




  // 第二个下拉栏
  Route.getgsshoparea(function (data) {
    console.log(data);
    $('.chuxian1').html(template('tpl2', data));
    $('.quyu').on('click', function () {
      $(this).children('ul').toggleClass('hidden');
      $('.chuxian1').off().on('click', 'li', function () {
        var txt = $(this).text();
        var txt1 = txt.split('');
        txt1 = txt1[0] + txt1[1]
        console.log(txt1); 
        $('.baoguom1').text(txt1);
        var id = $(this).data('id');
        console.log(id);
        Route.getgsproduct(id, areaId, function (data) {
          // console.log(data);
          $('.qingfudong').html(template('tpl3', data))

        })

      })


    })
  })

  Route.getgsproduct(shopId, areaId, function (data) {
    // console.log(data);
    $('.qingfudong').html(template('tpl3', data))

  })



})