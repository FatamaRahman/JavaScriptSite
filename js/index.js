var body = document.body;

// Start Body

body.style = "font-family: 'Raleway', sans-serif";
body.style.color =  "#333";
body.style.margin = "0";

// End Body






// Start Header

var header = document.createElement("header");

body.appendChild(header);






// Navbar

var nav = document.createElement("nav"),
    ul = document.createElement("ul"),
    a = document.createElement("a"),
    navigation = ["Section1", "Section2", "Section3"];

header.appendChild(nav);
a.style.float = "left";
a.style.paddingLeft = "30px";
a.style.fontWeight = "bold";
a.style.fontSize = "22px";
nav.appendChild(a);

var brand = document.createTextNode("Testing");

a.appendChild(brand);
nav.appendChild(ul);
nav.style.maxHeight = "50px";
nav.style.lineHeight = "50px";
nav.style.overflow = "hidden";
ul.style.float = "right";
ul.style.marginTop = "0";
ul.style.overflow = "hidden";
ul.style.paddingRight = "30px";

var navLinks;

for (navLinks = 0; navLinks < navigation.length; navLinks++) {
    
    var li = document.createElement("li");
    li.style.display = "inline-block";
    li.style.marginLeft = "30px";
    li.className = "smooth";
    ul.appendChild(li);
    li.innerHTML = "<a href='#'>" + navigation[navLinks] + "</a>";
    
}

var li = document.getElementsByClassName("smooth"),
    i = 0;

li[1].onclick = function () {
    "use strict";
    var smooth = setInterval(function () {
        
        body.scrollTop = i;
        
        i = i + 50;
        
        if (i > 450) {
            clearInterval(smooth);
        }
        
    }, 50);
};

var container = document.getElementsByClassName("container");
nav.classList.add("container");

var aColor,
    aLinks = document.getElementsByTagName("a");

for (aColor = 0; aColor < aLinks.length; aColor++) {
    aLinks[aColor].style.color = "#333";
    aLinks[aColor].style.textDecoration = "none";
}





// Background

var headerIMG = document.createElement("div");

header.appendChild(headerIMG);
headerIMG.style.width = "100%";
headerIMG.style.height = "400px";
headerIMG.style.backgroundImage = "url('http://twentysomethingliving.com/wp-content/uploads/2014/08/nyc-skyline.jpg')";
headerIMG.className = "h-img";

var headIMG = document.getElementsByClassName("h-img"),
    hIMG = headIMG[0];

var div2 = document.createElement("div");

div2.className = "overlay";

hIMG.appendChild(div2);

var overlay = document.getElementsByClassName("overlay");

overlay[0].style.width = "100%";
overlay[0].style.height = "100%";
overlay[0].style.backgroundColor = "rgba(0, 0, 0, .7)";

var headerContent = document.createElement("div");

headerContent.className = "h-content";
headerContent.style.color = "#FFF";
headerContent.style.textAlign = "center";

overlay[0].appendChild(headerContent);

var headerH1 = document.createElement("h1"),
    h1Text = document.createTextNode("Fatama Rahman"),
    headerP = document.createElement("p"),
    pText = document.createTextNode("practicing my javascript. :)"),
    content = document.getElementsByClassName("h-content");

headerH1.style.margin = "auto";
headerH1.style.width = "480px";
headerH1.style.paddingTop = "5px";
headerH1.style.paddingBottom = "5px";
headerH1.style.fontSize = "31px";
headerH1.style.borderTop = "3px solid #FFF";
headerH1.style.borderBottom = "3px solid #FFF";
headerP.style.paddingTop = "20px";

headerH1.appendChild(h1Text);
headerP.appendChild(pText);
content[0].appendChild(headerH1);
content[0].appendChild(headerP);

headerContent.style.paddingTop = "150px";

if (body.offsetWidth < 514) {
    ul.style.display = "none";
    headerH1.style.fontSize = "20px";
    headerH1.style.width = "290px";
}

// End Header






// Start Section 1

var aboutUs = document.createElement("div");

aboutUs.className = "about";
aboutUs.style.textAlign = "center";
aboutUs.style.padding = "50px 0";

body.appendChild(aboutUs);

var aboutH1 = document.createElement("h2"),
    h1Text = document.createTextNode("Section"),
    aboutP = document.createElement("p"),
    pText = document.createTextNode("Insert random shenanigans.");

aboutH1.appendChild(h1Text);
aboutP.appendChild(pText);

aboutUs.appendChild(aboutH1);
aboutUs.appendChild(aboutP);

var style1 = document.createAttribute("style");
style1.value = "margin-top: 0;";

aboutH1.setAttributeNode(style1);

var img = document.createElement("img"),
    src = document.createAttribute("src"),
    alt = document.createAttribute("alt");

src.value = "https://media.timeout.com/images/101705313/image.jpg";
alt.value = "Section1 Image";
img.setAttributeNode(src);
img.setAttributeNode(alt);
aboutUs.appendChild(img);

img.style = "-webkit-filter: grayscale(80%); width: 180px; height: 180px; margin-top: 20px; transition: all .8s ease-in-out; border-radius: 50%";

