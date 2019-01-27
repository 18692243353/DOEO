$(function () {
    $('#itcast').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {

            $('.section>div img').removeAttr('style');
            $('.section>div div').removeAttr('style');

            $('.section').eq(index - 1).addClass('animation').siblings().removeClass('animation');

            if (index == 2) {

                $('.section2 .search01').animate({
                    marginLeft: -111
                }, 1000, 'easeOutBack', function () {

                    $('.section2 .search01').hide();
                    $('.section2 .search02').show();

                    $('.section2 .search02').delay(500).animate({

                        marginLeft: 130,
                        marginBottom: 450,
                        width: 148

                    }, 1000);

                    $('.section2 .sofas').delay(500).animate({

                        width: 441,

                    }, 1000);
                })
            } else if (index == 4) {
                $('.section4 .carBox').animate({
                    marginLeft: 1000
                }, 2500, 'easeInElastic', function () {
                    $('.section4 .keyboard').animate({
                        opacity: 1,
                    }, 500);
                })
            } else if (index == 6) {
                $('.section6 .giftBox').animate({
                    marginTop: 450,
                }, 1000, 'linear', function () {
                    $('.section6 ').animate({
                        backgroundPositionX: -1250,
                    }, 3500, 'linear', function () {
                        $('.section6 .man').animate({
                            height: 133,

                        }, 1000);
                        $('.section6 .man').animate({
                            marginRight: -200,

                        }, 1000, 'linear', function () {
                            $('.section6 .door').show();
                            setTimeout(function () {
                                $('.section6 .girl').show();
                            }, 500);
                        });

                    });
                })

            }
            $('.section8 .again').click(function () {


                $.fn.fullpage.moveTo(1);
            });

            $('.section8').mousemove(function (e) {

                e = e || window.event;

                $('.section8 .hand').css('left', e.pageX - 65);
                $('.section8 .hand').css('top', e.pageY);

            })
        }

    })
})