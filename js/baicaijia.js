$(function () {
    // 定义全部变量 存放li所有的宽度
    var lisWidth = 0;
    // 获取到页面下边内容所需要的id
    var id  = 0;
    // 白菜价的titile渲染
    Route.getbaicaijiatitle(function (data) {
        console.log(data);
        $('.nav-ul ul').html(template('tpl', data));
        // 动态计算li的宽度 因为每个li的宽度不一样.所以需要遍历
        $('.nav-ul li').each(function (i, e) {
            // 这里只能用this????
            lisWidth += $(this).outerWidth(true) //获取宽度不要加px
            // console.log(lisWidth);
            // 设置给ul
            $('.nav-ul ul').width(lisWidth) + 'px';
            // icroll插件使用
            new IScroll(".nav-ul", {
                scrollX: true,
                scrollY: false
            })
        });
        //    给li注册点击事件的时候 再渲染一次显示下边的内容
        $('.nav-ul .tit').on('click', function () {
            $(this).addClass('now').siblings().removeClass('now');
            id = $(this).data('id');
            // console.log(id);
            var that = $(this);
            Route.getbaicaijiaproduct(id, function (data) {
                console.log(data);
                // console.log(that);
                $('.bcj-kuang').html(template('tpl2', data))
            // })

        })
       
    })
    // 数据先渲染出来 再设置点击事件
    Route.getbaicaijiaproduct(id, function (data) {
        console.log(data);
        // console.log(that);
        $('.bcj-kuang').html(template('tpl2', data))
    })
    })
})


