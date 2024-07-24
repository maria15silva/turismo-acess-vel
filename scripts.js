document.addEventListener('DOMContentLoaded', () => {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    let fontSize = 16;

    increaseFontButton.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
    });

    decreaseFontButton.addEventListener('click', () => {
        fontSize -= 2;
        document.body.style.fontSize = `${fontSize}px`;
    });
});

document.getElementById('color-filter').addEventListener('change', function() {
    const filterClass = this.value;

    const images = document.querySelectorAll('.filter-image');

    images.forEach(img => {
        img.className = 'filter-image';

        if (filterClass !== 'default') {
            img.classList.add(filterClass);
        }
    });
});
