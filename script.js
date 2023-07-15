const egg = $('#egg');
const yolk = $('#yolk')
const frontEnd = $('#front-end');
const backEnd = $('#back-end');
const initialContent = $('#tools')
const skillsPage = $('#skillspage')

// egg on mouseover gets rid of back-end skills
// displays front-end skills
egg.on('mouseover', (event) => {
    const title = $('.skills-title')
    if (event) {
        event.stopPropagation();
        initialContent.css('display', 'none')
        backEnd.css('display', 'none');
        title.text("Front-End")
        frontEnd.css('display', 'inline-block');
    }
})

// yolk on mouseover gets rid of front-end skills
// displays back-end skills
yolk.on('mouseover', (event) => {
    const title = $('.skills-title')
    if (event) {
        event.stopPropagation();
        initialContent.css('display', 'none')
        frontEnd.css('display', 'none');
        title.text("Back-end")
        backEnd.css('display', 'inline-block');
    }
})

// skillsPage on mouseover gets rid or yolk/egg skills
// displays initial content
skillsPage.on('mouseover', (event) => {
    const title = $('.skills-title')
    if (event) {
        event.stopPropagation();
        backEnd.css('display', 'none');
        frontEnd.css('display', 'none');
        title.text("Tools")
        initialContent.css('display', 'inline-block')
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