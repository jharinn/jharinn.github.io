'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "90a307f358559ecae79e8925bca4073b",
"index.html": "7016cc9ede5709dcc1752641bb112982",
"/": "7016cc9ede5709dcc1752641bb112982",
"main.dart.js": "630372383c7e25a7d0814ba1c0371ef0",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7497bddb8df1a1d9335d2a0cf3eb0619",
"assets/dotenv": "c965a270bdeac25d2f1fe0d6091763fe",
"assets/AssetManifest.json": "79a508df1ff6ad6bedb99222cc6a7a3a",
"assets/NOTICES": "06d80fb1a19a5905f880858de6027bb9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7a7415f415fb1ab53b54d30f173168fd",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/icon_o.png": "f6fd4c4f4351310c9700c61424ac82d3",
"assets/assets/images/icon_x.png": "191763d496a2c6dc33d0d9067285bfef",
"assets/assets/images/cal_failed.png": "8f4dbcb5ff68053586f4637319fdef24",
"assets/assets/images/cal_not_todo.png": "e80fd0e401b65bbe3dfb49a7bbac97e1",
"assets/assets/images/cal_success.png": "06f02b500ff2ee5f932d2669655c7b3a",
"assets/assets/images/cal_todo.png": "72cb879032afa7fbd025ec06f6f60b6f",
"assets/assets/images/main_top_map.png": "ea312e42d1475161664516a050d171d3",
"assets/assets/images/bt_gathering.png": "80cd6f72937cdffb50ec6038ab9cee48",
"assets/assets/images/main_m_cup.png": "4d74c6bfe7307a0b83b42ca6a1c96bfd",
"assets/assets/images/routine_auth_placeholder.png": "304a768030fd507de6e591d21237686f",
"assets/assets/images/arrow_back.png": "3072120051ecaaba5a2153fdfdb3e84f",
"assets/assets/images/gathering_add.png": "41243c2db9dc0b79aecb885e4100a310",
"assets/assets/images/main_seoul.png": "a9a613fbd9070635e41fa63c5962faa6",
"assets/assets/images/btn_check_routine.png": "4d0ce25b10cc2bb2ebba1c99f4aba4ff",
"assets/assets/images/bt_green_city.png": "cec7f867c4b712cd2a1473516272143d",
"assets/assets/images/chevron_back.png": "c8193c8a60031125d975796c3ce922de",
"assets/assets/images/bt_mypage.png": "9b1d0c4244bb21a3fad9f1b7e2cb5b90",
"assets/assets/images/routine_joined.png": "1b853bd8aa9a88f635337ed41d7fc7e6",
"assets/assets/images/chevron_forward.png": "45dc6e7cb67e28bcc8171f702584d38b",
"assets/assets/images/btn_join_routine.png": "e9092dcb5c0f3e07f72f474c4284d4dc",
"assets/assets/images/bt_routine.png": "d63662c6278b4efb050fc872155f4bae",
"assets/assets/images/main_m_tree.png": "1c5a27b7c74f5f6f83f5c5ca3fe407a4",
"assets/assets/images/gathering_person_b.png": "62f08579daffa93a7e5669c0992619b7",
"assets/assets/images/main_top_arrow.png": "bfe1eafe303e6530d4ecde0d5b6e7f10",
"assets/assets/images/bt_mypage_active.png": "08571d8e43b6421ce9f9299506cc07ac",
"assets/assets/images/main_district.png": "b80ebaf80740e05f6ad8f45724fdd14b",
"assets/assets/images/routine_not_joined.png": "b33e1c7d857d7368b605893bc536ed8a",
"assets/assets/images/gathering_person_w.png": "9c99d653ff8e4bcbeeabdc8151914bfd",
"assets/assets/images/bt_routine_active.png": "9689f5fee9fda99abfc8691d62b614e5",
"assets/assets/images/bt_green_city_active.png": "f7a3205872484ba290d6f2b3e5de9b54",
"assets/assets/images/gathering_share.png": "c51cc2e88844890fa0e47986c1fa124a",
"assets/assets/images/cal_today.png": "ee4620a67893df6d2c22ecfee534528f",
"assets/assets/images/bt_gathering_active.png": "42678b692a8969c71c335c4d57ed32b2",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
