$(document).ready(function () {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");
    
    $('.edit1').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#editor1').fadeIn();
        $('.overlay').fadeIn();
    });
    
    $('.edit2').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#editor2').fadeIn();
        $('.overlay').fadeIn();
    });
    
    $('.edit3').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#editor3').fadeIn();
        $('.overlay').fadeIn();
    });
    
    $('.edit4').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#editor4').fadeIn();
        $('.overlay').fadeIn();
    });
    
    // $('.closeico,.overlay').click(function () {

    //     $('.popupmain').fadeOut();
    //     $('.overlay').fadeOut();


    // });

    $(".menu-Bar").click(function () {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });

    $(".loginUp").click(function () {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".signUp").click(function () {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function () {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

    /* Tabbing Function */
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).fadeIn();
        $(".tabViewList").slick("setPosition", 0);
    });

    // Accordian
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

    $("li.dropdown-nav").hover(function () {
        $(this)
            .children("ul")
            .stop(true, false, true)
            .slideToggle(300);
    });

    $(".searchBtn").click(function () {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function (e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".index-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    });


});



$(window).on("load", function () {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function () {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) { }

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function () {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
        scrollTop: $("." + e).offset().top
    },
        1000
    );
}

$(document).ready(function () {
    $('.popdynamic').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');

        var packtitle = $(this).closest('.pckg').find(" .title").html();
        var packprice = $(this).closest('.pckg').find(".price .amount").html();



        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });



    $('.popbtn2').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');
        var packtitle = $(this).closest('.pckg2').find(".label").html();
        var packprice = $(this).closest('.pckg2').find(".price").html();
        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.closeico,.overlay').click(function () {

        $('.popupmain').fadeOut();
        $('.overlay').fadeOut();


    });

    $('.popstatic').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#popstatic').fadeIn();
        $('.overlay').fadeIn();


        var orgtexts = '$99';
        //  $(".centercont h3 span").text('Start your Trademark Registration Now');
        $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
    });

    $(window).scroll(function () {
        var header = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('sticky');
        }
        if (scroll <= 0) {
            header.removeClass('sticky');
        }

    });

});



$('.countrylist').change(function () {
    var thisval = $(this).children('option:selected').val();
    var thiscode = $(this).children('option:selected').attr('data-abbr');
    $(this).closest('.newcountrycode ').find('.countrycode').attr("value", "+" + thisval);

    if (thiscode == 'CA') {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fgca');
    } else {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fg' + thisval);
    }
});


$(".testi-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-bg',
    mobileFirst:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      ]
});



$(".testi-slider-2").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 885,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              
            }
          }
      ]
});

$(".testi-slider-3").slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    rows: 1,
    speed: 300,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 885,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
          }
      ]
});


if ($(window).width() > 1200) {
    $('.has-child.hover').hover(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}
else{
    $('.has-child.hover').click(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}

$('.has-child.click').click(function() {
    $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
    $('.has-child').not($(this)).find('.chev').removeClass('rotate');

    $(this).find('.dropdown').stop(true,false,true).slideToggle(500);
    $(this).find('.chev').toggleClass('rotate');

});


$(document).on('click', '.srch-btn', function() {
    $('.search-data tbody').html('');
    $('.search-data').css('display', 'none');
    var searchText = $('.srch').val();
    if (searchText == '') {

    } else {
        var requestOptions = {
            method: 'GET'
        };

        fetch("https://innova-labs.net:9094/trademarks/search?name=" + searchText + "&page=1&count=10",
                requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result.elements.length)
                if (result.elements.length > 0) {
                    result.elements.forEach(function(item, index) {
                        $(".search-data tbody").append(
                            '<tr><td>' + item.markIdentification + '</td><td>' + item
                            .owners[0].partyName + '</td><td>' + item.serialNumber +
                            '</td><td>' + item.filingDate + '</td></tr>'
                        );
                    })
                    $('.search-data').css('display', 'block');
                } else {
                    $(".search-data tbody").append(
                        '<tr><td colspan="4">No Trademark Found For ' + searchText + '</td></tr>'
                    );
                    $('.search-data').css('display', 'block');
                }
            })
            .catch(error => console.log('error', error));
    }

});


    // Function to save data and redirect
    const saveDataAndRedirect = () => {
        const firstName = $("#f_name").val();
        const email = $("#f_email").val();
        const phoneNo = $("#f_phone").val();
        const description = $("#f_message").val();

        const dataToStore = { firstName, email, phoneNo, description };
        
        // Show loader
        $("#f_submit").html('Registering... <i class="fa fa-spinner fa-spin"></i>');

        // Call the API to send data
        sendDataToAPI(dataToStore, () => {
            // Callback: Redirect to 'four-steps-form.html' after API call is complete
            // window.location.href = 'https://alphatrademarks.com/thankyou-stepper.html';
        });
    };

    const sendDataToAPI = (data, callback) => {
        const apiUrl = 'https://backend-develop.thecoredesigns.com/trade-mark/deluxe-atm';

        // Prepare the data for the API request
        const apiData = {
            firstName: data.firstName,
            phoneNo: data.phoneNo,
            email: data.email,
            description: data.description
        };

        // Make a POST request to the API with JSON data in the body
        $.ajax({
            url: apiUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(apiData),
            success: function (response) {
                console.log('API response:', response);
                // Handle the API response if needed
                callback(); // Call the callback after API is complete
            },
            error: function (error) {
                console.error('Error sending data to API:', error);
                // Handle errors if needed
                // Hide loader and show error message
                $("#f_submit").html('Register Now');
            }
        });
    };

    $(document).ready(function () {
        // Initialize form validation
        $("#form4").validate({
            rules: {
                firstName: "required",
                email: {
                    required: true,
                    email: true
                },
                phoneNo: {
                    required: true,
                }
            },
            messages: {
                firstName: "Please enter your first name",
                email: "Please enter a valid email address",
                phoneNo: {
                    required: "Please enter your phone number",
                }
            },
            submitHandler: function (form) {
                // Prevent default form submission
                event.preventDefault();

                // Form is valid, call the API and redirect
                saveDataAndRedirect();
            }
        });
    });