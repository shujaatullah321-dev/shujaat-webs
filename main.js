(function(){
document.getElementById('yr').textContent=new Date().getFullYear();
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,c=navigator.connection,sd=c&&c.saveData;
var v=document.querySelector('.hero-vid');
if(v&&!rm&&!sd){var load=function(){v.src=innerWidth<768?v.dataset.srcM:v.dataset.src;v.play().catch(function(){})};
 if(document.readyState==='complete')setTimeout(load,300);else addEventListener('load',function(){setTimeout(load,300)})}
var els=document.querySelectorAll('.reveal');
if(rm||!('IntersectionObserver'in window))els.forEach(function(e){e.classList.add('in')});
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)})}
if(rm||!matchMedia('(hover:hover) and (pointer:fine)').matches)return;
var g=document.querySelector('.glow'),x=0,y=0,raf=0;
addEventListener('mousemove',function(e){x=e.clientX;y=e.clientY;if(!raf)raf=requestAnimationFrame(function(){g.style.transform='translate3d('+x+'px,'+y+'px,0)';raf=0})},{passive:true});
document.querySelectorAll('.mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+(e.clientX-r.left-r.width/2)*.25+'px,'+(e.clientY-r.top-r.height/2)*.35+'px)'});b.addEventListener('mouseleave',function(){b.style.transform=''})});
})();
