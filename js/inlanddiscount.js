$(function () {
  Route.getinlanddiscount(function (data) {

    console.log(data);
    $('.inscount_main').append(template('tpl',data))

  })




})