const form = document.getElementById("form");

if(form){
form.addEventListener("submit", e=>{
e.preventDefault();

const data = new FormData(form);
const a = {};
data.forEach((v,k)=>a[k]=v);

localStorage.setItem("answers", JSON.stringify(a));
window.location.href="wyniki-bj.html";
});
}

// WYNIKI
const result = document.getElementById("result");

if(result){

const a = JSON.parse(localStorage.getItem("answers")||"{}");

let warm=0, cool=0;
let light=0, deep=0;
let soft=0, clear=0;
let contrast_high=0, contrast_low=0;

// WŁOSY
if(["gold_blond","warm_brown","red"].includes(a.hair)) warm+=3;
if(["ash_blond","cool_brown","black"].includes(a.hair)) cool+=3;

// OCZY
if(["green","hazel"].includes(a.eyes)) warm+=1;
if(["blue","gray"].includes(a.eyes)) cool+=2;
if(a.eyes_extra==="gold") warm+=2;

// SKÓRA
if(["gold","yellow","olive"].includes(a.undertone)) warm+=3;
if(a.undertone==="pink") cool+=3;

// REAKCJA NA SŁOŃCE
if(a.sun==="tan") warm+=1;
if(a.sun==="burn") cool+=1;

// JASNOŚĆ
if(["very_light","light"].includes(a.skin)) light+=2;
if(a.skin==="dark") deep+=2;

// NASYCENIE
if(a.saturation==="clear") clear+=3;
if(a.saturation==="soft") soft+=3;

// KONTRAST
if(a.contrast==="high") contrast_high+=3;
if(a.contrast==="low") contrast_low+=2;

// OGÓLNY WYGLĄD
if(a.overall==="soft") soft+=2;
if(a.overall==="contrast") clear+=2;
if(a.overall==="deep") deep+=2;
if(a.overall==="fresh") light+=2;

// FINAL
const isWarm = warm>cool;
const isLight = light>deep;
const isSoft = soft>clear;
const isHighContrast = contrast_high>contrast_low;

let type="";

if(isWarm && isLight && !isSoft) type="Jasna Wiosna";
else if(isWarm && !isLight && !isSoft) type="Ciepła Wiosna";
else if(isWarm && isHighContrast) type="Czysta Wiosna";

else if(!isWarm && isLight && isSoft) type="Jasne Lato";
else if(!isWarm && isSoft) type="Zgaszone Lato";
else if(!isWarm && !isLight) type="Chłodne Lato";

else if(isWarm && deep && isSoft) type="Zgaszona Jesień";
else if(isWarm && deep) type="Ciemna Jesień";
else if(isWarm && isSoft) type="Ciepła Jesień";

else if(!isWarm && isHighContrast && clear) type="Czysta Zima";
else if(!isWarm && isHighContrast && deep) type="Ciemna Zima";
else if(!isWarm && clear) type="Chłodna Zima";

result.innerHTML=`<h2>${type}</h2>`;
}