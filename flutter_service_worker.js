'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3695303557b975c397fb22ca9f71bda5",
"/": "3695303557b975c397fb22ca9f71bda5",
"main.dart.js": "b777b7b7e18bb967fbc38e4f77bbc66d",
"favicon.png": "862cc37f2e11c4f708fb1c04a327f3d0",
"icons/Icon-192.png": "ca81c06bb949f779399b36abe9b546f3",
"icons/Icon-512.png": "e41272d6383a2d448eef462146462e7c",
"manifest.json": "a344eeb55c30fa51135f7d7d3c7558f7",
".git/config": "388218ee84c4c0973cf8342140b1af8b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/66/a18002d47d5de1b4fb495de18d69c9519ce395": "68f4121b01a80800ad68c7760f282b01",
".git/objects/66/8dc0732a76bdf5bbc2bf3e676cd06a432f8bfd": "5aa4fccdbeca2dc46a7be004487f67c8",
".git/objects/57/ee8e06dcd30b4bfbed7f8ef4f0a4c05a2712e4": "a86ec34338a425201fac46e8b8002819",
".git/objects/3b/12b2a4e27294c718155f921986dcdac432bfa9": "eb025c470625ce458cc80b470ec462d1",
".git/objects/04/5af0cbc9cf2f2c2479cb25aad5b77749916bf0": "9b5b1cf7344027034300d39e78ce9397",
".git/objects/3c/9a7769a275d6e72157aa9037b76abdab7de88a": "a7239a7c8f278fa8e8e3eff913ebfc1e",
".git/objects/60/af0cf8f3966fd6b3ce19e4637c1604a5d9de8f": "8abcc1ebefa385880c2da67b00d0b77c",
".git/objects/ad/f908dde8d7cc7f82834c36c6529f62dbc22abe": "8a5ddb96d562b534715003feea0099c5",
".git/objects/d0/75aa3329331bd127fc6df22517c9ee55b9842b": "1c57114f62b6f8c3b54f693ba6d391fb",
".git/objects/a2/ed4cd6238bd8bf5cc0bcf13c094fa4b24df586": "67b50ceea734edac3333441fac57147c",
".git/objects/a2/fbb0588956f224b0d7432f89be5a6cb1152754": "2db334f517a1effb36bd4e7c9a074dae",
".git/objects/e5/402e114941cf897659e06a3cb5a49bdee1e291": "ec0d8667edd316ebe4fd27316ba5d930",
".git/objects/e5/a46a4a7022aa4f888a020750468325718b01d1": "08353da1e1b7e0cdf02cad92bb1c7744",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/87/29a758ea2094b9efad0c56b6966e0b07886bcc": "2de2084c9afd00ffbed3ab60a465f343",
".git/objects/74/7f56cfe31e49d537d428334035246de297f04e": "e4b4c782394c978857dce5223bf09dec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/1801ae41a74933baaedde70b5b9758830d4279": "0fd63496650af1088ec87afb12b9e04b",
".git/objects/4d/27d39214baeac22a491e470ec5f0972e60eeb1": "c93ad35e4586c6b92d54110176045339",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/44/6720417e73d3c7e91dbefcbcd4e5b031a10f53": "0333cd8ca1b27ffc9897bc5bbaa1d84b",
".git/objects/2a/a9bb23afcaf2fa225e87b072be29ad1a86a83d": "4edaac7c7d399bdbe40b099490db02c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/228d5e2b722e0d85086f5040f0d80ccec69e5a": "69b67a86895e1575e4822fc3dfee4860",
".git/objects/30/8c87c9739f9b3cff11ec786fe903324b2e59e3": "a1970c70448e94ecae7eb21af1cb9e34",
".git/objects/30/9d8affd67eeb611f70837f8e4946c384c3a1d1": "0c4ba11234a7510a5195e7b1601104cc",
".git/objects/08/1ac580c33eda6156085946baee076e1f80f343": "4d4a1b3b386e323fce1182e5f201e555",
".git/objects/52/27820e4c9edbb8eebe8e7089c28497a7804249": "cfb5b4229539bb88af33c2f7ae827f7f",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a0/4fa3f7a011c547074827edf2d6b91c6bf884aa": "c7599befe1a3b68f223e9cfa659287e5",
".git/objects/b8/ce9e3254bb069f1ffc44d3e6cc289395a8b5e5": "27843b16aea3056b2203a760a21e6e47",
".git/objects/aa/c65ef23ce8b55694447e30940319a84e51cdb4": "50928a21daf8ced28a8fe0ac3f6a034f",
".git/objects/b7/1749dd08ca42764e34cc4fbbcccd551f1475ba": "4fc526d6f7877bcd39440c128ec75f48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e1/dcccc39e5ace23cf186445e151204b6897ace1": "bd1020c25fbae8d85f08d7662d98a94b",
".git/objects/e6/aa08fbf687729e9bbc5f59c69627345975b2e2": "d32efd2151227a4910368cca5608af92",
".git/objects/ff/ad72c7e9f5b60e9a026e9b0ba33fe337bb3d1a": "98d402f0a598c8c693e5bf2ee95a1f1f",
".git/objects/79/df6a492c404917823ff0917fdc1a14e4f91e60": "a5afd0b2cbb9fbd001e1fdd0c001ae99",
".git/objects/1e/65687842199333be8cf62a1824c94d2a696d3c": "384856efc91a8a9df2af833020865e9d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/faac9c66604c32d687bac3bf2be2c111f7a206": "d2f2dcd2954139af4e806b9a213141f2",
".git/objects/1c/8750239daae7a8226e1098d86567bc2be98221": "3ad202ce113393f3adf4655020a34c8c",
".git/objects/78/865d39cb58c119acece1be130941fdd24f9284": "6a23bc270e7f03b605dd98b06a1b6518",
".git/objects/7a/5e595830f463c382f5f87b85367ea27280737a": "983c480384361a45ce222cbf31c6ea79",
".git/objects/22/66b7664a15c2aea63b1cadb73a413763d083f4": "475daa592ceedb074aa8caf4a3393914",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "a29e69f59beba2c9d4d8e7ac5db373e2",
".git/logs/refs/heads/master": "a29e69f59beba2c9d4d8e7ac5db373e2",
".git/logs/refs/remotes/origin/master": "7aa5ff877b83d3a8f1d2ba232b28e8ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "57dc768fbfdb62ebdeec66237c30cfd1",
".git/refs/remotes/origin/master": "57dc768fbfdb62ebdeec66237c30cfd1",
".git/index": "2702ac921ebb2bb3ffabe726b3f6159f",
".git/COMMIT_EDITMSG": "ff1e3ba0b7fef8703942952daf1843f2",
"assets/AssetManifest.json": "ccc8074672de8735fc1899f6f91168a3",
"assets/NOTICES": "d59752f472cd72937f73849d93ecf0e2",
"assets/FontManifest.json": "52c5f929808408fd726a4fe791c6db65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/Tajawal-Bold.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/fonts/Tajawal-Regular.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/l_icon.png": "3dec37b86c070bdcf34e60ae7bcf12b3",
"assets/assets/9kah_end.png": "a90349a3ccc96669430895220c48ea67"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
