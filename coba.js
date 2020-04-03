$(document).ready(function(){
    $('.submenu').hide();
 $( '.projects a' ).click(function () {
      $( '.projects .submenu' ).slideToggle('fast');
     $('.services .submenu').toggleClass('showmenu');

});
    
     $( '.services a' ).click(function () {
      $( '.services .submenu' ).slideToggle('fast');
     $('.projects .submenu').toggleClass('showmenu');
     

});
    
    $('.submenu a').prepend('<span class="arrow">&#10140;</span>');
    
});
