const navBar=document.getElementById('navBar');
navBar.style.backgroundColor='navy';
navBar.style.margin="auto";
navBar.style.maxWidth="100rem";
navBar.style.width="80%";
navBar.style.padding="2rem";
navBar.style.display="flex";
navBar.style.justifyContent="space-between";
const menuContainer=document.getElementById('navMenu');
menuContainer.style.display="flex";
menuContainer.style.gap="1rem";
const menu=document.getElementsByClassName('menu');
for(const menuItem of menu){
    menuItem.style.color="white";
    menuItem.style.listStyle="none";
    menuItem.classList.add('hoverClass');
    menuItem.style.padding=".5rem";
    menuItem.style.fontSize="1.2rem";
}
const a=document.createElement('a');
a.innerText="Login";
a.style.color="White";
a.style.padding=".5rem";
a.style.fontSize="1.2rem";
a.classList.add('hoverClass');
navBar.appendChild(a);
