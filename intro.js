/// TITLE PAGE
let tl_title = gsap.timeline({
    scrollTrigger: {
        trigger: '.cover',
        start: 'top', 
        end: '100%',
        scrub: true,
        pin: true
    }
})

tl_title.fromTo('.game-title', { opacity: 1 }, { opacity: 0, duration: 3});

// SETTING PAGE
let tl_setting= gsap.timeline({
    scrollTrigger: {
        trigger: '.setting_overview',
        start: 'top', 
        end: '100%',
        scrub: true,
        pin: true,
        end: "+=4000"
    }
})

// // temple
tl_setting.fromTo('.thetemple', { opacity: 0 }, { opacity: 1, duration: 3 });
tl_setting.fromTo('.thetemple', { opacity: 1 }, { opacity: 0, duration: 3});
// // Relics
tl_setting.fromTo('.sects', { opacity: 0 }, { opacity: 1, duration: 3 });
tl_setting.fromTo('.sects', { opacity: 1 }, { opacity: 0, duration: 3});
// // geist
tl_setting.fromTo('.geist', { opacity: 0 }, { opacity: 1 , duration: 3});
tl_setting.fromTo('.geist', { opacity: 1 }, { opacity: 0, duration: 3});
// // empire
tl_setting.fromTo('.lords', { opacity: 0 }, { opacity: 1, duration: 3 });
tl_setting.fromTo('.lords', { opacity: 1 }, { opacity: 0 , duration: 3});
// // book
tl_setting.fromTo('.book', { opacity: 0 }, { opacity: 1, duration: 3 });
tl_setting.fromTo('.book', { opacity: 1 }, { opacity: 0 , duration: 3});

// GAME OVERVIEW PAGE
let tl_game= gsap.timeline({
    scrollTrigger: {
        trigger: '.game_overview',
        start: 'top', 
        end: '100%',
        scrub: true,
        pin: true
    }
})
tl_game.fromTo('.ov1', { opacity: 0 }, { opacity: 1, duration: 1 });
tl_game.fromTo('.ov2', { opacity: 0 }, { opacity: 1, duration: 1 });
tl_game.fromTo('.ov3', { opacity: 0 }, { opacity: 1, duration: 1 });
tl_game.fromTo('.ov4', { opacity: 0 }, { opacity: 1, duration: 1 });


// ACTIONS
let tl_actions= gsap.timeline({
    scrollTrigger: {
        trigger: '.cathedral_content',
        start: 'top', 
        end: '100%',
        scrub: true,
        pin: true
    }
})