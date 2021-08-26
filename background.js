console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    const ta = document.getElementById('ta');
    console.log(ta);
    ta.focus();
    document.execCommand('paste');
    const clipboardContent = ta.value;
    console.log(clipboardContent); 
}