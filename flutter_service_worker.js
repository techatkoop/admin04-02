'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8730d7bb738822036d0e9ba6d4744ae4",
"assets/assets/fonts/Avenir-Black.ttf": "968e784956ff9b6a05c29cc3be18cad0",
"assets/assets/fonts/Avenir-Book.ttf": "995b34ab56b423abffe48e64bf8b8df1",
"assets/assets/fonts/Avenir-Heavy.ttf": "f080b6894f8375c59a197caa24aac91c",
"assets/assets/fonts/Avenir-Light.ttf": "33f6570a328d84cb7d06e829a0c7ca1b",
"assets/assets/fonts/Avenir-Medium.ttf": "7d635ea94b4460e86cd678e9e754a643",
"assets/assets/fonts/Avenir-Roman.ttf": "c6d37b26297461a78d10f169dd5cf46d",
"assets/assets/fonts/Poppins-Bold.otf": "e47421f9b8cec2661620743c53475c8d",
"assets/assets/fonts/Poppins-Medium.otf": "f88c443f02135a3ba091560e76ed767f",
"assets/assets/fonts/Poppins-SemiBold.otf": "b0b3d360d13a9649222edd1d844dfc9c",
"assets/assets/icons/about_koop.png": "59169593cb56806d8e8cb5ed48205fd9",
"assets/assets/icons/active_like.png": "47768d3b779d4955c15e486431c46050",
"assets/assets/icons/add.png": "1c90513d4cc0db8f2bd909541f8f8266",
"assets/assets/icons/add_story.png": "3a1c9147d4f9370dd04b8fe0c6429d6f",
"assets/assets/icons/ambulance.png": "fb597038e95198af9d09e0abf443e643",
"assets/assets/icons/back_gate.png": "d46b653d424314112cb17a5a8c09eabb",
"assets/assets/icons/bell.png": "2ee7c06186c7b05d059d0d0156146d8b",
"assets/assets/icons/board_members.png": "5d431f4af00e6a9e329d2c07e3a80898",
"assets/assets/icons/camera.png": "7a6175447004365c15c6408e8251425a",
"assets/assets/icons/chat.png": "e7cda4e80b715c320d054523582c2c2b",
"assets/assets/icons/club_house.png": "19ee1802fad8960ff96e79a9cd8fbf21",
"assets/assets/icons/comment.png": "3af06522331deabdeefb8df93d4de602",
"assets/assets/icons/community_commerce.png": "0700340aaee0abe5993b9cdbbbdaab38",
"assets/assets/icons/community_directory.png": "a0c091df564b0f27b4dd09080d01d51d",
"assets/assets/icons/complaint.png": "0f4ceaa020f216e4070c62e3b875a0d5",
"assets/assets/icons/doctor.png": "908e1982b4ce131b5697fb456773e101",
"assets/assets/icons/electric_services.png": "95ee7968e04d5f996b50a6ddad2f5d8f",
"assets/assets/icons/event.png": "96143ff5065b794c849e7a5f4e4a0fd3",
"assets/assets/icons/fire_station.png": "b991e352e047714b6a46c2a02ad6f195",
"assets/assets/icons/give_feedBack.png": "162f8c97e3913dc02ce9ac9aa4bedd3e",
"assets/assets/icons/happening.png": "1e4f095b530370d0b34644a3f88ae4fa",
"assets/assets/icons/home.png": "89b1df603265b483b211785e530c91ca",
"assets/assets/icons/hospital.png": "3da20812337b64126ae7d9fb9d8eb1dd",
"assets/assets/icons/img.png": "1ee120cc9b30b7752656d1725e6cd369",
"assets/assets/icons/invite_people.png": "e469979557fa1fb8e3f312527a618589",
"assets/assets/icons/like.png": "1279bb4a49e3f93dbad177a4dd4f5bb6",
"assets/assets/icons/logout.png": "1194eeaf4d3fdbb1f44217dcfb5d739e",
"assets/assets/icons/maintenance_office.png": "62928130cd2546439f67a8d20dfab2aa",
"assets/assets/icons/main_gate.png": "45a3b16ceaa310c03b0b9d59ee1fa2f9",
"assets/assets/icons/menu.png": "80d2dc54539b48e433462ccb6c05eeae",
"assets/assets/icons/pharmacy.png": "3ae9363a5c8364d59b896a0e70a4b21d",
"assets/assets/icons/photo_video.png": "71a909a142eeac5dd89f867b6725e2cf",
"assets/assets/icons/plumbing_office.png": "540010b4f89e66163e5382d71fc80f2d",
"assets/assets/icons/police_station.png": "66119a2b1a599a49b419569737a0753f",
"assets/assets/icons/poll.png": "af78b65162bae18b7478b3ff3c531e9a",
"assets/assets/icons/profile.png": "e3f006ff22eef2f62ff412cbb1c2eec3",
"assets/assets/icons/security_manager.png": "20f6b6956ae0598c45eb9124006a2c86",
"assets/assets/icons/send.png": "8f458ba41e6a4d8e65035fe67b4ed4da",
"assets/assets/icons/settings.png": "d12b7fd199e752f4247113ec38f4f117",
"assets/assets/icons/share.png": "43bb8215e174ec406c961df09925de0c",
"assets/assets/icons/short_video.png": "7a57090d15ad056b912da48230a50057",
"assets/assets/icons/snake_catcher.png": "bc19ef5d6572c84d8af9129e515a341f",
"assets/assets/icons/society_maintenance.png": "08ea37777caba88e1e56abac26bb31c0",
"assets/assets/icons/utilities.png": "c961b38c4c70c175d0c0ccf79cbfb0a1",
"assets/assets/images/complaints.png": "0fa37d1056af18adf69b6fbd5fec73be",
"assets/assets/images/c_commerce.png": "858a94395097eaa71933727fc08e88d3",
"assets/assets/images/c_directory.png": "aea4ea79833d89ac95276b04a7ca314b",
"assets/assets/images/empty.png": "771188d27b302a8e4d1474a5b595f028",
"assets/assets/images/facilities.png": "55ebd4b61fce1861c1620ea2e8929b1b",
"assets/assets/images/intro_one.png": "30b5bcd86ab18c6f538d6a45d17b50d9",
"assets/assets/images/intro_three.png": "dd0f5edafac5d2205e049965223d1526",
"assets/assets/images/intro_two.png": "ad38b11b52178e0b5ba66adf6c81d6af",
"assets/assets/images/logo.png": "f5aa527f85b4f6c4e3b828b79f0f37a1",
"assets/assets/images/notice_board.png": "dbbb44dc9983c796f2bd3bb9e9132d34",
"assets/assets/images/welcome.png": "bd8d9517bb2507783d12f3b16167b063",
"assets/FontManifest.json": "ae5003f0e1865c3206807987059a311c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "700bd9c51a10fd8a70ed0fff907fd315",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "671fae9ea5e58c372f5aa7b5a7230441",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "d0d1db29c77e1abce12ccd34c3e5c687",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-chrome-192x192.png": "911e919e90bef4902a875ea35eb16709",
"icons/android-chrome-512x512.png": "9c044683448537704b2b12e7fb299b8f",
"icons/apple-touch-icon.png": "7a8785815ea4bdb0d327ad055973207e",
"icons/favicon-16x16.png": "21b9366cd75898759e76752612829d89",
"icons/favicon-32x32.png": "2051e5549061903f8d08c13cca98cc0c",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"index.html": "d25303264988b2b553016426cbeacb13",
"/": "d25303264988b2b553016426cbeacb13",
"main.dart.js": "012abeac381109f90f095f5ffcf26c2d",
"manifest.json": "8263e47b2ad094afe680828a655b0be9",
"version.json": "234f8e15c6a7f2f20610c96c382e2883"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
