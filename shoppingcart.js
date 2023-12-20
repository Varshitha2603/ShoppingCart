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

shopping_form.addEventListener("submit", (e)=> {
    e.preventDefault();
    // console.log("hi");
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
});

function bodyListadding()
{
    const list_body_ul = document.createElement("ul");
    list_body_ul.setAttribute("id","list_ul");

    const list_body_li = document.createElement("li");
    list_body_li.setAttribute("id","list_li");

    list_body_li.innerHTML = `<span>${product.value}${amount.value}</span>`  

    const del_btn = document.createElement("button");
    del_btn.innerHTML = `<i class="fa-solid fa-trash-can" id="dust_bin"></i>`

    const total_div = document.createElement("div");

    const total_amount = document.createElement("p");
    total_amount.innerHTML = "Total"

    const total_amount_value = document.

    total_div.append(total_amount);
    list_body_ul.append(list_body_li, del_btn, total_div);
    list_body.append(list_body_ul);

    del_btn.addEventListener("click", ()=>{
        if(confirm(`Do you want to delete the product ${product.value}`))
        list_body_li.parentElement.remove();
    });
}

