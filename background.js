function update_turn_count(count) {
  chrome.browserAction.setBadgeText({text:String(count)});
}

var warfish = jQuery.jWarfish({on_turn_update: update_turn_count});
