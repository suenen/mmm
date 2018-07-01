$(function () {
  // 判断url是否存在,不存在就默认0 存在就直接获取就好
  var info = location.search ? Tools.query(location.href) : { dataId: 0 }
  // 如果传0的话默认渲染第一页
  // var dataId = 0;
  Route.getmoneyctrl(info.dataId, function (data) {
    $(".product ul").html(template("tdl", data))
    console.log(data);
    Tools.fenye({
      pageNum: Math.ceil(data.totalCount / data.pagesize),     // 总共几页，不传默认置为 1
      pageVal: 'dataId',     // 控制页面切换的参数,不传默认使用 pageid，根据 pageid 切页
      start: 1,       // 参数从几 开始传 默认为 1
      // pageUrl: href,  // 不赋值默认为当前页面  xxx.html?pageVal
      extraStr: ''
    });


  })

})