img.onmouseenter = function () {
    "use strict";
     
    img.style = "-webkit-filter: grayscale(0); width: 180px; height: 180px; margin-top: 20px; transition: all .8s ease-in-out; border-radius: 15% 40%; transform: rotate(360deg)";
    
};

img.onmouseleave = function () {
    "use strict";
     
    img.style = "-webkit-filter: grayscale(80%); width: 180px; height: 180px; margin-top: 20px; transition: all .8s ease-in-out; border-radius: 50%";
    
};

// End Section 1








// Start Footer

var footer = document.createElement("footer");

// Background

footer.style.backgroundImage = "url('https://www.nycintern.org/wp-content/uploads/2013/09/NewYorkCity-Green.jpg')";

body.appendChild(footer);

var overlay = document.createElement("div");

overlay.className = "overlay";
overlay.style.width = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, .7)";

footer.appendChild(overlay);
overlay.style.padding = "60px 0 25px";






// Form

var form = document.createElement("form");

overlay.appendChild(form);
overlay.style.position = "relative";
overlay.style.textAlign = "center";

var input1 = document.createElement("input"),
    input2 = document.createElement("input"),
    textarea = document.createElement("textarea"),
    submit = document.createElement("input"),
    submitType = document.createAttribute("type"),
    inputType1 = document.createAttribute("type"),
    inputValueSubmit = document.createAttribute("value"),
    inputPlaceHolder1 = document.createAttribute("placeholder"),
    inputType2 = document.createAttribute("type"),
    inputPlaceHolder2 = document.createAttribute("placeholder"),
    textareaPlaceHolder = document.createAttribute("placeholder");

inputType1.value = "sub1";
inputPlaceHolder1.value = "Subject1";
input1.setAttributeNode(inputType1);
input1.setAttributeNode(inputPlaceHolder1);
form.appendChild(input1);
input1.className = "inpt";

inputType2.value = "sub2";
inputPlaceHolder2.value = "Subject2";
input2.setAttributeNode(inputType2);
input2.setAttributeNode(inputPlaceHolder2);
form.appendChild(input2);
input2.className = "inpt";

form.appendChild(textarea);
textareaPlaceHolder.value = "Subject3";
textarea.setAttributeNode(textareaPlaceHolder);
textarea.className = "inpt";

form.appendChild(submit);
submitType.value = "submit";
inputValueSubmit.value = "Submit";
submit.setAttributeNode(inputValueSubmit);
submit.setAttributeNode(submitType);
submit.className = "inpt";
submit.id = "submit";

var maxLength = document.createAttribute("maxlength");
maxLength.value = "400";
textarea.setAttributeNode(maxLength);

var inpt = document.getElementsByClassName("inpt"),
    x;

for (x = 0; x < inpt.length; x++) {
    inpt[x].setAttribute("style", "display: block; width: 350px; height: 30px; border-radius: 5px; border: none; resize: none; background-color: rgba(0, 0, 0, .5); padding: 10px; margin : 20px auto; color: rgb(169, 169, 169)");
}

textarea.style.height = "150px";

var s = document.getElementById("submit");

s.style.padding = "0";
s.style.width = "370px";
s.style.height = "40px";

footerP.appendChild(pText);
overlay.appendChild(footerP);
footerP.style.color = "#EEE";
footerP.style.position = "absolute";
footerP.style.bottom = "10px";
footerP.style.fontSize = "15px";
footerP.style.width = "100%";


if (body.offsetWidth < 514) {
    for (x = 0; x < inpt.length; x++) {
        inpt[x].setAttribute("style", "display: block; width: 250px; height: 30px; border-radius: 5px; border: none; resize: none; background-color: rgba(0, 0, 0, .5); padding: 5px; margin : 20px auto; color: rgb(169, 169, 169); line-height: 30px");
    }
    s.style.padding = "0";
    s.style.width = "260px";
    s.style.height = "40px";
}

window.onresize = function () {
    
    "use strict";
    
    if (body.offsetWidth < 514) {
        
        for (x = 0; x < inpt.length; x++) {
            inpt[x].setAttribute("style", "display: block; width: 250px; height: 30px; border-radius: 5px; border: none; resize: none; background-color: rgba(0, 0, 0, .5); padding: 10px; margin : 20px auto; color: rgb(169, 169, 169)");
        }
        s.style.padding = "0";
        s.style.width = "270px";
        s.style.height = "40px";
        ul.style.display = "none";
        headerH1.style.fontSize = "20px";
        headerH1.style.width = "290px";
        textarea.style.height = "150px";
        
    } else {
        
        for (x = 0; x < inpt.length; x++) {
            inpt[x].setAttribute("style", "display: block; width: 350px; height: 30px; border-radius: 5px; border: none; resize: none; background-color: rgba(0, 0, 0, .5); padding: 10px; margin : 20px auto; color: #999");
        }
        s.style.padding = "0";
        s.style.width = "360px";
        s.style.height = "40px";
        ul.style.display = "block";
        headerH1.style.fontSize = "31px";
        headerH1.style.width = "480px";
        textarea.style.height = "150px";
        
    }
    
};

// End Footer

