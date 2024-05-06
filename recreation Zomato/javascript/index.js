var cuisinebtn  = document.querySelector("#Cuisines")
var cuisinebtn1  = document.querySelector("#btn3")
var clearbtn =document.querySelector('#clearbtn')

cuisinebtn1.addEventListener('click',()=>{
    cuisinebtn.style.display="block"
    

})
clearbtn.addEventListener('click',()=>{
    cuisinebtn.style.display='none'
})

var data = [
    {
        img:"../Assert/SS  Hyderabad Biryani folder.avif",
        name:"SS Hyderabad Biryani",
        location:"Biryani, Seafood, North",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/abid's.avif",
        name:"Abid's",
        location:"Arabian, Biryani, Hyderaba",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/Chinese work.avif",
        name:"Chinese Wok",
        location:"Chinese, Asian, Momos ",
        price:"₹300 for one"

        
    }, {
        img:"../Assert/burger abduction.avif",
        name:"Burger Abduction",
        location:"Burger, Fast Food",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/Dindigul thalappakatti img.avif",
        name:"Dindigul Thalappakatti",
        location:"Biryani, South Indian",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/yaghma kababs.avif",
        name:"Yaghma Kababs",
        location:"Kebab, North Indian, Rolls",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/the brownie.avif",
        name:"The Brownie Studio",
        location:"Bakery, Desserts",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/cakezone.avif",
        name:"CakeZone Patisserie",
        location:"Bakery, Desserts, Mithai  ",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/udipi.avif",
        name:"Udipi Hotel Sudha",
        location:"South Indian, Chinese",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/ibaco.avif",
        name:"ibaco",
        location:"Ice Cream",
        price:"₹300 for one"

        
    },
    {
        img:"../Assert/kfc.webp",
        name:"KFC",
        location:"Burger, Fast Food, Biryani, ",
        price:"₹300 for one"

        
    },
    

]


var store = document.getElementById("container-2")


data.forEach(item => {
    store.innerHTML += `
    <div class="col col-md-6 col-lg-4 col-sm-12 mt-5">
        <div class="card" id="cards">
            <img src="${item.img}" alt="" class="img-fluid rounded-start card-img" style="  width: 100%;
            height: 200px; 
            object-fit: cover;" id="img">
            <div class="card-body">
                <p class="card-title" id="name">${item.name}</p>
                <p id="location">${item.location}</p>
                <p style="float: right;">₹300 for one</p>
                <button class="btn btn-warning mt-5 w-100 " id="button">Add to Cart</button>
            </div>
        </div>
    </div>`;
});




var cart = [];

document.querySelectorAll("#button").forEach(button => {
    button.addEventListener("click", function() {
      // Find the closest card to the clicked button
      var card = this.closest(".card");
  
      // Find the relevant elements within the card
      var itemName = card.querySelector("#name").textContent;
      var itemLocation = card.querySelector("#location").textContent;
      var itemPrice = card.querySelector("#img").src;
     
      var item = {
        name: itemName,
        location: itemLocation,
        price: itemPrice
      };
      cart.push(item);
  
      var modal = document.getElementById("cartModal");
      var cartItem = document.getElementById("cartItem");
      cartItem.innerHTML += `
      <div class="col col-md-6 col-lg-4 col-sm-12 mt-5">
        <div class="card" id="cards">
            <img src="${item.price}" alt="" class="img-fluid rounded-start card-img" style="  width: 100%;
            height: 200px; 
            object-fit: cover;" id="img">
            <div class="card-body">
                <p class="card-title" id="name">${item.name}</p>
                <p id="location">${item.location}</p>
                <p style="float: right;">₹300 for one</p>
                <button class="btn btn-warning mt-5 w-100 " id="button">Add to Cart</button>
            </div>
        </div>
    </div>`
       ;
  
      modal.style.display = "block";
    });
  });

  document.querySelector(".close").addEventListener("click", function() {
    var modal = document.getElementById("cartModal");
    modal.style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("cartModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })  
