import{a as h,S as v,i}from"./assets/vendor-Bt_EzQve.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const L="52952317-f5e88216fd9e8d5aa3001977e",b="https://pixabay.com/api/";async function w(t,e){const s={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await h.get(b,{params:s})).data}catch(o){throw console.error("Error fetching images: ",o),new Error("Failed to fetch images from Pixabay.")}}const f=document.querySelector(".gallery"),m=document.querySelector(".load-more"),p=document.querySelector("#loader"),P=new v(".gallery a",{captionsData:"alt",captionDelay:250});function $({webformatURL:t,largeImageURL:e,tags:s,likes:o,views:a,comments:r,downloads:n}){return`
    <li class= "gallery-item">
        <a class= "gallery-link" href= "${e}">
            <img class= "gallery-image"
                src= "${t}"
                alt= "${s}"
                title= "${s}"
            />
        </a>
        <div class= "image-details">
            <div class= "details-item">
                <span class= "detail-label">Likes</span>
                <span class= "detail-value">${o}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Views</span>
                <span class= "detail-value">${a}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Comments</span>
                <span class= "detail-value">${r}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Downloads</span>
                <span class= "detail-value">${n}</span>
            </div>
        </div>
    </li> `}function q(t){if(!t||t.length===0)return;const e=t.map($).join("");f.insertAdjacentHTML("beforeend",e),P.refresh()}function S(){f.innerHTML=""}function B(){p.classList.remove("is-hidden")}function E(){p.classList.add("is-hidden")}function M(){m.classList.remove("is-hidden")}function d(){m.classList.add("is-hidden")}const u=document.querySelector(".form"),I=u.querySelector('input[name="searchQuery"]'),C=document.querySelector(".load-more"),H=document.querySelector(".gallery");let y="",l=1,c=0;const O=15;i.settings({position:"topRight",timeout:4e3,progressBar:!1});function x(){const t=H.firstElementChild;if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}async function g(t=!0){t&&(l=1,S(),d()),B();try{const e=await w(y,l),s=e.hits;if(c=e.totalHits,s.length===0&&t){i.error({title:"No result",message:"Sorry, there are no images matching your search query. Pleasy, try again!"});return}t&&i.success({message:`We founf ${c} images.`}),q(s),l+=1,t||x();const o=Math.ceil(c/O);l>o?(d(),c>0&&i.info({message:"We are sorry, but you have reached the end of search results."})):M()}catch(e){i.error({title:"HTTP Error",message:`Failed to fetch images: ${e.message}`}),d()}finally{E()}}u.addEventListener("submit",async t=>{t.preventDefault();const e=I.value.trim();if(e===""){i.error({message:"Please enter a search query!"});return}y=e,await g(!0),u.reset()});C.addEventListener("click",async()=>{await g(!1)});
//# sourceMappingURL=index.js.map
