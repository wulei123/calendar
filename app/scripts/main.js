console.log('\'Allo \'Allo!');
$(document).ready(function () {
  $('.addButton').click(function () {
    if($(this).hasClass('addButton-active')){
      $(this).removeClass('addButton-active');

    }else{
      $(this).addClass('addButton-active');
    }
  });

  $('.calendar').on('touchstart',function (e) {
    var touch = e.originalEvent.targetTouches[0];
    var x = touch.clientX - $(this).offset().left;
    console.log('left'+$(this).offset().left);
    console.log(x);
    $(this).on('touchmove',function (e) {
      var touch = e.originalEvent.targetTouches[0];
      var tmp1 = touch.clientX - x;
      console.log('change '+tmp1+' '+$(this).index())
      $(this).on('touchend',function (e) {
        if(tmp1>100){
          last($(this).index());
        }else if(tmp1<-100){
          next($(this).index());
        }
      });

    })
  })
  function last(t){
    t--;
    if(t<0)
      t=0;
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  function next(t){
    t++;
    if(t>2)
      t=2;
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }

  /*

   document.getElementById("calendar").addEventListener('touchstart',function (e) {
   var x=e.touches[0].pageX;
   //console.log(e.touches[0].clientX);
   document.addEventListener('touchmove',function (e) {
   //console.log(e.touches[0].clientX);
   var tmp1 = e.touches[0].pageX-x;
   if(tmp1>100){
   $('.calendar').css({
   'transform':'translate('+1000/9+'%,0)'
   });
   }else if(tmp1<-100){
   $('.calendar').css({
   'transform':'translate(-'+1000/9+'%,0)'
   });
   }else{
   $('.calendar').css({
   'transform':'translate(0,0)',
   });
   }

   })
   },false);



   */





});
