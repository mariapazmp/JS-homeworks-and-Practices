$(window).bind("load", function() {    

    const productList = document.getElementsByClassName("product-list")[0];

    productList.addEventListener('click', function (event) {
        if (event.target.matches('.product-item__add-btn')) {
            addToCart(event.target.parentElement);
        }
    
    }, false); 
    
    function addToCart(card) {        
        let cardInfo = {
            imageSrc : card.querySelector(".product-item__image img").getAttribute("src"),
            productPrice : card.querySelector(".product-item__price").textContent,
            productName : card.querySelector(".product-item__name").textContent
        }

        let itemMiniCart = document.querySelector(".mini-cart__product-item").cloneNode(true);
        itemMiniCart.querySelector(".mini-cart__product-image img").setAttribute("src", cardInfo.imageSrc);
        itemMiniCart.querySelector(".mini-cart__product-name").textContent = cardInfo.productName; 
        itemMiniCart.querySelector(".mini-cart__product-price").textContent = cardInfo.productPrice;

        document.querySelector(".mini-cart__product-list").appendChild(itemMiniCart);

        //console.log(itemMiniCart.querySelector(".mini-cart__product-image img"));
        
        //

    }
});
