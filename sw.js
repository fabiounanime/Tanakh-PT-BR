/* Replaced at packaging with a content-derived version and shell file list. */
const VERSION='446e63b00dc996d4';
const SHELL='tanakh-shell-'+VERSION, DATA="tanakh-data-8bbcd1e0723a7e84";
const ASSETS=["/","/assets/index-BOYCQsf7.js","/assets/index-u5t_Luqj.css","/cache-version.json","/favicon.svg","/file.svg","/globe.svg","/icons/icon-180.png","/icons/icon-192.png","/icons/icon-512.png","/manifest.webmanifest","/offline-assets.json","/window.svg"];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(SHELL);await cache.addAll(ASSETS);await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();await Promise.all(keys.filter(k=>(k.startsWith('tanakh-shell-')||k.startsWith('nas-fontes-shell-'))&&k!==SHELL).map(k=>caches.delete(k)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request,url=new URL(req.url);
 if(req.method!=='GET'||url.origin!==self.location.origin||url.pathname.startsWith('/api/'))return;
 if(req.mode==='navigate'){
  event.respondWith((async()=>{
   // Installed shell and its hashed assets always remain in the same generation.
   const cache=await caches.open(SHELL),saved=await cache.match('/');
   return saved||fetch(req);
  })());return;
 }
 if(url.pathname.startsWith('/data/')||url.pathname.startsWith('/licenses/')){
  event.respondWith((async()=>{const cache=await caches.open(DATA);const saved=await cache.match(req);if(saved)return saved;const fresh=await fetch(req);if(fresh.ok&&!fresh.redirected)await cache.put(req,fresh.clone());return fresh})());return;
 }
 event.respondWith((async()=>{const cache=await caches.open(SHELL);return await cache.match(req)||fetch(req)})());
});
