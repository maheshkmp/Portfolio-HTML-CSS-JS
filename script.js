const portfolioItems = [
    {
        title: 'CRUD application with Django',
        description: 'An individual Project done by self learning. Design the CRM Application for Create, Read, Update and Delete the customer records of with using Python, Django, HTML5 and CSS',
        image: 'Images/crud.png',
        link: 'https://github.com/maheshkmp/CRUD_applicaton'
    },
    {
        title: 'Learning Management System with Django',
        description: 'I am currently working on this individual project, engaging in self-learning to design a Learning Management System (LMS) tailored for school students, parents, and teachers. The project utilizes Python and Django for backend development, while HTML5 and CSS are employed for frontend design. Throughout this endeavor, I am focusing on incorporating best practices and concepts such as Object-Oriented Programming (OOP) principles to ensure robust and efficient system architecture.',
        image: 'Images/lms.jpg',
        link: 'https://github.com/maheshkmp/LMS'
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
