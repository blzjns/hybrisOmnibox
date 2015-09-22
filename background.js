properties = {
  debugging: false,
  searchURL: "https://wiki.hybris.com/dosearchsite.action?queryString=",
  defaultURL: "https://wiki.hybris.com/",
}

//This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function (text) {
    if (properties.debugging)
      console.log('Input entered: ' + text);

    var url = text ? properties.searchURL + text : properties.defaultURL;

    if (properties.debugging)
      console.log(url)

    chrome.tabs.update({
      url: url
    });
  });
