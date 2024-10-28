const navMenu=document.getElementById("nav-menu"),navToggle=document.getElementById("nav-toggle"),navClose=document.getElementById("nav-close");navToggle&&navToggle.addEventListener("click",()=>{navMenu.classList.add("show-menu")}),navClose&&navClose.addEventListener("click",()=>{navMenu.classList.remove("show-menu")});const navLink=document.querySelectorAll(".nav__link");function linkAction(){let e=document.getElementById("nav-menu");e.classList.remove("show-menu")}function scrollHeader(){let e=document.getElementById("header");this.scrollY>=50?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}function scrollUp(){let e=document.getElementById("scroll-up");this.scrollY>=200?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}navLink.forEach(e=>e.addEventListener("click",linkAction)),window.addEventListener("scroll",scrollHeader),window.addEventListener("scroll",scrollUp);const sections=document.querySelectorAll("section[id]");function scrollActive(){let e=window.pageYOffset;sections.forEach(s=>{let t=s.offsetHeight,l=s.offsetTop-50;sectionId=s.getAttribute("id"),e>l&&e<=l+t?document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.remove("active-link")})}window.addEventListener("scroll",scrollActive);const sr=ScrollReveal({distance:"60px",duration:2500,delay:400});sr.reveal(".home__header, .section__title",{delay:600}),sr.reveal(".home__footer",{delay:700}),sr.reveal(".home__img",{delay:900,origin:"top"}),sr.reveal(".sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy, .sponsor__img_2, .sponsor__img_3",{origin:"top",interval:100}),sr.reveal(".specs__data, .discount__animate",{origin:"left",interval:100}),sr.reveal(".specs__img, .discount__img",{origin:"right"}),sr.reveal(".case__img",{origin:"top"}),sr.reveal(".case__data");