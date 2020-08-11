var XAnimationTimeline = gsap.timeline({paused:true});
XAnimationTimeline.to("#X",{duration: 0.25, rotation:90}, "animateX")

$("#X").on("mouseenter", function(){
    // console.log("mouse enter");
    XAnimationTimeline.play("animateX");
});
$("#X").on("mouseleave", function(){
    // console.log("mouse enter");
    XAnimationTimeline.reverse("animateX");
}
);