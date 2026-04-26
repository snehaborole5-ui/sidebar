const sidebar     =document.getElementById("sidebar"); 
const sideBarClose= document.getElementById("sideBarClose"); 
const sideBarOpen = document.getElementById("sideBarOpen");
const overlay =document.getElementById("overlay");

function toggleSideBar(){ 
 sidebar.classList.toggle('active'); 
 overlay.classList.toggle('active');
     
}


sideBarOpen.addEventListener('click', toggleSideBar) ;
sideBarClose.addEventListener('click', toggleSideBar); 
overlay.addEventListener('click',toggleSideBar);