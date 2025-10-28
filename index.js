import{a as u,S as p,i as n}from"./assets/vendor-Bt_EzQve.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="52952317-f5e88216fd9e8d5aa3001977e",f="https://pixabay.com/api/";async function g(s){const a={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(f,{params:a})).data}const c=document.querySelector(".gallery"),d=document.querySelector("#loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h({webformatURL:s,largeImageURL:a,tags:r,likes:i,views:e,comments:t,downloads:o}){return`
    <li class= "gallery-item">
        <a class= "gallery-link" href= "${a}">
            <img class= "gallery-image"
                src= "${s}"
                alt= "${r}"
                title= "${r}"
            />
        </a>
        <div class= "image-details">
            <div class= "details-item">
                <span class= "detail-label">Likes</span>
                <span class= "detail-value">${i}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Views</span>
                <span class= "detail-value">${e}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Comments</span>
                <span class= "detail-value">${t}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Downloads</span>
                <span class= "detail-value">${o}</span>
            </div>
        </div>
    </li> `}function v(s){if(!s||s.length===0)return;const a=s.map(h).join("");c.insertAdjacentHTML("beforeend",a),y.refresh()}function L(){c.innerHTML=""}function b(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}const l=document.querySelector(".form"),q=l.querySelector('input[name="search-text"]');async function $(s){s.preventDefault();const a=q.value.trim();if(a===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const i=(await g(a)).hits;i.length===0?n({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}):v(i)}catch(r){n.error({title:"HTTP Error",message:`Failed to fetch images: ${r.message}`,position:"topRight"}),console.error("Error fetching images:",r)}finally{S(),l.reset()}}l.addEventListener("submit",$);
//# sourceMappingURL=index.js.map
