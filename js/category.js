$(function () {
  Route.getcategorytitle(function (data) {
    // console.log(data);
    $('.m_man ul').html(template('tpl', data));
    // 因为每一个li都存有一个id 所以需要遍历
    $('.m_man .tit').each(function (i, e) {
      // 获取到存在 li的所有id   函数内部访问不到 暴露出来
      var id = ($(this)).data('id');
      var that = $(this)
      Route.getcategory(id, function (data) {
        console.log(data);
        that.append(template('tpl2', data))
        // 点击事件 在css先设置好显示与隐藏的类
        that.on('click', function () {
          $(that).children('ul').slideToggle('small');
        })
      })
    })

  })

})

