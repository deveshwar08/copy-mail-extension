console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    const ta = document.getElementById('ta');
    ta.value = '';
    ta.focus();
    document.execCommand('paste');
    const clipboardContent = ta.value;
    const res = fetch('http://localhost:2000/send-mail',{
        method: "POST",
        body: JSON.stringify({clipboardContent}),
        headers: {"Content-Type": "application/json"}
    });
}