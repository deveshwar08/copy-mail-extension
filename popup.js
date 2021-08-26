const ta = document.getElementById('ta');
ta.value = '';
ta.focus();
document.execCommand('paste');
function startBackground(){
    ta.value = '';
    ta.focus();
    document.execCommand('paste');
    const clipboardContent = ta.value;
    if(localStorage.getItem('Mail')){
        const email = localStorage.getItem('Mail');
        const res = fetch('http://localhost:2000/send-mail',{
            method: "POST",
            body: JSON.stringify({clipboardContent, email}),
            headers: {"Content-Type": "application/json"}
        });
    }
}

const form = document.querySelector("#change-email");
form.addEventListener('submit',e => {
    e.preventDefault();
    localStorage.setItem('Mail', form.email.value);
});

const btn = document.getElementById('mail-clipboard');
btn.addEventListener('click', startBackground);