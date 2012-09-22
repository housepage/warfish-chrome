var warfish = jQuery.jWarfish({});
var polling_interval = 1000*5;

function updateCount() {
  count = count + 1;
}


function update() {
  var count = warfish.getTurnGamesCount();
  chrome.browserAction.setBadgeText({text:String(count)});

  window.setTimeout(update,polling_interval);
}

window.onload = update;
