jQuery(function(){
    $('.text').val('');
      
    $('#userEmail').blur(function checkMail(){
        $('#userEmail').removeClass();
        var emailV = $('#userEmail').val();
        var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/;
        
        if (filter.test(emailV)) {
            $('#userEmail').addClass('valid');
            $(this).next().text('');
        } else {
            $('#userEmail').addClass('notValid');
            $(this).next().text('Please write your email correctly');
        }
    });

});
