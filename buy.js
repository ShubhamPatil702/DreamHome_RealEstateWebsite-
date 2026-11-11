function filterProperties() {
    let input = document.getElementById('search-input').value.toLowerCase();
    let properties = document.querySelectorAll('.property');

    properties.forEach(property => {
        let type = property.getAttribute('data-type');
        if (type.includes(input) || input === '') {
            property.style.display = 'block';
        } else {
            property.style.display = 'none';
        }
    });
}
