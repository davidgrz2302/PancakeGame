'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7503c2bf7beecf6ff6cd10089483d76f",
".git/config": "e6da79cfac6b307999a017ed4e11efc2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0bec1ff41d39f734ccf72b326502b7ae",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c9e5543000c9892bb131a9c39d8d299d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f59c1621b20b8a00b06ec6e72b861b2b",
".git/logs/refs/heads/main": "dfa01d49f2341d04987eec16e039e419",
".git/logs/refs/remotes/origin/main": "c4eb2f5b3ac940b0515656447dbd1ea8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0e/1e7e9f1cfc46a315f7a4cfa76b12cdeab80cb7": "dd3131ffa1a685f923daab4f4b2acf60",
".git/objects/0f/005e51b3d183e7d8045d02e2a3c18ac85ea672": "a0282e0edf5d08a12814d0f7e9338eab",
".git/objects/10/587a661779235dd52870f2bef6298f2141508e": "4f6f82cd7b4f0676d7dd1977ff5dfd0e",
".git/objects/12/9cc11828f96ed05fe951523e38610a6cb4973a": "d012dc836fae2c6ef7b1948463fe5b35",
".git/objects/17/012e1ba3fe03b8f0adacd21e6be057d4a3d749": "c1b032ec78aae0ceaf60996ce823eb72",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/8e66a78faeeb7e93e1f9fcf5bbd0924d1e9d4a": "f00e7af1b33249d2b1166d800e304fe2",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c43f38e76f1550b2f6ec36d8564c8896737450": "fbaa00b2d1db11bc77e40373284ad6b8",
".git/objects/4b/ee24423c061b72db74edc970d0ba4558e436a2": "17bdc4fa88cce7a0c696403b81eb8332",
".git/objects/4e/c4c85e86d954509ea491cd2255f5bad3a6c5b9": "cb6f9c9de5476f7f84fc53581f8d3900",
".git/objects/52/760abc6f6699cee8ef26e90bcd36aac746da9c": "3c75075e67e8f0decffb055443d82efe",
".git/objects/54/549899e1640072061fdff19b5f13dcf27045d1": "62121287d3b020793fc32902a8bf14dd",
".git/objects/57/c4172d2130634a06e41e15dc1e6953d64e4c36": "0c8609587466492ac5ba2781baba201f",
".git/objects/59/19c3f1365c7e99bc338b16ae5aa8963a46247f": "36f396af2f6a2a5e0adf0a128e2b9c1a",
".git/objects/5b/eeb3db6e6b61f052b0fb8cd9165f1153955b20": "b9eace903ed7f73e7621b438994fc5e6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/76/afc2157e11d49b6c6103127796110b8ea74e5d": "d8a1eda0131a5310f2d24083f323541a",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/27b378877acff42b5599b797f91b76195929af": "3ab3d91f77b326ed59770191d78c598c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d0c44e4c85480263e5d51c1c81af9380a7370e": "4770e6b3f17d15864c263c7753cd4820",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/0e7b5b5b61d00341e68b32cd7096fa26b30101": "232f0fec5867b09c2fb689f3a04a2493",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/10e7fec9c234f72cc60f920580a89ae9ea55a1": "634354923d14b990fd8f20f30808d43b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/b167e279f3086755c86a4779b62a6879c576c2": "d6909689170e74dd89e8d21e4836ac06",
".git/objects/da/1337027c7832533d9201c8965fc8e6b0d9bd71": "e154960d7ad4a7ce58c7b4c8286c81d7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/38a5059c293333705cfaedc05202a6c0ad328f": "57a50dc358b1c9bc878681e5e275e737",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/eb68d1ccb6e4cc277c465e6729f73125b69844": "f7df6480c47b7667b59e508a82a5cdd9",
".git/objects/f8/427c678a65696adefb9f553c4fbd7f0d7c1ae6": "979f807932d0e9d00dfb4a09ef96a754",
".git/objects/ff/816778ddb7f4cf0f0a6c0a7019ee5d618bc32d": "1a954f875b15dd47091161368b4f114d",
".git/objects/pack/pack-ebd7938e869f96efbbdf8a690574768d484902a5.idx": "0dc4af928dfd3991045ea105d1a03407",
".git/objects/pack/pack-ebd7938e869f96efbbdf8a690574768d484902a5.pack": "d7abac5dbde121011bc30f6b639a0f87",
".git/objects/pack/pack-ebd7938e869f96efbbdf8a690574768d484902a5.rev": "e1ffb79476e0fd8457bc56dd2d960cbf",
".git/ORIG_HEAD": "9f37bf36f7bc2648f92d73f989e9139b",
".git/refs/heads/main": "8baacfff10bffbfcd0eac94ed6a16bc6",
".git/refs/remotes/origin/main": "8baacfff10bffbfcd0eac94ed6a16bc6",
"analysis_options.yaml": "66d03d7647c8e438164feaf5b922d44a",
"android/app/build.gradle": "65e30a9a92558e6b588ed615a6e4e4c4",
"android/app/src/debug/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/app/src/main/AndroidManifest.xml": "f223e611e4fc6928ed4182a4ce4895e9",
"android/app/src/main/kotlin/com/example/flutterproject/MainActivity.kt": "5b9a5290ba4a18fd59e7896e0fa13b01",
"android/app/src/main/res/drawable/launch_background.xml": "79c59c987bd2e693cd741ec3035ef383",
"android/app/src/main/res/drawable-v21/launch_background.xml": "ab00f2bfdce1a5187d1ba31e9e68b921",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "58b48ec178bde5aad76063577172ad24",
"android/app/src/main/res/values-night/styles.xml": "feddd27a2f77ef486e2b7a420b1de43d",
"android/app/src/profile/AndroidManifest.xml": "ac1dad6fec40014c3c6cbbd849a880dc",
"android/build.gradle": "8fea88f0221dc81c23b0e4c55c169ccc",
"android/gradle/wrapper/gradle-wrapper.properties": "869b43a4017378d9be13b7e3deeec192",
"android/gradle.properties": "5fc95ddf5b8ad7d23acec4c364c26487",
"android/settings.gradle": "f2bd1a19983eddeeb87a4621af74ebf4",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6fd1c90975305e39d871fdbcfdcfa142",
"assets/NOTICES": "4c9291c904d97ff80c0d4fe295b146eb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "bef3548ad617c16b4283fcdb254c45de",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0501a7a3254a4e34acd1bb430188658a",
"/": "0501a7a3254a4e34acd1bb430188658a",
"ios/Flutter/AppFrameworkInfo.plist": "5eb1ee18836d512da62e476379865f8d",
"ios/Flutter/Debug.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Flutter/Release.xcconfig": "bd6254e10068a9a3539aa9710626ac24",
"ios/Runner/AppDelegate.swift": "303ca46dbd58544be7b816861d70a27c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "c3cdf9688b604d14f2e76a8287e16167",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "770f4f65e02ca2fc57f46f4f4148d15d",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "e175e436acacf76c814d83532d0b662c",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "89e8363b3b781ee4977c3c9422b88a37",
"ios/Runner/Base.lproj/Main.storyboard": "0e0faca0bc5766e8640496223a31706a",
"ios/Runner/Info.plist": "23491ce8918194a65b3b81ca488cb641",
"ios/Runner/Runner-Bridging-Header.h": "e07862ac930ed4d8479185d52c6cc66d",
"ios/Runner.xcodeproj/project.pbxproj": "e7f2ffe53720dcf477b521bd46ce7be0",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "a54b6450d65c401d48911394f6a65bd2",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ffac881d52d43c06cc1b45b6aeabc194",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "56b1e4b1f6b3b790f471044c301e69ea",
"ios/RunnerTests/RunnerTests.swift": "a225a382d14d7b16b6f602a5c1d49331",
"lib/main.dart": "6ff6a840f0fbd2d94114f48ef180843a",
"linux/CMakeLists.txt": "386891fb067c0a5a18fc63b870e53c12",
"linux/flutter/CMakeLists.txt": "46690fb8ffaf7d227d8bc4713f31140d",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "0643b8609698e96b3abd63c210361a87",
"linux/my_application.cc": "80e4ad4658ea0129688617ddb07074f4",
"linux/my_application.h": "7bd839b67ebee22174be9f4da4521b6f",
"macos/Flutter/Flutter-Debug.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/Flutter-Release.xcconfig": "2b03faed3e462ed0ed348559e4796ed8",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "43e630f8974625a25df2af9653bb6ac4",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "5bd47c3ef1d1a261037c87fb3ddb9cfd",
"macos/Runner/Base.lproj/MainMenu.xib": "a41bc20792a7e771d7901124cdb8c835",
"macos/Runner/Configs/AppInfo.xcconfig": "6b8ac586d05b4a1edec52a76117291f1",
"macos/Runner/Configs/Debug.xcconfig": "0a7555f820f3e4371d88ec1c339d70ef",
"macos/Runner/Configs/Release.xcconfig": "d36330778580798c0d9c5a5b71501a0f",
"macos/Runner/Configs/Warnings.xcconfig": "e19c2368cf97e5f3eaf8de37cff2b341",
"macos/Runner/DebugProfile.entitlements": "6e164fc6ed6acb30c71fe12e29e49642",
"macos/Runner/Info.plist": "b945a5051bb1cca2d906ac0be98b629a",
"macos/Runner/MainFlutterWindow.swift": "4a747b1f256d62a2bbb79bd976891eb5",
"macos/Runner/Release.entitlements": "e6fde05dec64f9856d3978a4a5e4bf48",
"macos/Runner.xcodeproj/project.pbxproj": "810ff1347dab05849d1a913dbe45ba84",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "ec7513b91d3ce0e796b69ab20cb1746b",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "7053ea3423578187357b9f92d0c67fc6",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "117105d2f2ee718eb485a07574a219b6",
"macos/RunnerTests/RunnerTests.swift": "97d3a20fd20a063c192e886d1822b4a8",
"main.dart.js": "69e2e30d8ba687d327d995cf90d6bdd9",
"manifest.json": "426e98aff6b2ec0d4ed217af1f2c9847",
"pubspec.lock": "0d5d79716e040cfd14f7967131b39756",
"pubspec.yaml": "d851cd819a2fb454dfec5cfa94e10033",
"README.md": "450ca224bece1d5362a2ab4f91cd1566",
"test/widget_test.dart": "cfda8bf0472dcb65b85f61db47770229",
"version.json": "66081432269c309ded830c883fd004e2",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "979ea67f8e5a6c6a182554e18fbde068",
"web/manifest.json": "8eb215929a1a7402a036603863a947db",
"windows/CMakeLists.txt": "c11f6db140babac84fd5b4fc1a8d0f5c",
"windows/flutter/CMakeLists.txt": "0c500410e3259a9a053797dc1c28070e",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "e99a99b5cc82a168fc557eb23b8d5a96",
"windows/runner/flutter_window.cpp": "9b92b95a9eecce25e3e9d356688d0cb6",
"windows/runner/flutter_window.h": "79bea736711adda00c49419a39a4a0b4",
"windows/runner/main.cpp": "aaa3ab44e12d407bf7b588d52422b39b",
"windows/runner/resource.h": "c8f809a4f8d3f2f625e358fd90f72fee",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "81f2aed52d431763e83890f3d17da92a",
"windows/runner/Runner.rc": "dd9d6c6e932bed0e3f77ac9d3fa15b5c",
"windows/runner/utils.cpp": "9b5697b276c8ad67a02ec12ad2c09851",
"windows/runner/utils.h": "c741fb9cddbf3a62f4688b6cca39ddcc",
"windows/runner/win32_window.cpp": "928e86a2be27eca688669dce6c9177d9",
"windows/runner/win32_window.h": "5a4cf051798d7e6931ee0405a4523c8f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
