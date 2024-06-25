$(document).ready(function() {
    // Toggle de la clase 'active' en #barra-adicional al hacer clic en #mas
    $('#mas').on('click', function(e) {
        e.preventDefault();
        $('#barra-adicional').toggleClass('active');
    });

    // Cerrar #barra-adicional si se hace clic fuera de #mas y #barra-adicional
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#mas').length && !$(event.target).closest('#barra-adicional').length) {
            $('#barra-adicional').removeClass('active');
        }
    });
});

