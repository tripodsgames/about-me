import 'vanilla-tilt';
import "./main.scss";

const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

const intersectionCallback: IntersectionObserverCallback = (entries) => entries
    .forEach(entry => {
        if (!entry.isIntersecting)
            return;

        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
    });

const observer = new IntersectionObserver(intersectionCallback, options);

document
    .querySelectorAll('.lazy')
    .forEach(element => observer.observe(element));
