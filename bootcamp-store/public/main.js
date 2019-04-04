
$(window).bind("load", function() {

    const mainMenuMakeup = () => {
        $(".header__nav-sublist").parent().addClass("header__nav-with-submenu");
        //add class to the container to indicate that it has a submenu
    };

    const subMenuEvents = (elem) => {
        elem.find("ul").toggleClass("header__nav-sublist--active");
    };

    mainMenuMakeup();

    $(".header__nav-with-submenu").click(function(){
        subMenu($(this));
    })

 });