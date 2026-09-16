fetchServicesData();
fetchSectors();
fetchLanguages();
$('.popup').hide();

$( '.popup' ).on( "click", function() {
    $( this ).fadeOut(); 
});
$( '.popup .box' ).on( "click", function( event ) {
    event.stopPropagation();
});