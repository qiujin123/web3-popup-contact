var formAnimationSpeed = 0.5;
var formAnimation = gsap.timeline();
gsap.set(".input",{transformOrigin:"right center"});
formAnimation.from(".input",{duration: formAnimationSpeed, alpha: 0, x: 100}, "inputAnimation");