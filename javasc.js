$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
}); 

const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.to(".text",{y:"0%", duration: 1.5, stagger: 0.25});
tl.to(".slider",{y:"-200%", duration:2.5, delay:0.5});
tl.to(".intro",{y:"-200%", duration: 2},"-=2");
tl.fromTo("nav",{opacity:0},{opacity:1, duration: 1},"-=1")
tl.fromTo(".entry_content",{opacity:0},{opacity:1, duration: 1},"-=1")