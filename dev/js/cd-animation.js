gsap.registerPlugin(MotionPathPlugin);


var formAnimation = gsap.timeline();

// gsap.set("#input-path",{transformOrigin: "center"});
gsap.set(".input",{transformOrigin: "left center", alpha:1});

// let inputPath = document.querySelector("#input-path");
let namePath = document.querySelector("#name-path");
let emailPath = document.querySelector("#email-path");
let messagePath = document.querySelector("#message-path");

formAnimation.from(".main-text",{
    duration:1,
    y:"-=100",
    alpha:0,
    stagger:0.1
}, "formAnimation")

// .from(".input", {
//     motionPath: {
//         path: inputPath,
//         autoRotate: true
//     },
//     duration: 1,
//     ease: "power1.inOut",
//     alpha:0,
//     borderBottom:"2px transparent",
//     stagger:0.1
// }, "formAnimation")

.from("#name", {
    motionPath: {
        path: namePath,
        autoRotate: true,
        start:0,
        end:1,
        align: namePath,
        alignOrigin: [0,0]
    },
    duration: 1,
    ease: "power1.inOut",
    alpha:0
}, "formAnimation")
.from("#email", {
    motionPath: {
        path: emailPath,
        autoRotate: true,
        start:0,
        end:1,
        align: emailPath,
        alignOrigin: [0,0]
    },
    duration: 1,
    ease: "power1.inOut",
    alpha:0
}, "formAnimation")
.from("#message", {
    motionPath: {
        path: messagePath,
        autoRotate: true,
        // start:1,
        // end:0,
        align: messagePath,
        alignOrigin: [0,0]
    },
    duration: 1,
    ease: "power1.inOut",
    alpha:0
}, "formAnimation")

.from("button",{
    duration:1,
    alpha:0
}, "formAnimation")

.from(".input",{
    duration:0.25,
    borderBottom:"transparent"
},"bottomBordersFadeIn")
;
