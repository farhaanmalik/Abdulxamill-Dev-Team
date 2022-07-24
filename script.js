 // sidebar open close js code
 let navLinks = document.querySelector(".nav-links");
 let menuOpenBtn = document.querySelector(".navbar .bx-menu");
 let menuCloseBtn = document.querySelector(".nav-links .bx-x");
 menuOpenBtn.onclick = function() {
 navLinks.style.left = "0";
 }
 menuCloseBtn.onclick = function() {
 navLinks.style.left = "-100%";
 }
 
 // sidebar submenu open close js code
let serviceArrow = document.querySelector(".service-arrow");
serviceArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let workArrow = document.querySelector(".work-arrow");
workArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// ===Service tablink===
  function service(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
// Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  // ===Client-tablink=== 
  function client(evt, cityName){
    var i, tab_contents, client_tablink;
    tab_contents = document.getElementsByClassName("tab_contents");
    for (i = 0; i < tab_contents.length; i++) {
      tab_contents[i].style.display = "none";
    }
    client_tablink = document.getElementsByClassName("client_tablink");
    for (i = 0; i < client_tablink.length; i++) {
      client_tablink[i].className = client_tablink[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    document.getElementById(cityName).style.flexWrap = "wrap";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultSet").click();



// ===ART & GAME WORK-tablink=== 
  function work(evt, cityName){
    var i, art_tab, art_tablink;
    art_tab = document.getElementsByClassName("art_tab");
    for (i = 0; i < art_tab.length; i++) {
      art_tab[i].style.display = "none";
    }
    art_tablink = document.getElementsByClassName("art_tablink");
    for (i = 0; i < art_tablink.length; i++) {
      art_tablink[i].className = art_tablink[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("default").click();




