var formAnimation = gsap.timeline();

gsap.registerPlugin(MotionPathPlugin);

gsap.set(".input",{transformOrigin: "left center", alpha:1});

let myPath = document.querySelector("#input-path");

formAnimation.from(".main-text",{
    duration:1,
    y:-100,
    alpha:0,
    stagger:0.1
}, "formAnimation")

.from(".input", {
    motionPath: {
        path: myPath,
        autoRotate: true
    },
    duration: 1.5,
    ease: "power1.inOut",
    alpha:0,
    borderBottom:"2px transparent",
    stagger:0.1
}, "formAnimation")
;