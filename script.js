const portfolioItems = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'project1.jpg',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        image: 'project2.jpg',
        link: '#'
    },
    // Add more portfolio items as needed
];

// Function to generate HTML for portfolio items
function generatePortfolioItems() {
    const portfolioContainer = document.querySelector('.portfolio-items');
    portfolioContainer.innerHTML = '';

    portfolioItems.forEach(item => {
        const portfolioHTML = `
            <div class="portfolio-item">
                <h3>${item.title}</h3>
                <img src="${item.image}" alt="${item.title}">
                <p>${item.description}</p>
                <a href="${item.link}" target="_blank">View Project</a>
            </div>
        `;
        portfolioContainer.innerHTML += portfolioHTML;
    });
}

// Call the function to generate portfolio items when the page loads
document.addEventListener('DOMContentLoaded', generatePortfolioItems);

// Example function to handle form submission (replace with actual functionality)
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server, show success message)
    alert('Form submitted!'); // Example alert for demo purposes
    contactForm.reset(); // Reset the form after submission
});
