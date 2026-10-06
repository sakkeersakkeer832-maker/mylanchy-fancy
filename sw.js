const CACHE='mylanchy-fancy-v1';
const APP='./Mylanchy_Fancy_Premium_Cute_Final.html';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll([APP,'./manifest.webmanifest']))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ if(e.request.method!=='GET') return; e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const copy=x.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return x}).catch(()=>caches.match(APP)))); });
