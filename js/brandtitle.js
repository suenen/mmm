$(function () {  

  Route.getbrandtitle(function (data) { 
    console.log(data);
    $('.row1').html(template('tpl',data));
    
   })


})

