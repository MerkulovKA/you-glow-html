document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("steps");if(e){const t=e.querySelector(".steps__container"),s=e.getBoundingClientRect().top+document.documentElement.scrollTop,o=e.parentElement,n=document.createElement("div");n.style.height=e.offsetHeight+"px",e.classList.add("steps--sticky"),window.addEventListener("scroll",()=>{window.pageYOffset>s?setTimeout(()=>{e.classList.add("steps--fixed"),o.insertBefore(n,e)}):setTimeout(()=>{e.classList.remove("steps--fixed"),n.remove()})});const r=e.querySelectorAll("a"),c=new IntersectionObserver(s=>{s.forEach(s=>{const o=function(t){return console.log(t),e.querySelector(`a[href="#${t}"]`)}(s.target.id);s.isIntersecting&&(r.forEach(e=>{e.classList.remove("steps__link--active")}),o.classList.add("steps__link--active"),t.scrollLeft=o.offsetLeft-t.offsetLeft)})},{root:null,rootMargin:"-50%"});r.forEach(e=>{const t=e.getAttribute("href");if(!t)return;const s=document.querySelector(t);s&&c.observe(s)})}});