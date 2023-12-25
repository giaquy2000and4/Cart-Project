const btn = document.querySelectorAll("button")

btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        addCart(btnItem,product,productImg,productName,productPrice)
    })
})
function addCart(btnItem,product,productImg,productName,productPrice){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productSelect = document.querySelectorAll(".title")
        if(productSelect[i].innerHTML == productName){
            alert("Your product has been added")
            return
        }
    }
    var trcontent = '<tr><td><img src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sub>đ</sub></p></td><td><input type="number" value="1" min="1"></td><td><span class="delete-cart">Delete</span></td></tr>' 
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}

//---------------totalPrice-------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    itemPriceTotal = 0
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        itemMultiple = inputValue*productPrice
        itemPriceTotal = itemPriceTotal + itemMultiple
    }
    var total = document.querySelector(".price-total span")
    total.innerHTML = itemPriceTotal.toLocaleString('de-DE')
    inputChange()

}
//---------------delete-------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productSelect = document.querySelectorAll(".delete-cart")
        console.log(productSelect)
        productSelect[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartItemDelete = cartDelete.parentElement.parentElement
            cartItemDelete.remove()
            carttotal()
        })
    }
}

function inputChange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
   
}