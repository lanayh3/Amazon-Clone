function showItems(){
  
    let div = document.createElement('div');
    let divInnerHtml = 
    `
            <div class="card">
                <div class="container">
                    <img src="images/guccishirt.jpeg" alt="t-shirt">
                </div>
                <div class="info">
                    <p>Product 1</p>
                    <p class="price">$100.00</p>
                    <button>Add to cart</button>
                </div>
        </div>`
    div.innerHTML = divInnerHtml;
    container.appendChild(div);
}