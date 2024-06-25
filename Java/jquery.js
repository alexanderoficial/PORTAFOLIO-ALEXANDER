$(document).ready(function() {
    $('#mas').on('click', function(e) {
        e.preventDefault();
        $('#barra-adicional').toggleClass('active');
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#mas').length && !$(event.target).closest('#barra-adicional').length) {
            $('#barra-adicional').removeClass('active');
        }
    });
});

