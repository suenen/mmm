$(function () {
  var info = Tools.query(location.href)
  console.log(info);
  //从地址栏里拿到categoryid
  var categoryId = window.location.href.split("?")[1].split("=")[1];
  categoryId = categoryId.split("&")[0];
  console.log(categoryId);

  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    // console.log(reg);

    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
    // console.log(r);

  }

  // 获取从上一页得到的categoryId的值,并分割出来只要那个id的number类型的值
  var pageId = $.getUrlParam("pageId") || 1;//页码初始是1 这样直接能加载点击元素的第一页了
  // console.log(pageId);

  //  渲染面包屑
  Route.getcategorybyid(categoryId, function (data) {
    console.log(data);
    $('.bt_nav').append(template('tpl', data))
  })

  Route.getproductlist(info.categoryid, info.pageid, function (data) {
    console.log(data);
    $('.propro').append(template('tpl2', data));

    Tools.fenye({
      pageNum: Math.ceil(data.totalCount / data.pagesize),     // 总共几页，不传默认置为 1
      pageVal: 'pageid',     // 控制页面切换的参数,不传默认使用 pageid，根据 pageid 切页
      start: 1,       // 参数从几 开始传 默认为 1
      // pageUrl: href,  // 不赋值默认为当前页面  xxx.html?pageVal
      extraStr: "&categoryid="+ info.categoryid +"&category="+info.category
    });
  })

});