console.log('\'Allo \'Allo!');
$(document).ready(function () {
  $('.addButton').click(function () {
    if($(this).hasClass('addButton-active')){
      $(this).removeClass('addButton-active');
      $('.addReminder').removeClass('addReminder-open');
      $('.addReminder').addClass('addReminder-close');
    }else{
      $(this).addClass('addButton-active');
      $('.addReminder').removeClass('addReminder-close');
      $('.addReminder').addClass('addReminder-open');
    }
  });
  
  
  
  
});
