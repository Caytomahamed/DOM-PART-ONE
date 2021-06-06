const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// nav-bar  section





// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])





let menu = document.querySelectorAll("a")

menu[0].textContent = siteContent["nav"]["nav-item-1"]
menu[1].textContent = siteContent["nav"]["nav-item-2"]
menu[2].textContent = siteContent["nav"]["nav-item-3"]
menu[3].textContent = siteContent["nav"]["nav-item-4"]
menu[4].textContent = siteContent["nav"]["nav-item-5"]
menu[5].textContent = siteContent["nav"]["nav-item-6"]





//cta section 





let bigTitle = document.querySelector(".cta-text h1")
let bigLog = document.getElementById("cta-img")
let btn = document.querySelector(".cta-text button")




bigTitle.textContent = siteContent["cta"]["h1"]
btn.textContent =siteContent['cta']['button']
bigLog.setAttribute('src' , siteContent["cta"]["img-src"])






// top contett 





let  subTitle = document.querySelectorAll('.top-content h4')

subTitle[0].textContent = siteContent['main-content']['features-h4']
subTitle[1].textContent = siteContent['main-content']['about-h4']

let addTop = document.querySelectorAll('.top-content p')

addTop[0].textContent = siteContent['main-content']['features-content']
addTop[1].textContent = siteContent['main-content']['about-content']





//middle img 



let middleImg = document.querySelector('.middle-img')
middleImg.setAttribute('src' , siteContent['main-content']['middle-img-src'])





//bottom content 



let addHeading =document.querySelectorAll('.bottom-content h4')
addHeading[0].textContent=siteContent['main-content']['services-h4']
addHeading[1].textContent=siteContent['main-content']['product-h4']
addHeading[2].textContent=siteContent['main-content']['vision-h4']

let addPara=document.querySelectorAll('.bottom-content p')
addPara[0].textContent=siteContent['main-content']['services-content']
addPara[1].textContent=siteContent['main-content']['product-content']
addPara[2].textContent=siteContent['main-content']['vision-content']





//contact 



let contactTitle =document.querySelector('.contact h4')
contactTitle.textContent =siteContent['contact']['contact-h4']

console.log(contactTitle)

let contactPara =document.querySelectorAll('.contact p')
contactPara[0].textContent =siteContent['contact']['address']
contactPara[1].textContent =siteContent['contact']['phone']
contactPara[2].textContent =siteContent['contact']['email']

console.log(contactPara)





// footer



let copyRight = document.querySelector('footer p')
copyRight.textContent =siteContent['footer']['copyright']
console.log(copyRight)