const mainContainer=document.getElementById('mainContainer');
mainContainer.style.maxWidth="100rem";
mainContainer.style.width="80%";
mainContainer.style.margin="auto";
mainContainer.style.marginTop="2rem";
const section=document.createElement('section');
section.innerHTML=`
<h1>Welcome To Section 1</h1>
<p>IEEE 802.11ad defines a new physical and medium access control layer for IEEE802.11 networks to operate in the unlicensed 60 GHz millimeter spectrum wave for multi-gigabit wireless communications.</p>
`;
section.classList.add('section');
mainContainer.appendChild(section);
const section2=document.createElement('section');
section2.innerHTML=`
<h2>Section Last</h2>
<p>Hence, for millimeter ladfjlsdf l flaskjdf slf slfkdjsdl fklsf lsdkjf lsdkf sldkfj sdkf sldkf sdlkfj lsdkf lsdkjf lsdkf lsdjkf lsjfdlsd f sldfklsdf lsd f</p>
`;
section2.classList.add('section');
mainContainer.appendChild(section2);

const section3=document.createElement('section');
section3.innerHTML=`
<h1>Welcome To Section 1</h1>
<p>IEEE 802.11ad defines a new physical and medium access control layer for IEEE802.11 networks to operate in the unlicensed 60 GHz millimeter spectrum wave for multi-gigabit wireless communications.</p>
`;
section3.classList.add('section');
mainContainer.appendChild(section3);

const section4=document.createElement('section');
section4.classList.add('section');
const h1=document.createElement('h1');
h1.innerText="Welcome to my custom h1 element";
const p=document.createElement('p');
p.innerText="IEEE 802.11ad defines a new physical and medium access control layer for IEEE802.11 networks to operate in the unlicensed 60 GHz millimeter spectrum wave for multi-gigabit wireless communications.";
section4.appendChild(h1);
section4.appendChild(p);
mainContainer.appendChild(section4);

const allsection=document.getElementsByClassName('section');
for(const section of allsection){
    
    section.style.marginBottom="1rem";
    section.style.padding="1rem";
    section.style.backgroundColor="lightgreen";
    section.style.borderRadius="1.5rem";
    section.style.boxShadow="5px 5px green";
}
