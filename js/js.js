let link = document.querySelectorAll("li.nav-item.me-3.pe-2.ps-2");
console.log(link);

link.forEach((a) => {
    a.addEventListener('mouseover', () =>{
        link.forEach((b) =>{
            b.classList.remove("hover");
        });
        a.classList.add('hover');
    });
});