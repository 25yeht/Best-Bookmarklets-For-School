javascript:/*PageFixer 4.0 Copyright © 2024. All Rights Reserved*/!function(){let e="hp2327366496";if(void 0!==window[e]){window[e]=!0;return}let t=!1,n=document.createElement("iframe"),o={display:"block",right:"30px",opacity:"1",transform:"translate(0, 0)"};for(let[r,a]of Object.entries({border:"none","box-shadow":"0 0 15px #00000033",position:"fixed","border-radius":"none",bottom:"30px",right:"0px",width:"300px",height:"325px",display:"none",transition:"right 0.3s ease, transform 0.3s ease, opacity 0.3s ease",transform:"translate(100%, 0)",opacity:"0","z-index":"2147483647"}))n.style.setProperty(r,a,"important");document.body.appendChild(n);let i=n.contentDocument,s=i.createElement("style");s.textContent="* { font-family: system-ui, 'Helvetica Neue', 'Open Sans', 'Roboto', 'Noto Sans', sans-serif; } body { display: flex; flex-direction: column; justify-content: center; gap: 0.5rem; margin: 0px; padding: 25px 25px 0 25px; background-color: #fff; } button { border: none; padding: 15px; background-color: #000; color: #fff; font-size: 18px; box-shadow: 0 0 15px #00000044; cursor: pointer; } button:active { background-color: #363636; } h1 { margin: 0; }",i.head.appendChild(s);let p=i.createElement("h1");p.textContent="How can we help?",i.body.appendChild(p);let d=i.createElement("p");d.textContent="Please let us know if you have any questions or need assistance.",i.body.appendChild(d);let l=i.createElement("button");l.textContent="Start",i.body.appendChild(l);let c=i.createElement("p");c.textContent="Press tick mark (`) to hide/unhide shift to stop",i.body.appendChild(c);let $=new AudioContext;$.addEventListener("statechange",function(){"suspended"===$.state&&$.resume()});let u=!1,y=$.createOscillator(),f=$.createGain();function m(){"suspended"===$.state&&$.resume(),f.gain.cancelScheduledValues($.currentTime)}function h(){m(),f.gain.linearRampToValueAtTime(0,$.currentTime+5),l.textContent="Start"}function x(){t=!1,n.style.setProperty("right","0px","important"),n.style.setProperty("transform","translate(100%, 0)","important"),n.style.setProperty("opacity","0","important")}function b(){t=!0,n.style.setProperty("display",o.display,"important"),setTimeout(function(){n.style.setProperty("right",o.right,"important"),n.style.setProperty("transform",o.transform,"important"),n.style.setProperty("opacity",o.opacity,"important")},50)}function g(e){let n=e.keyCode;switch(n){case 192:t?x():b();break;case 16:h()}}function _(){h(),x()}f.gain.value=0,f.connect($.destination),y.frequency.value=16e3,y.connect(f),y.start(),l.addEventListener("click",function e(){(u=!u)?(m(),f.gain.linearRampToValueAtTime(1,$.currentTime+5),l.textContent="Stop"):h(),u&&x()}),document.addEventListener("keydown",g),i.addEventListener("keydown",g),addEventListener("pagehide",_),addEventListener("beforeunload",_),setTimeout(b,Math.floor(500*Math.random())),Object.defineProperty(window,e,{get:function(){return""},set:function(e){!0===e&&setTimeout(t?x:b,Math.floor(500*Math.random())+500)}})}();