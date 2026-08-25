const openBtn=document.getElementById("openBtn");
const letter=document.getElementById("letter");
const musicBtn=document.getElementById("musicBtn");
const music=document.getElementById("music");

openBtn.addEventListener("click",()=>{
  letter.classList.remove("hidden");
  letter.scrollIntoView({behavior:"smooth"});
});

musicBtn.addEventListener("click",async()=>{
  try{
    if(music.paused){await music.play();musicBtn.textContent="❚❚";}
    else{music.pause();musicBtn.textContent="♫";}
  }catch(e){
    alert("Tambahkan file music.mp3 ke folder assets terlebih dahulu.");
  }
});

function petal(){
  const p=document.createElement("i");
  p.className="petal";
  p.style.left=Math.random()*100+"vw";
  p.style.setProperty("--x",(Math.random()*180-90)+"px");
  p.style.animationDuration=(5+Math.random()*6)+"s";
  p.style.opacity=.3+Math.random()*.5;
  document.querySelector(".petals").appendChild(p);
  setTimeout(()=>p.remove(),12000);
}
setInterval(petal,650);
