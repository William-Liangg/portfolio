var typed = new Typed(".multiple-text", {
    strings: ["a software developer", "a college student", "an ai researcher"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});

tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#789cfb"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3,
            random: true
        },
        links: {
            enable: true,
            distance: 150,
            color: "#789cfb",
            opacity: 0.5,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            outMode: "bounce"
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onhover: { 
                enable: false,
                mode: []
            },
            onclick: { 
                enable: false,
                mode: []
            },
            resize: true
        },
        modes: {} 
    },
    retina_detect: true,
    background: {
        color: "#1f242d"
    }
});

// 1️⃣ Prevent browser from remembering scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// 2️⃣ Reset scroll position on page reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};