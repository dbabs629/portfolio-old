let navTabs = document.getElementsByClassName("nav-link-list");
let projectContent = document.getElementsByClassName("project-section");
let aboutContent = document.getElementsByClassName("about-section");
let projectTab = document.getElementsByClassName("project-tab")[0];
let aboutTab = document.getElementsByClassName("about-tab")[0];
let contactTab = document.getElementsByClassName("contact-tab")[0];
let contentContainer = document.getElementsByClassName("content-container")[0];
let bodyTag = document.getElementsByTagName("body")[0];

//on reload- remove the anchor string in url and replace with new url
//content container created a space between nav and bottom of the page 
//once the user clicked an anchor and reloaded the page
window.addEventListener('load', function(){
  var url = window.location.toString();
  if( this.location.href.indexOf("#") != -1 ) {
	  url = url.split("#")[0];
    location.replace(url);
    console.log(url);
  }
});

//select the tab with the active class and remove it
//if the active tab is not a 'a' tag then get parentElement of the li that was clicked and add .active
//create variable for the tabSection that was clicked and remove the '-anchor' from the end of the string
//display the section that matches the nav tab that the user clicked
//set body overflow to allow the content to be displayed
//set content-container to display block after a tab was clicked
// content-container, when empty, created space at bottom of nav/html when the page loaded

//I selected all non active tabs using queryselectorAll'a:not(.active)' and repeated my active tab code
//I ran a for loop to select each non active tab in the NodeList and remove the display for each element
//added body style overflowY visible so that the content can be made visible
//if overflow was not hidden, the empty content container created space between bottom of page and nav

navTabs[0].addEventListener("click", function (e) {
  let activeTab = navTabs[0].querySelectorAll(".active");
  let tabClicked = e.target;
  let tabElement = e.target.nodeName;
  let tabClass = e.target.parentNode.classList[0];
  activeTab[0].classList.remove("active");

  if (tabClicked !== activeTab) {
    if (tabElement !== "a") {
      tabClicked = tabClicked.parentElement;
      tabClicked.classList.add("active");
      
      //I added this code after the .active class was added to the clicked tab and element
      let notActive = navTabs[0].querySelectorAll("a:not(.active)");
      for(var i = 0; i < notActive.length; i++){
        // console.log(notActive[i].classList[0]);
        let notSelected = notActive[i].classList[0].substring(0, notActive[i].classList[0].length - 4);
        let noDisplay = document.getElementsByClassName(notSelected + "-section")[0];
        noDisplay.style.display = "none";
      };
      let tabSection = tabClass.substring(0, tabClass.length - 4);
      let sectionDisplay = document.getElementById(tabSection + "-anchor");
      sectionDisplay.style.display = "flex";
      bodyTag.style.overflowY = "visible";
      contentContainer.style.display = "block";
    } else {
      tabClicked.classList.add("active");
      console.log("You clicked the right tag");
    }
  } else {
    console.log("This tab is already active");
  }
  console.log(e.target);
});

//reset animation scroll to top of page
window.addEventListener("scroll", function (event) {
  let slideD = document.getElementById("animation-daniel");
  let slideB = document.getElementById("animation-babin");
  scrollPos = window.scrollY;
  if (scrollPos <= 100) {
    slideD.classList.add("slide-left");
    slideB.classList.add("slide-right");
  } else if (scrollPos > 500) {
    slideD.classList.remove("slide-left");
    slideB.classList.remove("slide-right");
  } else {
    console.log(scrollPos);
  }
});

