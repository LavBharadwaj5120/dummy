(function(){const c="https://dev-api-iform.impactodigifin.xyz/api/v1",t=document.currentScript;function l(){if(t!=null&&t.src)return t.src.substring(0,t.src.lastIndexOf("/"));const e=document.querySelectorAll("script[src]");for(let i=e.length-1;i>=0;i--){const a=e[i].src;if(a.includes("loader"))return a.substring(0,a.lastIndexOf("/"))}return""}function p(){return(t==null?void 0:t.getAttribute("data-api-key"))??""}function g(){return(t==null?void 0:t.getAttribute("data-api-base"))??c}function f(){const e=document.createElement("style");e.textContent=`
      #agent-widget-bubble {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #4f46e5;
        color: #fff;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2147483646;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      #agent-widget-bubble:hover {
        transform: scale(1.08);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
      }
      #agent-widget-bubble svg {
        width: 28px;
        height: 28px;
        fill: #fff;
      }
      #agent-widget-frame-container {
        position: fixed;
        bottom: 92px;
        right: 20px;
        width: 380px;
        height: 560px;
        z-index: 2147483647;
        border: none;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        display: none;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.25s ease, transform 0.25s ease;
      }
      #agent-widget-frame-container.open {
        display: block;
        opacity: 1;
        transform: translateY(0);
      }
      #agent-widget-frame {
        width: 100%;
        height: 100%;
        border: none;
      }

      @media (max-width: 480px) {
        #agent-widget-frame-container {
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      }
    `,document.head.appendChild(e)}function u(){const e=document.createElement("button");return e.id="agent-widget-bubble",e.setAttribute("aria-label","Open chat"),e.innerHTML=`
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/>
      </svg>
    `,document.body.appendChild(e),e}function b(e,i){const a=l(),n=document.createElement("div");n.id="agent-widget-frame-container";const r=new URLSearchParams({apiKey:e,apiBase:i}),o=document.createElement("iframe");return o.id="agent-widget-frame",o.src=`${a}/widget.html?${r.toString()}`,o.setAttribute("allow","clipboard-write"),n.appendChild(o),document.body.appendChild(n),n}function s(){const e=p();if(!e){console.error("[Widget] Missing data-api-key attribute on loader script.");return}const i=g();f();const a=u(),n=b(e,i);let r=!1;a.addEventListener("click",()=>{r=!r,r?(n.classList.add("open"),n.offsetHeight):n.classList.remove("open")}),window.addEventListener("message",o=>{var d;((d=o.data)==null?void 0:d.type)==="widget:close"&&(r=!1,n.classList.remove("open"))})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",s):s()})();
