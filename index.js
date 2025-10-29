import{a as h,S as v,i}from"./assets/vendor-Bt_EzQve.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const L="52952317-f5e88216fd9e8d5aa3001977e",b="https://pixabay.com/api/";async function P(t,e){const a={key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await h.get(b,{params:a})).data}catch(o){throw console.error("Error fetching images: ",o),new Error("Failed to fetch images from Pixabay.")}}const f=document.querySelector(".gallery"),m=document.querySelector(".load-more"),p=document.querySelector("#loader"),$=new v(".gallery a",{captionsData:"alt",captionDelay:250});function q({webformatURL:t,largeImageURL:e,tags:a,likes:o,views:r,comments:s,downloads:n}){return`
    <li class= "gallery-item">
        <a class= "gallery-link" href= "${e}">
            <img class= "gallery-image"
                src= "${t}"
                alt= "${a}"
                title= "${a}"
            />
        </a>
        <div class= "image-details">
            <div class= "details-item">
                <span class= "detail-label">Likes</span>
                <span class= "detail-value">${o}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Views</span>
                <span class= "detail-value">${r}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Comments</span>
                <span class= "detail-value">${s}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Downloads</span>
                <span class= "detail-value">${n}</span>
            </div>
        </div>
    </li> `}function w(t){if(!t||t.length===0)return;const e=t.map(q).join("");f.insertAdjacentHTML("beforeend",e),$.refresh()}function S(){f.innerHTML=""}function B(){p.classList.remove("is-hidden")}function E(){p.classList.add("is-hidden")}function M(){m.classList.remove("is-hidden")}function c(){m.classList.add("is-hidden")}const u=document.querySelector(".search-form"),I=u.querySelector('input[name="searchQuery"]'),C=document.querySelector(".load-more"),H=document.querySelector(".gallery");let g="",l=1,d=0;const O=15;i.settings({position:"topRight",timeout:4e3,progressBar:!1});function x(){const t=H.firstElementChild;if(t){const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}async function y(t=!0){t&&(l=1,S(),c()),B();try{const e=await P(g,l),a=e.hits;if(d=e.totalHits,a.length===0&&t){i.error({title:"No result",message:"Sorry, there are no images matching your search query. Pleasy, try again!"});return}t&&i.success({message:`We founf ${d} images.`}),w(a),t||x(),l+=1;const o=Math.ceil(d/O);l>o?(c(),i.info({message:"We are sorry, but you have reached the end of search results."})):M()}catch(e){i.error({title:"HTTP Error",message:`Failed to fetch images: ${e.message}`}),c()}finally{E()}}u.addEventListener("submit",async t=>{t.preventDefault();const e=I.value.trim();if(e===""){i.error({message:"Please enter a search query!"});return}g=e,await y(!0),u.reset()});C.addEventListener("click",()=>{y(!1)});
//# sourceMappingURL=index.js.map
