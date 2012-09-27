function update_turn_count(count) {
  chrome.browserAction.setBadgeText({text:String(count)});
}

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: "http://warfish.net/war/play/?f=8" })
});

var warfish = jQuery.jWarfish({on_turn_update: update_turn_count});
