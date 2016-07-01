
$(document).ready(function () {
  $('.addButton').click(function () {
    if($(this).hasClass('addButton-active')){
      $(this).removeClass('addButton-active');

    }else{
      $(this).addClass('addButton-active');
    }
  });

  $('.calendar').on('touchstart',function (e) {
    getIndex($(this).index());
    var touch = e.originalEvent.targetTouches[0];
    var x = touch.clientX;
    console.log('left'+$(this).offset().left);
    console.log(x);
    $(this).on('touchmove',function (e) {
      var touch = e.originalEvent.targetTouches[0];
      var tmp1 = 0;
      tmp1 = touch.clientX - x;
      console.log('tmp1='+tmp1);
      console.log('change '+tmp1+' '+$(this).index())
      if(tmp1>80){
        last($(this).index());
      }else if(tmp1<-80){
        next($(this).index());
      }else{
        keep($(this).index());
      }

    })
  })
  var x=0;
 if($('.calendar tr p').width()>$('.calendar tr td p').height()){
   x = $('.calendar tr p').height();
 }else{
   x = $('.calendar tr p').width();
 }
  $('.calendar tr p').css({
    'height':x/2+10+'px',
    'width':x+'px',
    'padding-top':x/2-10+'px'
  }
  );
  var T;
function getIndex(t){
  T=t;
}
  function keep(t) {
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  function last(t){
    t--;
    if(t<0){
      t=0;
    }
    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  function next(t){
    t++;
    if(t>5){
      t=5;
    }

    $('.calendar').css({
      'transform':'translate(-'+t*111.11111+'%,0)'
    });
  }
  $('.calendar tr .last p').click(function () {
    last(T);
  });
  $('.calendar tr .next p').click(function () {
    next(T);
  });


  $('.addThings').on('touchstart',function () {
    $(this).addClass('addThings-active');
    $('.inputBorder').addClass('inputBorder-active');
  });
  $('#yes').on('touchstart',function () {
    $('.addThings').removeClass('addThings-active');
    $('.inputBorder').removeClass('inputBorder-active');
  });
  $('#no').on('touchstart',function () {
    $('.addThings').removeClass('addThings-active');
    $('.inputBorder').removeClass('inputBorder-active');
  });


});
