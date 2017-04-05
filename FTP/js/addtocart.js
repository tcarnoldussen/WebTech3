/*
	Add to cart fly effect with jQuery. - May 05, 2013
	(c) 2013 @ElmahdiMahmoud - fikra-masri.by
	license: http://www.opensource.org/licenses/mit-license.php
*/   

$('.product_add').on('click', function () {
        $(this).addClass('product_added');
        $(this).text('added');

        var cart = $('.cart_btn');
        var imgtodrag = $(".product_image img");
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': 'auto',
                    'width': '300px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': '75px',
                    'height': 'auto'
            }, 1000, 'easeInOutExpo');

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });

$('.item_add').on('click', function () {
        $(this).addClass('item_added');
        $(this).text('added');

        var cart = $('.cart_btn');
        var imgtodrag2 = $(this).parent('.item_info').parent('.item').find("img").eq(0);
        if (imgtodrag2) {
            var imgclone2 = imgtodrag2.clone()
                .offset({
                top: imgtodrag2.offset().top,
                left: imgtodrag2.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': 'auto',
                    'width': '190px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': '75px',
                    'height': 'auto'
            }, 1000, 'easeInOutExpo');

            setTimeout(function () {

            }, 10);

            imgclone2.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });