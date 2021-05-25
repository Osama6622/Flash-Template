// Select Landing Page 

let landingPage = document.querySelector(".landing-page");

// Get Array Of Images

let imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

setInterval( () => {
    
    //Get Random Number
    let randomNumber = Math.floor(Math.random() * imgs.length );
    
    // Change Background Image
    landingPage.style.backgroundImage = 'url("images/' + imgs[randomNumber] + '")'
    
},4000);

// Create Popup With Images

let ourImages = document.querySelectorAll(".imgs-box img");

ourImages.forEach(img => {
    
   img.addEventListener( 'click', (e) => {
       
      //Create Overlay Element 
       let overlay = document.createElement("div");
       
       //Add ClassName to the overlay div
       overlay.className = "popup-overlay";
       
       //Append The Overlay Div To The Dody
       document.body.appendChild(overlay);
       
       //Create Overlay box
       let popupBox = document.createElement("div");
       
       //Add Classname TO Overlay Box
       popupBox.className = "popup-box";
       
       // Create A Heading For The Popup Box
       if(img.alt !== null) {
           
           //Create Heading 
           let imgHeading = document.createElement("h3");
           
           //Create Text For The Heading
           let headingText = document.createTextNode(img.alt);
           
           //Append Text To The Heading
           imgHeading.appendChild(headingText);
           
           //Append ImgHeading To The PopupBox
           popupBox.appendChild(imgHeading);
          
          }
       
       //Create popup Img
       let popupImg = document.createElement("img");
       
       // Set popupImg Src
       popupImg.src = img.src;
       
       //Append PopupImg to overlayBox
       popupBox.appendChild(popupImg);
       
       //Append overlayBox To The Body
       document.body.appendChild(popupBox);
       
       //Create Close Button
       let closeBtn = document.createElement("span");
       
       //Create Text To The Close Button
       let closeBtnText = document.createTextNode("X");
       
       //Append Text To Button
       closeBtn.appendChild(closeBtnText);
       
       //Add Class To Button
       closeBtn.className = "close-btn";
       
       //Append Colse Button To Popup Box
       popupBox.appendChild(closeBtn);
       
       
   });
    
});

//Close Popup 

document.addEventListener('click', (e) => {
    
    if(e.target.className == 'close-btn'){
        
        //Remove The Current Popup
        e.target.parentNode.remove();
        
        //Remove The Overlay
        document.querySelector('.popup-overlay').remove();
        
       }
});



const links = document.querySelectorAll(".landing-page .header ul li > a");

links.forEach(link => {
    
   link.addEventListener('click', (e) => {
              
       e.target.parentElement.querySelectorAll(".active").forEach(element => {
                      
          element.classList.remove("active");
       });
       
       e.target.setAttribute('class', 'active');
   });
});


 















