const ElementsFootnote = document.querySelectorAll('.footnote');


function parallax(event) {

    ElementsFootnote.forEach(footnote => {
        const navData = event.target.getAttribute('data-search-item');
        if (navData === footnote.getAttribute('data-footnote-item')) {
            footnote.style.transform = `translate(${event.clientX+20}px, ${event.clientY+20}px)`;
            footnote.style.display = 'flex';
        } else {
            footnote.style.display = "none";
        }
        console.log(ElementsFootnote);
    });
}

document.addEventListener('mousemove', (event) => {
    if (event.target.getAttribute('data-search-item')) {
        parallax(event);
    } else {
        const footnote = document.querySelectorAll('.footnote').forEach(elem => {
            elem.style.display = "none"
        });
    }
});