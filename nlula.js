(function () {
  //nLula
  var self = {
    nLulaImgs: [
      "https://www.camara.leg.br/internet/deputado/bandep/139289.jpgmaior.jpg",
      "https://s2-oglobo.glbimg.com/XDXqG739NzDGVH0XG2z-gW-DLRc=/0x36:334x585/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/S/t/DHWvRyT4mP2Vfwab5LUQ/michelle.png",
      "https://i.abcnewsfe.com/a/26b28a01-30f1-400e-9eec-5420f85e81e4/lula-da-silva-03-gty-jt-221101_1667326187412_hpEmbed_1x1.jpg",
      "https://www.tvparaguacu.com.br/uploads/noticias/9236330102022200434.jpeg",
      "https://www.infomoney.com.br/wp-content/uploads/2025/10/2025-10-08T204434Z_840036570_RC2V7HAULNY0_RTRMADP_3_BRAZIL-POLITICS.jpg",
      "https://imagens.ebc.com.br/xgcLIMWKmr1-wPH4-E5xYRJYT7M=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/02/19/cimeira-brasil-portugal_mcamgo_abr_19022025-13.jpg",
      "https://s2-g1.glbimg.com/8RIXcNHy5TmCEMinzjgY9nMObz8=/0x0:4200x2800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/M/k/LughgKR7iLukBYKpoLjA/fta20221012449.jpg",
      "https://www.gp1.com.br/media/image_bank/2025/1/luiz-inacio-lula-da-silva-presidente-da-republicanone.jpg.1200x0_q95_crop.webp",
      "https://www.gazetadigital.com.br/uploads/webdisco/2015/10/05/jpg/588x441/67e7b632d101aa07cae508f0edf2aea0.jpg",
      "https://i.pinimg.com/736x/6a/3e/59/6a3e5969ba5f7a0e06dcfc81c2a96c62.jpg",
      "https://i.pinimg.com/564x/6d/9f/d9/6d9fd959e35cfe5afadcee2d11722448.jpg",
      "https://static.poder360.com.br/2022/05/Lula-848x477.jpeg",
      "https://platobr.com.br/wp-content/uploads/2025/12/54976007733-cae59bb2c2-o-990x557.jpg.webp?x34876",
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJkdTA0cmN5d3JiY3Nrd29ramloemliNDBsdWtuZno3ZHZuZHQ0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tOJCssEXXsYlkIC0v8/giphy.gif",
      "https://imagens.ebc.com.br/UelDcSzFgpB01kns-2WJVOXSWxM=/1024x768/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/2025/06/03/03062025-pzzb2013.jpg",
      "https://assets.brasildefato.com.br/2025/01/image_processing20241230-3367037-9b6xrv.webp",
      "https://www.infomoney.com.br/wp-content/uploads/2024/10/2024-10-06T142043Z_1_LYNXMPEK95052_RTROPTP_4_BRAZIL-GAMBLING.jpg",
      "https://assets.brasildefato.com.br/2025/12/03062025-pzzb2009.webp",
      "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2025/08/1754430745.jpg",
      "https://www.colegioweb.com.br/wp-content/uploads/2013/12/Luiz-Inacio-Lula-da-Silva.jpg",
      "https://www.reinodegaston.com/wp-content/uploads/2022/11/97880950_Brazilian-former-President-2003-2011-Luiz-Inacio-Lula-da-Silva-gestures-as-he-speaks-du.jpg",
      "https://lula.com.br/wp-content/uploads/2022/10/209b9246-FIGURINHA-8.gif",
      "https://lula.com.br/wp-content/uploads/2022/10/593c5e2f-FIGURINHA-6.gif",
      "https://lula.com.br/wp-content/uploads/2021/10/EDITADAS_0017_25.jpg",
      "https://conteudo.imguol.com.br/c/entretenimento/73/2023/04/28/sao-bernardo-do-campo-sp-01051986luiz-inacio-lula-da-silva-discursa-para-trabalhadores-no-1-de-maio-dia-do-trabalhador-em-sao-bernardo-do-campo-sp-1682707699459_v2_4x3.jpg",
      "https://f.i.uol.com.br/folha/mundo/images/1701926.jpeg",
    ],
    // Helper to get random image
    getRandomImage: function() {
      return self.nLulaImgs[Math.floor(Math.random() * self.nLulaImgs.length)];
    },

    shouldReplace: function() {
        return Math.random() * 100 < self.probability;
    },

    replaceImage: function (item) {
      //Skip if image is already replaced
      if (self.nLulaImgs.includes(item.src)) return;

      // Check probability
      if (!self.shouldReplace()) return;

      var h = item.clientHeight;
      var w = item.clientWidth;

      //If image loaded and has dimensions
      if (h > 0 && w > 0) {
        //Replace
        item.style.width = w + "px";
        item.style.height = h + "px";
        item.src = self.getRandomImage();
      } else {
        //Replace when loaded
        //Avoid adding multiple listeners
        if (!item.dataset.nlulaListening) {
            item.dataset.nlulaListening = "true";
            item.addEventListener("load", function () {
              //Check again
              if (self.nLulaImgs.includes(item.src)) return;
              
              // Check probability again for late loaded images? 
              // Maybe not, to be consistent. But let's keep it simple.
              if (!self.shouldReplace()) return;

              var h = item.clientHeight;
              var w = item.clientWidth;
              if (h > 0 && w > 0) {
                item.style.width = w + "px";
                item.style.height = h + "px";
                item.src = self.getRandomImage();
              }
            }, { once: true });
        }
      }
    },

    observe: function() {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node) {
              if (node.nodeType === 1) { // ELEMENT_NODE
                if (node.tagName === 'IMG') {
                  self.replaceImage(node);
                }
                // Also check for images inside the added node
                if (node.querySelectorAll) {
                    var imgs = node.querySelectorAll("img");
                    imgs.forEach(function(img) {
                        self.replaceImage(img);
                    });
                }
              }
            });
          } else if (mutation.type === 'attributes') {
            if (mutation.target.tagName === 'IMG') {
              self.replaceImage(mutation.target);
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['src']
      });
    },

    init: function() {
      // Load settings
      chrome.storage.sync.get({
        enabled: true,
        customImages: '',
        probability: 100,
        siteMode: 'all',
        allowedSites: ''
      }, function(items) {
        if (!items.enabled) return;

        // Check site filter
        if (items.siteMode === 'specific') {
            var currentHost = window.location.hostname;
            var allowed = false;
            if (items.allowedSites) {
                var sites = items.allowedSites.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
                for (var i = 0; i < sites.length; i++) {
                    if (currentHost.includes(sites[i])) {
                        allowed = true;
                        break;
                    }
                }
            }
            if (!allowed) return;
        }

        self.probability = items.probability;

        // Add custom images if any
        if (items.customImages) {
          var customList = items.customImages.split('\n').map(function(s) { return s.trim(); }).filter(function(s) { return s.length > 0; });
          self.nLulaImgs = self.nLulaImgs.concat(customList);
        }

        //Initial replace
        var imgs = document.querySelectorAll("img");
        imgs.forEach(function (item) {
          self.replaceImage(item);
        });
        
        //Start observing
        self.observe();
      });
    }
  };

  //Run on ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", self.init);
  } else {
    self.init();
  }
})();
