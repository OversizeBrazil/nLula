// Saves options to chrome.storage
function save_options() {
  var enabled = document.getElementById('enabled').checked;
  var customImages = document.getElementById('customImages').value;
  var probability = document.getElementById('probability').value;
  var siteMode = document.querySelector('input[name="siteMode"]:checked').value;
  var allowedSites = document.getElementById('allowedSites').value;
  
  chrome.storage.sync.set({
    enabled: enabled,
    customImages: customImages,
    probability: probability,
    siteMode: siteMode,
    allowedSites: allowedSites
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.style.display = 'block';
    setTimeout(function() {
      status.style.display = 'none';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    enabled: true,
    customImages: '',
    probability: 100,
    siteMode: 'all',
    allowedSites: ''
  }, function(items) {
    document.getElementById('enabled').checked = items.enabled;
    document.getElementById('customImages').value = items.customImages;
    document.getElementById('probability').value = items.probability;
    document.getElementById('probabilityValue').textContent = items.probability;
    
    var radios = document.getElementsByName('siteMode');
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === items.siteMode) {
        radios[i].checked = true;
        break;
      }
    }
    toggleSiteContainer(items.siteMode);
    
    document.getElementById('allowedSites').value = items.allowedSites;
  });
}

function toggleSiteContainer(mode) {
    var container = document.getElementById('specificSitesContainer');
    if (mode === 'specific') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

document.getElementById('probability').addEventListener('input', function(e) {
    document.getElementById('probabilityValue').textContent = e.target.value;
});

var radios = document.getElementsByName('siteMode');
for(var i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', function() {
        toggleSiteContainer(this.value);
    });
}

var quickAddBtns = document.querySelectorAll('.quick-add button');
quickAddBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var site = this.getAttribute('data-site');
        var textarea = document.getElementById('allowedSites');
        var currentVal = textarea.value.trim();
        if (currentVal.length > 0) {
            textarea.value = currentVal + '\n' + site;
        } else {
            textarea.value = site;
        }
    });
});

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
