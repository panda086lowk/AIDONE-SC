function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function toggleDropdown() {
  const menu = document.getElementById("Pmenu");
  
  if(menu.style.display === "block"){
    menu.style.display = "none";
  }
  else{
    menu.style.display = "block";
  }
}
