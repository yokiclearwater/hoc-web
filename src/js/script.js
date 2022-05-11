$(document).ready(function() {
    $('#menu').on('click', function() {
        $('#navContainer').toggleClass('active');
        // $('.nav-list').toggle();
        $('.nav-list').fadeToggle(300);
    })
});
