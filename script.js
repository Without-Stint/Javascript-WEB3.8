let divs = document.querySelectorAll('div');
let link = document.querySelector('a');

for (let i=0; i<divs.length; i++){
    divs[i].addEventListener('click', function(event){
        event.stopPropagation();
        console.log(this.getAttribute('id'))
    });
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event){
    event.preventDefault();
    let div = divs[0]
    if (div.style.display == 'none') {
        div.style.display = 'flex'
    } else {
        div.style.display = 'none'
    }

    console.log(div.style.display)
}