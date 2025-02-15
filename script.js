// Shah Nabeel Portfolio Script

// Contact page form
// UserName
let userName = document.querySelector("#userName");
let userNameKey = '';

// Event 
userName.addEventListener("input", (e)=>{
    userNameKey = e.target.value;
    if(userNameKey.length < 1){
        alert("Enter User name");
    }
})

// UserEmail
let userEmail = document.querySelector("#userEmail");
let userEmailKey = '';

// Event
userEmail.addEventListener("input", (e)=>{
    userEmailKey = e.target.value;
    if(userEmailKey.length < 1){
        alert("Enter Email");
    }
})

// UserMessage
let userMessage = document.querySelector("#userMessage");
let userMessageKey = '';

// Event
userMessage.addEventListener("input", (e)=>{
    userMessageKey = e.target.value;
    if(userMessageKey.length < 1){
        alert("Enter your Message");
    }
})

// Submit Button
let submitBtn = document.querySelector("#submitBtn");


submitBtn.addEventListener("click", (e)=>{
    if(userNameKey.length < 1){
        alert("Enter User name");
    } else if(userEmailKey.length < 1){
        alert("Enter Email");
    } else if(userMessageKey.length < 1){
        alert("Enter your Message");
    } else{
        alert("Message may not be sent! try again");
        location.reload()
    }
})


// SideBar Script
// SideBar Script
// SideBar Script

// Menu Button
let menuBtn = document.querySelector("#menuBtn");

let sideBar = document.querySelector("#side-bar");
let body = document.getElementsByTagName("body");
// menu btn
menuBtn.addEventListener("click", ()=>{
    sideBar.style.right = "0%"
})

let closeBtn = document.querySelector("#closeBtn");

// close btn
closeWithLink = ()=>{
    sideBar.style.right = "-80%"
}

closeBtn.addEventListener("click", ()=>{
    closeWithLink();
})

