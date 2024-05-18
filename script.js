document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { title: "Computer Science", description: "Learn about algorithms, data structures, and more." },
        { title: "Business Administration", description: "Explore the fundamentals of business and management." },
        { title: "Graphic Design", description: "Develop your design skills with practical projects." },
    ];

    const coursesList = document.getElementById('courses-list');

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        const courseTitle = document.createElement('h3');
        courseTitle.textContent = course.title;

        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;

        courseDiv.appendChild(courseTitle);
        courseDiv.appendChild(courseDescription);

        coursesList.appendChild(courseDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}. We have received your message.`);
        contactForm.reset();
    });
});
