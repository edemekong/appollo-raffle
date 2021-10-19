'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5126c18b7dbc571f6fe2f323a8c42952",
"index.html": "aa7b5bc4c936f72b084f0e6e11edd978",
"/": "aa7b5bc4c936f72b084f0e6e11edd978",
"main.dart.js": "e5f9f3b8bc35d84da4f29dcb75ef1c57",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c10f0061d4586d013cbb40fc34fed3f5",
"assets/AssetManifest.json": "39aa058667f149aeee236bad3f2876d2",
"assets/NOTICES": "c4e291161771a5b2a632ce860d34ab1a",
"assets/FontManifest.json": "4c54f8040d8c6417d30bf54bff2707af",
"assets/packages/awesome_card/images/contactless_icon.png": "a092b99c8a1f820436ddf6e540eb632d",
"assets/packages/awesome_card/images/card_provider/discover.png": "50f59532bededb551c5ed62fb1009e69",
"assets/packages/awesome_card/images/card_provider/rupay.png": "3e3018d92a1b51fde09382939664a22d",
"assets/packages/awesome_card/images/card_provider/maestro.png": "6800b310fc27f91d0231ab6556284c5b",
"assets/packages/awesome_card/images/card_provider/visa.png": "b6cf8805abcc16ca2bc2ed401958cce1",
"assets/packages/awesome_card/images/card_provider/elo.png": "523ddd31d37dd0cd6727d7006c328f8e",
"assets/packages/awesome_card/images/card_provider/diners_club.png": "4288121f0ec6619f2ea56bc7cbb2685a",
"assets/packages/awesome_card/images/card_provider/master_card.png": "6ecc2a7c3b3d7e1c30ac7cf7a083d5af",
"assets/packages/awesome_card/images/card_provider/jcb.png": "434316972590e7d17d65cd133c018f82",
"assets/packages/awesome_card/images/card_provider/american_express.png": "25d34d555cc835f008806163bf889bf9",
"assets/packages/awesome_card/fonts/MavenPro-Regular.ttf": "ebc7385f9f207b4ad5d0cc4204bf4068",
"assets/packages/awesome_card/fonts/MavenPro-Medium.ttf": "06dcc8cf4f85c46c6985b69ed0b6b5b6",
"assets/packages/awesome_card/fonts/MavenPro-Bold.ttf": "c3c32db501249a4a864e3359d88469fb",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/charity.png": "4441aa0f267153226c087a0fa49277ef",
"assets/assets/images/car2.png": "0e8d6be1f3ea0e375bd8edf172c56424",
"assets/assets/images/support.png": "52c839e0abe8ee5f216ef6f157c32640",
"assets/assets/images/connect-grey.png": "a2d48b8ed8edf4e2cd14edb9a86fce95",
"assets/assets/images/nastraplas.png": "72c1960c42c8a4d245be64f674ae79ac",
"assets/assets/images/esp-color.png": "0a3e5d95f81e7f066887b5fd044c32e6",
"assets/assets/images/esp-grey.png": "ab6b3d7fe1cd4664c56db5240d923f97",
"assets/assets/images/tesla-color.png": "76bdbbfd7042f4b2190846d12c76ef87",
"assets/assets/images/mcdonald.png": "2a480f524534903349a0ec29106296a6",
"assets/assets/images/connect-color.png": "42d908b52354e1a67a6d37f2e919df94",
"assets/assets/images/jasolar-grey.png": "241d1556168aed0ea4e0c8e814af2254",
"assets/assets/images/connact-grey.png": "a2d48b8ed8edf4e2cd14edb9a86fce95",
"assets/assets/images/sma-color.png": "85ef4203ba2094c1c89cb53346a1243e",
"assets/assets/images/logo.png": "9dc10fe7256351f8d91c5547dd590221",
"assets/assets/images/logo2.png": "2784b2beec11fcc3b8ab20808f8a3744",
"assets/assets/images/tesla-grey.png": "d9110aa4d0b2a3f4f7d1418480cdbc15",
"assets/assets/images/mcdonal.png": "fe573aee465111e7953703a997e977cc",
"assets/assets/images/nastraplas-grey.png": "2f0acd20f419b7ceec0942982d6648da",
"assets/assets/images/sma-grey.png": "22e116aebd0e07bd3fa7102e64005242",
"assets/assets/images/car.png": "c54600d0e85b5f38b09db0406e5a78e6",
"assets/assets/images/nastraplas-coloe.png": "c89a906d8b50d3f0836acdf3a9e9d794",
"assets/assets/images/jasolar-color.png": "927ea30c3fa3af35954161d24e1a528c",
"assets/assets/icons/plus.png": "f0305a051a264bdaf43f7aea8c869be6",
"assets/assets/icons/eye_off.svg": "dfc06acb60e3fec9ceee550388bd7fcd",
"assets/assets/icons/trophy.png": "44d2e70f114326810de38c0e68632c77",
"assets/assets/icons/support.png": "de2adb95ef5592a74ca3b10f1441462d",
"assets/assets/icons/battery.png": "ed62a936e0eb1964e4b19f003c1bd043",
"assets/assets/icons/cart.png": "5a132dc7b6e7b4f6f90bae4db7628249",
"assets/assets/icons/instagram.png": "6a78ecd5c6f5f987f31e73a9a8b1b575",
"assets/assets/icons/medical.png": "2df26b223761760431b02e3b49748374",
"assets/assets/icons/credit_card.png": "3005a767223f4a44522beed58458033c",
"assets/assets/icons/retail.png": "5f954a178095fe14a5ade3c5fd4d4a88",
"assets/assets/icons/ticket.png": "18de4984cbd377a229fb51d77f1170ff",
"assets/assets/icons/tiktok.png": "83b48b8a02dee40ccb5ddd2d63050fbd",
"assets/assets/icons/arrow_forward.png": "c0d970f34e178598fa2a943960d31689",
"assets/assets/icons/panel.png": "6e550e70bef3ec386f0853a148f38261",
"assets/assets/icons/car.png": "d863d921ec5f880c65349b846c1d57a8",
"assets/assets/icons/insurance.png": "c259440518e4c9a06d9ceb3daebc6721",
"assets/assets/icons/inverter.png": "3fabfa429437cf0ae309e4bd35dcacde",
"assets/assets/icons/life_saving.png": "1f3b9b8f61858b2271fc79fad04e8ca4",
"assets/assets/icons/eye.svg": "66159bd27665a78efe807e24b7452c68",
"assets/assets/icons/cash.png": "cfdb92dbb2d4ec53faa2d7939ff3e1cd",
"assets/assets/icons/facebook.png": "ed8fdcf594daa23d2664785b5a5f8234",
"assets/assets/icons/registration.png": "6f48616f0d525b68e83f8bff33ec706e",
"assets/assets/icons/tyre.png": "cfa8d2258fad2b60f7e5d18bf5953cd2",
"assets/assets/icons/snapchat.png": "550d03dd075c39a9b9a78826f2dcbc89",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Cocon-RegularTR.ttf": "3cb2dc7f975186787930e7b93ee18dc0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
