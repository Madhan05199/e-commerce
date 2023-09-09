let cardsection=document.getElementById('cards-sections');
let cardcontainer=document.createElement('div')
cardcontainer.classList.add('container')
cardsection.appendChild(cardcontainer)
let row=document.createElement('div')
row.classList.add('row')
cardcontainer.appendChild(row)


let products=[
    {name:"Samsung Galaxy Z Fold5 5G",price:164999,image:"https://m.media-amazon.com/images/I/31Eu0-VOpfL._SX300_SY300_QL70_FMwebp_.jpg",brand:"Samsung",offer:"Up to 46% Off"},
    {name:"R.O water Purifier",price:12999,image:"https://m.media-amazon.com/images/I/41SYNzXdRHL._AC_SR400,600_AGcontrast_.jpg",brand:"V-Gaurd",offer:"Up to 26% Off"},
    {name:"Shoes",price:3599,image:"https://m.media-amazon.com/images/I/91KPzoAe-eL._AC_SY200_.jpg",brand:"Bata",offer:"Up to 16% Off"},
    {name:"Smatch Watches",price:4999,image:"https://m.media-amazon.com/images/I/41LOJ+XwUSL._AC_SY200_.jpg",brand:"Fire Bolt",offer:"Up to 15% Off"},
    {name:"Electric Kettle",price:699,image:"https://m.media-amazon.com/images/I/510sIxSnACL._SL1080_.jpg",brand:"Prestidge",offer:"Up to 23% Off"},
    {name:"Indoor Lighting",price:3590,image:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/BTFGW/Indoor_Lighting_-_Low_Res_-_PCQC._SY116_CB596096789_.jpg",brand:"Havells",offer:"Up to 12% Off"},
    {name:"Iron Box",price:1258,image:"https://m.media-amazon.com/images/I/61inNlr7DjL._AC_UL320_.jpg",brand:"Havells",offer:"Up to 3% Off"},
    {name:"Adjustable Laptop Stand",price:323,image:"https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UL320_.jpg",brand:"STRIFF",offer:"Up to 78% Off"},
    
]

let result=products.map((value)=>{

    let col=document.createElement("div")
    col.classList.add('col-12')
    col.classList.add('col-sm-6')
    col.classList.add('col-lg-3')
    col.classList.add('col-md-4')
    col.classList.add('mb-4')
    row.appendChild(col)
    let card=document.createElement('div')
    card.classList.add('card')
    col.appendChild(card)
    let img=document.createElement('img')
    card.appendChild(img)
    img.src=value.image;
    let content=document.createElement("div")
    content.classList.add('content')
    card.appendChild(content)
    content.innerHTML=`<a href="#">${value.offer}</a> 
                        <span>Deal of the Day</span>`
    let content2=document.createElement('div')
    content2.classList.add('content-2')
    card.appendChild(content2)
    content2.innerHTML=`<h2>${value.name}</h2>
                        <h4>${value.brand}</h4>
                        <span>₹${value.price}</span>
                        `
    let button=document.createElement('button')
    button.innerHTML="Add to Card"
    content2.appendChild(button)
    return col
           
})
let count=0;

for(variable of result ){
    let val=result.indexOf(variable)
    variable.addEventListener('click',()=>{
            addtocart(val)
            count++
          document.querySelector('.count').innerHTML=count
    })
}

let selected=[];
function addtocart(index){
    let object= products.slice(index,index+1)
    selected.push(object[0])
   
}

let addtocarts=document.getElementById('selected');

addtocarts.addEventListener('click',selectproducts);

function selectproducts(){

    console.log(selected)
    sessionStorage.setItem("myData",JSON.stringify(selected))
    sessionStorage.setItem("count",count)
    location.href="card.html"
}


