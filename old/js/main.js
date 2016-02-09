$('[data-spy="scroll"]').each(function () {
     var $spy = $(this).scrollspy('refresh')
  })

//push footer to bottom
$( function () {
    var height_diff = $( window ).height() - $( 'body' ).height();
    if ( height_diff > 0 ) {
        $( '#footer' ).css( 'margin-top', height_diff );
    }
});
