gsap.from('.header', {
    duration:1,
    y: '-100%',
    ease:'bounce',
    delay:2
})


let tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.recwor',
        start: 'top center',
        end: 'bottom center',
        scrub:true,
        markers:false
    }
})

tl.from('.recwor', {
    x:'-100%',

})



let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: '.creative',
        start: '-150% 20%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl1.from('.creative', {
    y:'-100%'

})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.explore-button',
        start: '-300% 25%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl2.from('.explore-button', {
    x:'100%'
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: '.left1',
        start: '-50% 20%',
        end: '-30% 30%r',
        scrub:true,
        markers:false
    }
})

tl3.from('.left1', {
    x:'-100%'
})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: '.right2',
        start: '-50% 20%',
        end: '-30% 30%',
        scrub:true,
        markers:false
    }
})

tl4.from('.right2', {
    x:'100%'
})

let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: '.left3',
        start: '-50% 20%',
        end: '-30% 30%',
        scrub:true,
        markers:false
    }
})

tl5.from('.left3', {
    x:'-100%'
})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: '.wwr',
        start: '-50% 20%',
        end: '-30% 30%',
        scrub:true,
        markers:false
    }
})

tl6.from('.wwr', {
    x:'-100%',

})

let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: '.wwr2',
        start: '-50% 20%',
        end: '-30% 30%',
        scrub:true,
        markers:false
    }
})

tl7.from('.wwr2', {
    x:'-100%',

})

let tl8 = gsap.timeline({
    scrollTrigger:{
        trigger: '.wwr3',
        start: '-50% 20%',
        end: '-30% 30%',
        scrub:true,
        markers:false
    }
})

tl8.from('.wwr3', {
    x:'-100%'
})

let tl9 = gsap.timeline({
    scrollTrigger:{
        trigger: '.jo',
        start: 'top center',
        end: 'bottom center',
        scrub:true,
        markers:false
    }
})

tl9.from('.jo', {
    x:'100%'
})

let tl10 = gsap.timeline({
    scrollTrigger:{
        trigger: '.as',
        start: '-300% 25%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl10.from('.as', {
    y:'100%'
})

let tl11 = gsap.timeline({
    scrollTrigger:{
        trigger: '.right11',
        start: '-300% 25%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl11.from('.right11', {
    x:'100%'
})

let tl12 = gsap.timeline({
    scrollTrigger:{
        trigger: '.we-roarr',
        start: '-300% 25%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl12.from('.we-roarr', {
    x:'100%'
})

let tl13 = gsap.timeline({
    scrollTrigger:{
        trigger: '.talk',
        start: '-300% 25%',
        end: 'top 40%',
        scrub:true,
        markers:false
    }
})

tl13.from('.talk', {
    x:'100%'
})