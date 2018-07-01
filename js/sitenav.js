$(function () {

  Route.getsitenav(function (data) {
    console.log(data);
    $('.sit_pro').html(template('tpl', data))

  })


})