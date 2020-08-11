gsap.registerPlugin(MotionPathPlugin);


var formAnimationTimeline = gsap.timeline();

// gsap.set("#input-path",{transformOrigin: "center"});
gsap.set(".input",{transformOrigin: "left center", alpha:1});

let namePath = document.querySelector("#name-path");
let emailPath = document.querySelector("#email-path");
let messagePath = document.querySelector("#message-path");

formAnimationTimeline.from(".main-text",{
    duration:1,
    y:"-=100",
    alpha:0,
    stagger:0.1
}, "formAnimation")

.from("#name", {
    motionPath: {
        path: namePath,
        autoRotate: true,
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
