"use strict"

const shopping_form = document.forms.shoppingcart;
console.log(shopping_form);

const product = shopping_form.elements.product_name;
console.log(product);

const product_error = document.querySelector("#product_error");
console.log(product_error);

const amount = shopping_form.elements.product_amount;
console.log(amount);

const amount_error = document.querySelector("#amount_error");
console.log(amount_error);

const list_body = document.querySelector("#list_body");

const total = document.querySelector("#total");

function shoppingCart(e) 
{
    e.preventDefault();
    if(product.value === "")
    {
        product_error.innerHTML = "Invalid Product Name";
        setInterval(()=>{
            product_error.innerHTML = "";
        },4000);
    }
    else if(amount.value === "")
    {
        amount_error.innerHTML = "Invalid Amount";
        setInterval(()=>{
            amount_error.innerHTML = "";
        },4000)
    }
    else
    {
        bodyListadding();
    }
}

function bodyListadding()
{
    
    var list_body_ul = document.createElement("ul");
    list_body_ul.setAttribute("id","list_ul");

    var list_body_li = document.createElement("li");
    list_body_li.setAttribute("id","list_li");

    list_body_li.innerHTML = `<span id="prod">${product.value}${amount.value}</span>`  

    var del_btn = document.createElement("button");
    del_btn.setAttribute("id","dust");
    del_btn.innerHTML = `<i class="fa-solid fa-trash-can" id="dust_bin"></i>`

    // var total_amount = document.createElement("p");
    // total_amount.setAttribute("id","total_amount")
    // total_amount.innerHTML = `Total ${eveluate(parseInt(amount.value))}`
    total.innerHTML = `Total ${eveluate(parseInt(amount.value))}`;
    // total.append(total_amount);
    list_body_ul.append(list_body_li, del_btn);
    list_body.append(list_body_ul);

    del_btn.addEventListener("click", ()=>{
        if(confirm(`Do you want to delete the product ${product.value}`))
        list_body_li.parentElement.remove();
    });
    product.innerHTML = "";
    amount.innerHTML = "";
}


function eveluate(x)
{
    // console.log(amount.value.length);
    for(var i=0; i<amount.value.length-1; i++)
    {
    var x2 = [];
    if(amount.value.length == "1")
    {
        x2.push(x);
        console.log(x2)
    }
    else if(amount.value.length == "2")
    {
        x2.push(x);
        console.log(x2)
    }
    var x3 = x2[i];
    console.log(x3);
}
    // var amt = amount.value;
    // console.log(amt)
    // for(var i=0; i<amt.length; i++)
    // {
    //     // console.log(amt[i]);
    //     for(var j=i; j<=amt.length; j++)
    //     {
    //         x = amt[i] + amt[j]
    //     }
    // }
    return x3;

        // var value = 0;
        // for(var i=0; i<=amt.length; i++)
        // {
        //     if(amt === 'number')
        //     {
        //         value ++;
        //     }
        // }
        // return value;
}
shopping_form.addEventListener("submit", shoppingCart);