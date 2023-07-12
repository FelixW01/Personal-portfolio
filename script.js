const egg = $('#egg');
const yolk = $('#yolk')


egg.on('click', (event) => {
    const frontEnd = $('#front-end');
    if (event) {
        frontEnd.css('visibility', 'visible');
    }
})

//Tracks the home content div, changes navbar list color
//to black when div gets out of screen.
const callback = (entries, observer) => {
    const entry = entries[0];

    // toggle class depending on if content div intersects with viewport
    const home = document.querySelector('#home');
    const skills = document.querySelector('#skills');
    const project = document.querySelector('#projects');
    const about = document.querySelector('#about');
    const contact = document.querySelector('#contact');
    home.classList.toggle('nav-link--scrolled', !entry.isIntersecting);
    skills.classList.toggle('nav-link--scrolled', !entry.isIntersecting);
    project.classList.toggle('nav-link--scrolled', !entry.isIntersecting);
    about.classList.toggle('nav-link--scrolled', !entry.isIntersecting);
    contact.classList.toggle('nav-link--scrolled', !entry.isIntersecting);
}

// options controls circumstances under which the observer's callback is invoked
const options = {
    // no root provided - by default browser viewport used to check target visibility
    // only detect if target element is fully visible or not
    threshold: [1]
};

const io = new IntersectionObserver(callback, options);

// observe content div 
const target = document.querySelector('.content');
io.observe(target);