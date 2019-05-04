$(window).bind("load", function() {    

    const productList = document.getElementsByClassName("product-list")[0];

    productList.addEventListener('click', function (event) {
        if (event.target.matches('.product-item__add-btn')) {
            addToCart(event.target.parentElement);
        }
    
    }, false); 
    
    function addToCart(card) {
        let cardInfo = {
            imageElement : card
        }
    }
});