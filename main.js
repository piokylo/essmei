let links = $('.filters, .filters-list');

links.click(function (e) {
    e.preventDefault();
});


$('.show-filters').on('click', function () {

  


    if ($('.filters-list').is(':visible')){

        $('.filters-list').slideUp()
        $('.show-filters').text('Show Filters')

    } else {
        $('.filters-list').slideDown()
        $('.show-filters').text('Hide Filters')

    }



   
    
  
   
})



$('.filters-list a').on('click', function () {


    let filter = $(this).data('filter');

    
    $('.product').hide();
    $(filter).show();
    $('.filters-list a').removeClass('selected')
    $(this).addClass('selected')
   


})

