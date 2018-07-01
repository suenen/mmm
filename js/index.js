$(function () {
  // template.config("escape", false);

  // 渲染navs
  Route.getindexmenu(function (data) {
    console.log(data);

    $(".navs ul").html(template("tpl", data));
    // $(".navs ul li").each(function (i) {
    //   if (i > 7) {
    //     $(this).addClass("hide");
    //   }
    // })
    // $(".navs .moreMessage").on("click", function () {
    //   $(".navs ul li").css("display", "block");
    // })
    // 切换类
    $('.navs li').each(function (i) {
      if ($(this).find('p').text() === '更多') {
        $(this).on('click', function () {
          $('.navs').toggleClass('now');
        })
      }
    })
  })

  // 渲染列表
  Route.getmoneyctrl(function (res) {
    $(".product ul").html(template("tdl", res))
  })
  var dataId = 0;
  Route.getmoneyctrl(dataId, function (data) {
    // console.log(data);




  })
})
