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

function openDefAlarm() {
  const appear =document.getElementById("def-alarm");
  
  if(appear.style.visibility === "hidden" || appear.style.visibility === ""){
    appear.style.visibility = "visible";
  }
  else{
    appear.style.visibility = "hidden";
  }
  
}

function openDefGrip() {
  const appear =document.getElementById("def-grip");
  
  if(appear.style.visibility === "hidden" || appear.style.visibility === ""){
    appear.style.visibility = "visible";
  }
  else{
    appear.style.visibility = "hidden";
  }
  
}

function openDefAttach() {
  const appear =document.getElementById("def-attach");
  
  if(appear.style.visibility === "hidden" || appear.style.visibility === ""){
    appear.style.visibility = "visible";
  }
  else{
    appear.style.visibility = "hidden";
  }
  
}
