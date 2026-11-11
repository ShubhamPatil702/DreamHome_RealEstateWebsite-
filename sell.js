document.getElementById('sell-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let title = this.querySelector('input[placeholder="Property Title"]').value;
    let location = this.querySelector('input[placeholder="Location"]').value;
    let price = this.querySelector('input[placeholder="Price ($)"]').value;
    let description = this.querySelector('textarea').value;
    
    if (title && location && price && description) {
        alert('Property submitted successfully!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
