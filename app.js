const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem"); // Select all menu items

const products = [
    {
        id: 1,
        title: "Nexus",
        price: 140,
        colors: [
            {
                code: "black",
                img: "./img/nexusbg.webp",
            },
            {
                code: "skyblue",
                img: "./img/nexusbluebg.png"
            },
        ],
    },
    {
        id: 2,
        title: "Echo",
        price: 140,
        colors: [
            {
                code: "gray",
                img: "./img/echobg.png",
            },
            {
                code: "capriblue",
                img: "./img/echocapribluebg.png"
            },
        ],
    },
    {
        id: 3,
        title: "Nova",
        price: 140,
        colors: [
            {
                code: "skyblue",
                img: "./img/novabg.webp",
            },
            {
                code: "black",
                img: "./img/novablackbg.png"
            },
        ],
    },
    {
        id: 4,
        title: "Blaze",
        price: 140,
        colors: [
            {
                code: "gray",
                img: "./img/blazebg.png",
            },
            {
                code: "lightpurple",
                img: "./img/blazefogpurplebg.png"
            },
        ],
    },
    {
        id: 5,
        title: "Vortex",
        price: 140,
        colors: [
            {
                code: "darkred",
                img: "./img/vortexbg.png",
            },
            {
                code: "skin",
                img: "./img/vortexskinbg.png"
            },
        ],
    },
];

let chosenProduct = products[0]; // Initialize with the first product

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Function to update the product details based on the chosen product
function updateProductDetails(product) {
    currentProductTitle.textContent = product.title;
    currentProductPrice.textContent = "£" + product.price;
    currentProductImg.src = product.colors[0].img;

    // Update color options
    currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = product.colors[index].code;
    });
}

// Initialize product details with the first product
updateProductDetails(chosenProduct);

// Event listeners for menu items (slider navigation)
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Update the chosen product
        chosenProduct = products[index];

        // Update the displayed product details
        updateProductDetails(chosenProduct);
    });
});

// Event listener for color options
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white"
        size.style.color= "black"
        });
        size.style.backgroundColor= "black"
        size.style.color= "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

function checkout() {
    // Get the input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expMonth = document.getElementById('expMonth').value;
    const expYear = document.getElementById('expYear').value;
    const cvv = document.getElementById('cvv').value;

    // Validate input values
    const phonePattern = /^\+?\d{1,15}$/;
    const cardNumberPattern = /^\d{16}$/;
    const expMonthPattern = /^(0[1-9]|1[0-2])$/;
    const expYearPattern = /^\d{4}$/;
    const cvvPattern = /^\d{3,4}$/;

    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number.");
        return;
    }
    if (address === "") {
        alert("Please enter your address.");
        return;
    }
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return;
    }
    if (!expMonthPattern.test(expMonth)) {
        alert("Please enter a valid expiration month (MM).");
        return;
    }
    if (!expYearPattern.test(expYear)) {
        alert("Please enter a valid expiration year (YYYY).");
        return;
    }
    if (!cvvPattern.test(cvv)) {
        alert("Please enter a valid CVV.");
        return;
    }

    // If all validations pass, proceed with the checkout process
    alert("Your order has been placed successfully.");
}



function subscribe() {
    // Fetch the email input value
    var email = document.getElementById('emailInput').value;

    // Validate the email (simple validation example)
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Here you can perform further actions, such as sending the email to a server for processing

    // For now, let's show an alert indicating success
    alert("Thank you for subscribing!");

    // Optionally, clear the input field after successful subscription
    document.getElementById('emailInput').value = '';
}

// Simple email validation function (you can enhance it as per your requirements)
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
