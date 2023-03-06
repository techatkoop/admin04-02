'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3a08fbdcdf265d8c16dbabf69a33eaf5",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c15a652f60404b314bab9dfa89ce448d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "94fd7d8ccadfe2ece276fc878227beee",
".git/logs/refs/heads/master": "94fd7d8ccadfe2ece276fc878227beee",
".git/objects/04/4c49850d2efede888b906a303147b85186cc86": "8fed5029936055da062216e5dae5ab40",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/8f46f0e0a05437ac4eed86fa4d502e32bb5fb7": "b44954dad89a8ebddaee646c09fee865",
".git/objects/12/cdd998646aad28b4deda0a6440980848bd9823": "7179b1d8f7212de4539cb0918bae2f5b",
".git/objects/14/527b9e77a7b80b66cf1016ea53bc5caef3c2d3": "923378bc4e274fe6584e32910702fc0e",
".git/objects/16/ccd97ab9ae631d915f63ac9d071e10b0c52ca7": "e39a690dfd4b86708d80498a8bfba893",
".git/objects/1a/062b802c521bf1952c0b19fdbaedacf7348eff": "fc9a8c2d4574c4ac68c6f0499e432902",
".git/objects/1a/75cc5a1140bcb2eb92e88014060d7bb0045a5a": "fed073203025d04bead839f48305bf67",
".git/objects/1a/9a46f212463e70655802a852aefc8d878587a0": "f167b5bff3e80b1ed5d3ecfb37b49b0e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/21/1448eb7f68fef34d584529269456de66c05b3a": "df2ec3894cd93148f85ef99f52f207cd",
".git/objects/26/768445223170229c7b27821197cb31f86516f5": "91c70b9dafa442234b86417f4d22728a",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/1645420d41909e7c8e084c7d4254d393dd4bda": "02b7a0b7197e8b0a002a261cd30d27e6",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/cb1960f9edcde81ba973d6dc777a0357e0bfbf": "2694391d75fcb4d1eff00b8816f1084f",
".git/objects/36/ca87d694120325aab8ee930de89a08a205731b": "55eda84267997bcdd78fa6101744ab54",
".git/objects/39/15b6db0f28da8d3dae845869b4c1d3ee304bf5": "f4c93c3ec4ed99c0c9abc321808fdb2a",
".git/objects/39/f511639a7d82f89514ac019ac5df22a9f5ca5d": "fc53cd853c22d995ecd8668df064d538",
".git/objects/3a/a9f9af0087b81632095d5c01b291b73caa6c7d": "bf84612a7a00afb97ad6b5d8f733e5b3",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/811ae472326431f088e3f57ed51367dc87b134": "8c9bc3308ed99ac518f8608c72b093bb",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/0b0f35baf66e2a4555ff0ef05ae546290be45d": "fc0aca9dbe77c10164422ae055ca3848",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/31bd48f3ee60f5dba21999740153bf0b85ca3d": "981acb14bcbecfe0001e307ae785d947",
".git/objects/45/376e44737218ad88df7db24118102f2a6aaa30": "2211b190d83c9f8c2252e5ccdd393bf6",
".git/objects/45/3be162d816c84cb05453f346fa60ae599584b7": "5bc35af11a6b566999277942a77e068c",
".git/objects/45/dc8a20658bd09ecb8ca1c88f94fe80cc4ca286": "3777040b10a836277a4dcd49b2f159fa",
".git/objects/49/e7b6bb4d3a9f4f5d8387d9f53130008b50198d": "9408c027c50e4313b5961c5b1c54e920",
".git/objects/4a/a5f6dbdd9b7134cf715cce7929693e3bf4b9c0": "249290424bff6884a22036e010ab9089",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/8969b265921fbcad2eb6c067bb7fc883900422": "9e0a375b08887193461f0ac30c0b5703",
".git/objects/53/bc0cfa93ef397d4b9342cd32ba2d408c452908": "b0f8494813233f8df03f0c8d3a1eb5ba",
".git/objects/5b/0606982196b7ff9e2d385251f3c2c5a32b6380": "5c36146a5c9e2eb7ec8546677abe8868",
".git/objects/5f/26f863c552174faad9ce81360119f7483d37d9": "e77648a761933f8f547f32cba2878c11",
".git/objects/5f/8e501231ad1a19f02dcbd211e3dd0ede146bc1": "a5fdcc8720eae1aad511fadc6c7414de",
".git/objects/60/965a205ede8596c5c3b96e9055634c63ef278e": "0fc7be9d52599af00a6a67a5561f018c",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/63/1630edbe644f9b21b5e970e5bf8b128bf77489": "b9c2d8aae3eb9f72a419db007b9df113",
".git/objects/64/36d45555e21fb85a236f8bed6fce430f48130b": "a5ee3886fc1eb3395b171de0f8c2b98f",
".git/objects/67/ce63ef93324523111aafc13a160baff69a59c8": "c5647309c6fc3019195bbde0db1fd82f",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/e73e3de49e3497eebd6889b5b4895c93022362": "2315d25289f104a4bb9950c050a975ac",
".git/objects/6a/2c7e028216423d14869fdffc86647678b79253": "4bf061f2dfed4a72a4fdaff47244c00d",
".git/objects/6b/6215d2f66fd1489c5caab7e39bf4516a026b1a": "a7df0bcf425caa9ff749e50b3ad7b0a3",
".git/objects/6c/b0c7b175d581cc5d5783a385bb7c74df1a1b92": "0ff68378e6107e35cd3543d45cb81d22",
".git/objects/72/3e6ed97936b9ce2e1825f2e84be1dc37d28110": "f43c6ea78aa84e7850622da9614f5a54",
".git/objects/76/8acdcb85745f7f9b8ae5e772edd59346210e91": "b2b8908cdb5213c3f549f2a22b227f50",
".git/objects/77/81d0614e002dd39259c14b0159a9497a7b4d49": "ca342b3276f4e1de760aa3d3b8e91bc1",
".git/objects/78/8df0828a30c7202e351dab19d345dddf417e95": "1bc1edd8a24c7dd89f93eadb229d0726",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/83/4974b5927af220b2a38eae4c4ba68ccc4ce1ae": "c75005a2d6be41f41277145c039fab34",
".git/objects/89/5bbe96f7049ff1a7f535b47e7b2947e7e959d3": "3ea8cef7a516b4d91015e3191ac68d77",
".git/objects/8a/e514205dce2e103efaf9df62bbde9c78d1af2b": "b75d1b82afad6d9c59bda283c988529c",
".git/objects/8d/f44127b7492868fb70c619cc84250da4f2e970": "51c68f2a997fa0cce441f9cd9d8a0862",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/d18cc3e3f23e409e1b77c6c14f8489ba8bf886": "1bd714d461431f5181e012d90bd95dd6",
".git/objects/91/f81fb1091caec705b94c1e2884a690b16f4198": "b6b0b1b1ba6c802f7d39c315fe635bac",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9d/8db12293e47c09a4fd1f75587d88e31720c28e": "d9bdb90484339a807b77973e2697f7e1",
".git/objects/9e/de05b52828243c9c883005a8fecaffb612dd4c": "a1633c23575c401b3a27051cf021a86f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/a56c3e0011d28c7fbc43595b08c0c4a6fef5c0": "d32233f61d7053c6be45f9e190ec39ba",
".git/objects/a2/5a2c5733757f1222de34c28c08527c6d1cc022": "eda9189dca000708e5f2264c30c4f2fa",
".git/objects/a8/12b364a075d009a12a47bfd4bd60569bebd956": "8823d32009bab4ec8227f9c485f8a365",
".git/objects/a8/95144e5dc756cba0a65bc39e22353936490621": "774a233abbb8fcc5b9d6a2d1ea602ee4",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/c4343963d90f529724427557428d930b568d4d": "0397eeeb95e31749a29805f0af02e408",
".git/objects/b3/1dd1d2161846d97e4b8bc98925739f66b51469": "e270f9e5d423a076296d902de03e3126",
".git/objects/b3/2f2936bd19f7c53ed0aa46fc7b51709f9bae11": "6a5385902ba822d8eb5cc02f6d77220b",
".git/objects/b3/74bb321f876e4975e72ebf3b61f89a92c68452": "b228083cd95652f4b653a0e8cca74cf7",
".git/objects/b5/37f4326ff5ae101c3a5da3b8cf17b288c285d8": "56dca4a82787b2c936e0ef114abbe1ca",
".git/objects/b5/5ead27e3739b4242b52ec540e6e7540c98dc84": "1ee274ef4dcaca136a672957f7500816",
".git/objects/b7/df6b6fb0f13b813b850d93733e076859f15d36": "2bf9ece125c75af278f16729939edef3",
".git/objects/b8/bb82bd315af8544eb912c8e88782304b15dd12": "467952d838cd35fb02315794c9a07a31",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/dd1cbd058fae6d18031ed9617219c84e8386c1": "ef477785b9e39414699a6fe0b31c274f",
".git/objects/bb/9aa4b52edc1d76696cbf71f6d4b5d56c753f73": "83ba133ea7044bd552711179a0b56403",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bc/fbfbcfdf804c26c673376df5169d8b51d516b9": "6d9571c49fe03dc99a2efdad59ba0eac",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c2/7b211ab2dd19f9fa06ed6151643a35030f9706": "da1da903db15cff682ab0de648010321",
".git/objects/c3/ba285c435597e1549a4723aed74efa137f2847": "c77150a1aeeb2d086a9942922bb5c320",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/6b1ad70a0f424c390d158f4555d33cdf8393ab": "f8e6c5b27abe2272e508a5d31609f981",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/89073ed8297505a747ce7c1714e5c5ca2b5d12": "56bcf5225a39662e3bb147dfceec6229",
".git/objects/d4/27144e7cfd89bf4cd3af8c809d34c963bceb80": "498972cc503af93a515cd53882434db1",
".git/objects/d6/da3476b19c1574077014bc51deaf6c2510e23b": "42179d350eb6baee0703cc807af76004",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/e644d226495e9f3eba0bc5ce5c186b9264fb18": "613deb133ebdc925731e259b4b5df2b2",
".git/objects/d8/f9f501c9917fca3c9ab84e2f012c922e92fb5b": "11a909f6e40a52251ca7d235a129b795",
".git/objects/d9/685e051f4ad79da31452776dc6f5b8deb7de93": "201b105b35677bbc59a3f7266ec7dfa1",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/e1bcc84f286a875f0615f46bdcc660d9e41d95": "9391ff382c34c8ad45fbb4653f1d6639",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/e3923222747b98815e17aecc2011584e30bee8": "f8f6ba213d866d71df999c3c4936abea",
".git/objects/e1/c6e13f3cfbd1316ed9ff538513ae328bca74ea": "c49fc015aac99b7d3cb2b5bab2b639b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/dfd11e839fea403a088cf4c7ab39d2b76b3aa8": "867fa1c48a8b7984d1f65a41ef054525",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/665ac083965dfbe1dd05ccd3d55715d867ac3c": "dac6f95b172321c2ba3b519b692a1d23",
".git/objects/e8/7b936cb1d045d82f5300e6859005e5d43b78f6": "6c6514c886d66c6e6a961c8cc3c93fab",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/ec/aaad80af47de543078525a6575a9059dd1d5d7": "8826d37fd05d3b79786a1f577cc281d1",
".git/objects/ee/97537247e00b9bf05a070548555adf48a8e411": "2f05dcfce52d0a639317a709ed82cb96",
".git/objects/ef/e59f149e2a0a6a05330697e270d7047274d596": "77f3ac920b684876dfb569be4b2988f2",
".git/objects/f1/e1972cdf93cca24b3cd6776ffce7f62748ac31": "73e8919fd2ae206fea1757abb498495b",
".git/objects/f4/b51b6960bb1b1a87e85c31d1848ce68b2e8c1b": "d77fe8c84d09f4fe7befb55acb28ea0d",
".git/objects/f5/d6bb209f8e655cb4d9e46b7c287cf5ea4f5297": "37e88199b2a5bbfdfe0320f9517e9ef1",
".git/objects/f7/b9f15cda99da3170abb56753876cd26417323e": "6be2eb58d6e7b2bcc6bc01ad6ab04d02",
".git/objects/fb/6dedf2137147390883c1c321ad2025242d7bef": "25e400fd38444b7e99d57a15759235d4",
".git/objects/fc/556446beabeecd47097607d5f823265e47a003": "52b24b4bcba23d28f6e5e19f52ef5aa7",
".git/objects/fc/a3e13ce2f48416ed3d14fd8a62317a01f2a187": "4a2539e8e9bbf8a64a5a39ebe738c1ff",
".git/objects/fc/d084536bb3560050545f159ac4c5ff7ea12802": "d7c2bdc4af347f58b8666defc51ff09c",
".git/objects/ff/f2227214be1173873d322a44db4b2ae139ea0a": "d93210de80b2c9721407e64da4db38af",
".git/refs/heads/master": "28612bee627e869547c2e80112c0e3ec",
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
"index.html": "3fe5efc72f136ca79b70509c9dd2a3f2",
"/": "3fe5efc72f136ca79b70509c9dd2a3f2",
"main.dart.js": "0379503996f88e63e2d7b513779c2393",
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
