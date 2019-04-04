
$(window).bind("load", function() {

    const mainMenuMakeup = () => {
        $(".header__nav-sublist").parent().addClass("header__nav-with-submenu");
        $(".header__nav-sublist").parent().append('<i class="fas fa-chevron-down"></i>');
        //add class to the container to indicate that it has a submenu
    };

    const subMenuEvents = (elem) => {
        elem.find("ul").toggleClass("header__nav-sublist--active");
    };

    mainMenuMakeup();

    $(".header__nav-with-submenu").click(function(){
        subMenuEvents($(this));
    })

    $(".header__nav-with-submenu").focusout(function(){
        console.log("focusout");
        $(this).find("ul").removeClass("header__nav-sublist--active");        
    })

 });