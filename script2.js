let card=document.querySelector('.card')

let obj=sessionStorage.getItem("myData")
let count=sessionStorage.getItem("count")
let shopping=JSON.parse(obj)
let shopitems=document.querySelector('.count');
shopitems.innerHTML=count;
let main=document.getElementById('shopping');
let message=document.createElement('p')
message.classList.add("message")
message.innerHTML="Your Cart is Empty....!!!"
main.appendChild(message);

if(shopping.length===0){
    message.style.display="block"

}else{

    message.style.display="none"
}

let selects=shopping.map((value,index) => {
    let sub=document.createElement('div')
    sub.classList.add("sub")
    card.appendChild(sub)
    let content=document.createElement('div')
    content.classList.add('content')
    sub.appendChild(content);
    let imgholder=document.createElement('div')
    imgholder.classList.add("image")
    content.appendChild(imgholder)
    let img=document.createElement("img")
    img.src=value.image;
    imgholder.appendChild(img)
    let price=document.createElement('div')
    price.classList.add("price-details")
    content.appendChild(price)
    price.innerHTML=`<h3>${value.name}</h3>
                    <h4>${value.brand}</h4>
                    <a href="#">${value.offer}</a>
                    <span>Deal of the Day</span>
                    <div class="price">
                    <i>₹</i>
                    <span class="amount">${value.price}</span>
                    </div>
                    <p>Eligible for free Shipping</p>`;

    let dropdown=document.createElement('div')
    dropdown.classList.add('dropdown')
    price.appendChild(dropdown)
    let select=document.createElement('select')
    dropdown.appendChild(select)
    let button=document.createElement("button")
    button.innerHTML="Delete";

    button.addEventListener('click', () => deletefunction(select));
    dropdown.appendChild(button);
    select.innerHTML=`
                        <option value=1>Qty: 1</option>
                        <option value=2>Qty: 2</option>
                        <option value=3>Qty: 3</option>
                        <option value=4>Qty: 4</option>
                        <option value=5>Qty: 5</option>
                        <option value=6>Qty: 6</option>
                        <option value=7>Qty: 7</option>
                        <option value=8>Qty: 8</option>
                        <option value=9>Qty: 9</option>
                        <option value=10>Qty: 10</option>
                        `
    let endline=document.createElement('div')
    endline.classList.add('endline')
    sub.appendChild(endline);

    return select

});





let select=selects;
console.log(select)
for (val of select){
    let index=select.indexOf(val)
    val.addEventListener('click',(event)=>{
        let value=parseInt(event.target.value);
        quantityadd(value,index)
    })
}


function deletefunction(selectElement) {
    // Get the index of the select element within the selects array
    let index = selects.indexOf(selectElement);

    // Make sure the index is valid
    if (index !== -1) {
        // Remove the select element from the DOM

     selectElement.parentNode.parentElement.parentElement.parentElement.remove();
        // Remove the select element from the selects array
        selects.splice(index, 1);
        let shop=parseInt(shopitems.innerHTML)
        let newvalue=--shop
        shopitems.innerHTML=newvalue;
        totalfunction(selects);
        emptycart(selects)
    }
}

//show empty message======

function emptycart(selects){

    let myselect=[...selects]
    
    if(myselect.length===0){
        message.style.display="block"
    
    }else{
    
        message.style.display="none"
    }
}

function quantityadd(value, index) {
    let newvalue = shopping[index].price * value;
    let add = selects[index].parentElement.previousElementSibling.previousElementSibling.lastElementChild;
    add.innerHTML = `${newvalue}`;
    totalfunction(selects);
}

let total=document.createElement('h1')
total.classList.add("total")
card.appendChild(total)
let sum=0;

for(val of shopping){

    sum+=val.price;
}
total.innerHTML=`
<span>Total:</span>
<div>
<i>₹</i>
<span>${sum}</span>
<span>.00</span>
</div>`

function totalfunction(selective){
    let sum=0;

     for(val of selective){

        let price=val.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerHTML;

        sum+=parseInt(price);
     }



      let result=total.children[1].firstElementChild.nextElementSibling;

        result.innerHTML=sum;

}

