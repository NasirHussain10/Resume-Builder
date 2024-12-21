// site title animation
// gsap.fromTo(".site-title", {
//     scale : 5.2,
//     y : -180
// }, {
//     scale :1,
//     y: 0,
//     duration :1,
//     scrollTrigger : {
//         trigger : ".site-title",
//         end: "bottom top",
//         invalidateOnRefresh : true,
//         scrub : 2,
//         ease : "expoScale(0.5,7,none)",
//     }
// })

const discover_tl = gsap.timeline({
    scrollTrigger : {
        trigger : ".slide",
        start : "top 20%",
        scrub :2,
        ease : "ease"
    }
})
discover_tl.to(".slide1", {
    y :180,
    duration :1

});
discover_tl.to(".slide2", {
    y :180,
    duration :1

});
discover_tl.to(".slide3", {
    y :180,
    duration :1

});
discover_tl.to(".slide4", {
    y :180,
    duration :1

});