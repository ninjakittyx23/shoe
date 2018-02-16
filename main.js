$(document).ready(() => {
  
  $('.shoe-details').show();
  
  $('.more-details-button').on('click', event => {
    $('event.currentTarget').closest('.product-details')
  });  
  
  $('.shoe-details li').on('click', event => {
    $(event.currentTarget).addClass('active');
  	$(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
    $('.shoe-details').children().removeClass('disabled')   
        $(event.currentTarget).siblings().removeClass('active')
  });
  
  
  
  ///////////////////////////////////////////
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
    $('.login-button').toggleClass('button-active');
  });

  $('.product-photo').on('mouseenter', () => {
    $(this).addClass('photo-active');
  }).on('mouseleave', function() {
    $(this).removeClass('photo-active');
  });

  $('.menu-button').on('click', () => {
    $('.menu-button').toggleClass('button-active');
    $('.nav-menu').toggleClass('hide');
  });
})