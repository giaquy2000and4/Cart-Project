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
    var trcontent = '<tr><td><img src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span><sub>đ</sub></p></td><td><input type="number" value="1" min="1"></td><td>Delete</td></tr>' 
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
}