"use strict";var precacheConfig=[["/PTWebsite/index.html","79ebca191a356af1ce4b52c68b42cbad"],["/PTWebsite/static/css/main.cc87a1d4.css","04a4d5ca60475329e1faa898b3a1ee3c"],["/PTWebsite/static/js/main.436b9695.js","56f3b9107364f27f7a7e2aec0a6a2af6"],["/PTWebsite/static/media/DebsPhoto.1e4e8c2c.webp","1e4e8c2c31832a35663feeec2cb91515"],["/PTWebsite/static/media/barbara.68ec5d41.jpg","68ec5d41b9d3f03697d688fe0502c7dd"],["/PTWebsite/static/media/becky.907b00cc.jpg","907b00cce692c1f50825dafac77aa72d"],["/PTWebsite/static/media/cactus.1ae982ae.jpg","1ae982ae91514048d477577f7fa561fa"],["/PTWebsite/static/media/cyril.a1aef6c4.jpg","a1aef6c4190b973800285c0b5a931241"],["/PTWebsite/static/media/deb_and_client.fb9af136.jpg","fb9af1363985c0087dfbad8feab1cb29"],["/PTWebsite/static/media/deb_jumpingrope.5c7081ba.webp","5c7081ba7f422262739888d7fc4882fd"],["/PTWebsite/static/media/flex_deb.688b20de.jpg","688b20dec270e1074b0b3a5148f142b1"],["/PTWebsite/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/PTWebsite/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/PTWebsite/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/PTWebsite/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/PTWebsite/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/PTWebsite/static/media/jamie.fb1baf04.jpg","fb1baf04cdeddfd53363e135e475c39b"],["/PTWebsite/static/media/jenny.42c967b5.jpeg","42c967b5c825cf65462dcb083b2e1f85"],["/PTWebsite/static/media/jumprope.ca93e531.jpg","ca93e531b7fe0a4715d0c8e2b6342360"],["/PTWebsite/static/media/kristen-beck.4afad99e.jpg","4afad99eb3ed2d6994a418622e865997"],["/PTWebsite/static/media/mike.919981bf.jpeg","919981bf57a445aac72d573ecf28bf7d"],["/PTWebsite/static/media/nikki.87eae171.jpg","87eae171b2c0e1cf64a813528f225622"],["/PTWebsite/static/media/pbandj.8753c202.jpeg","8753c2027b4fa70f2228d151f20d70e4"],["/PTWebsite/static/media/sindy.d761d227.jpg","d761d227350b495e6d24edb35d27e00e"],["/PTWebsite/static/media/strongisbeautiful3.1e2aa8a1.jpg","1e2aa8a14dc5da19de5110f7b3a4d83e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var s="/PTWebsite/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});