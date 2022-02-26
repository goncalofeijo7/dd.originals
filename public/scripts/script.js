function initForm() {
    getNavbar();
    
}

function getNavbar() {
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:4000/navbar')
        .then(res => res.text())
        .then((html) => {
            nbar.innerHTML += html
        })
        .catch(function(err) {
            alert('Ocorreu um problema...')
        })
}
