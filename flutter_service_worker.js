'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5126c18b7dbc571f6fe2f323a8c42952",
"index.html": "e823e1da2fd2966b812616afe2372a34",
"/": "e823e1da2fd2966b812616afe2372a34",
"main.dart.js": "15e639711074c3e104915c2ec253c76c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c10f0061d4586d013cbb40fc34fed3f5",
"assets/AssetManifest.json": "85506e9ce48e00927ddbddf9be8e1db5",
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
"assets/assets/images/car2.png": "ec9a0ec8a1c13eac1e9238f946e10600",
"assets/assets/images/jasolar-grey.svg": "9dc834ca9d8b581058b2f39da56f68f7",
"assets/assets/images/connect-color.svg": "f7c027c34dfeae93c989d96eb812b2eb",
"assets/assets/images/support.png": "52c839e0abe8ee5f216ef6f157c32640",
"assets/assets/images/Tesla-color.svg": "5b976d70ed0fb39b1e648bcf27890a27",
"assets/assets/images/esp-grey.svg": "b636a3871a06cff883ef6376393fa3c7",
"assets/assets/images/nastral-color.svg": "cc6a7446de54e8d142298fd4c994024e",
"assets/assets/images/esp-color.svg": "332102c3d028186a5f31a65b7931af8d",
"assets/assets/images/login.svg": "d81ec4118537528b01831dbc5770be39",
"assets/assets/images/connect-grey.svg": "fbe242f43840406bfc51208c45526f10",
"assets/assets/images/jasolar-color.svg": "bb21844f858a911befc2b18416312d50",
"assets/assets/images/logo.png": "933f2177bd642b154d9b1248dc0e01c9",
"assets/assets/images/logo2.png": "2784b2beec11fcc3b8ab20808f8a3744",
"assets/assets/images/Natraplas-grey.svg": "a4e89d886fad5cce5411a52eff45dc5a",
"assets/assets/images/mcdonal.png": "2a480f524534903349a0ec29106296a6",
"assets/assets/images/car.png": "c54600d0e85b5f38b09db0406e5a78e6",
"assets/assets/images/SMA-grey.svg": "88d9a822784e48c08f55734a013ce4b3",
"assets/assets/images/Tesla-grey.svg": "bd1dfb0260453676900d64c03bb90448",
"assets/assets/images/logo.svg": "0a1f7af24b6392596a2e0b3448bd07df",
"assets/assets/images/SMA-color.svg": "3101bd1e3fc6a6b96d5ed2fc46fb450f",
"assets/assets/icons/search.svg": "c977edd5ead3dceb4ee86756474de94d",
"assets/assets/icons/eye_off.svg": "dfc06acb60e3fec9ceee550388bd7fcd",
"assets/assets/icons/retail.svg": "678f97d01516204cf2a946f624372df6",
"assets/assets/icons/ticket.svg": "92b5398df51aa719ad57cecd1a7a0a8b",
"assets/assets/icons/credit_card.svg": "c50a9d7d860f9206707007f371928350",
"assets/assets/icons/solar_panels.svg": "d6803674caa56405ad7af7e4f7fdafff",
"assets/assets/icons/solar_Inverter.svg": "739175de65c635d58b46f5cd73247eba",
"assets/assets/icons/medical.svg": "041b84d17f584c4f5bc0d1b7d2cc28fc",
"assets/assets/icons/forward_arrow.svg": "9b518cfb44e7971a5ec62a7b037def4a",
"assets/assets/icons/instagram.svg": "a206c2e4618edf04b6773f21b9efe16f",
"assets/assets/icons/cart.svg": "a85382d264c38dc1fb39093bd8bae9d3",
"assets/assets/icons/user_avatar.svg": "eca0c28565c388b5cb60f9d4f02ae6fc",
"assets/assets/icons/Icons_-_Filled_-_Popular_Logos-3.svg": "70fa6f929dba5819573e396786e4e5b0",
"assets/assets/icons/arrow_up.svg": "7cec7b398bba6899adc5b211aa859fec",
"assets/assets/icons/battery.svg": "d3d9e748f15fcd8b9c59ea80a39ab98a",
"assets/assets/icons/Icons_-_Filled_-_Popular_Logos-2.svg": "77f88062bcdca9f3f298f805fdf7c48b",
"assets/assets/icons/trophy.svg": "2c1b6b5c3830043fa8fc725fecd783a2",
"assets/assets/icons/plus.svg": "32c34bb5cf3ba9f49b9cd3791b5115e9",
"assets/assets/icons/life_time_savings.svg": "4910520edda7fc22f67bc6539bd8536e",
"assets/assets/icons/Icons_-_Filled_-_Popular_Logos-1.svg": "a206c2e4618edf04b6773f21b9efe16f",
"assets/assets/icons/snapchat.svg": "0170de2aa613b2ab04af2962114fed49",
"assets/assets/icons/arrow_down.svg": "c6dd235d4a0d94cfa49e669430577907",
"assets/assets/icons/registration.svg": "f926a1155c5b8ea468a6feee48f67782",
"assets/assets/icons/tyre.svg": "8f7f4808f074957725053504aa9cd1cf",
"assets/assets/icons/facebook.svg": "70fa6f929dba5819573e396786e4e5b0",
"assets/assets/icons/cash.svg": "7cd3cd58a90756b929848ae48787ed0c",
"assets/assets/icons/eye.svg": "66159bd27665a78efe807e24b7452c68",
"assets/assets/icons/insurance.svg": "1340ee747b5a3709ec673ebfe1a96a76",
"assets/assets/icons/car.svg": "ca1b93605ad29a8c4237ffbae9e80646",
"assets/assets/icons/Icons_-_Filled_-_Popular_Logos.svg": "0170de2aa613b2ab04af2962114fed49",
"assets/assets/icons/logo.svg": "2d3849862346b07e0896c3779b317a31",
"assets/assets/icons/tiktok.svg": "77f88062bcdca9f3f298f805fdf7c48b",
"assets/assets/icons/minus.svg": "d99f89a9a02e01d006de7a9bab0a7d51",
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
