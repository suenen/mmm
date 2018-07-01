
$(function () { 


  Route.getcoupon(function (data) { 
    console.log(data);
    $('.coupon_main').html(template('tpl',data))
    
   })
 })