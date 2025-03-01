document.addEventListener("DOMContentLoaded", function () {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-common');
                if (entry.target.classList.contains("eighth-container")) {
                    console.log("okkkkkkk")
                    const cardsArr = document.querySelectorAll('.ei-c-card');
                    cardsArr.forEach(el => {
                        console.log(el);
                        el.classList.add('slide-up-common');
                    })
                }
            }
        });
    }, {
        threshold: 0.5
    });

    // boxes.forEach(box => {
    //     observer.observe(box);
    // });
    // observer.observe(document.querySelector('.s-c-left'));
    observer.observe(document.querySelector('.s-c-right'));
    observer.observe(document.querySelector('.image-container'));
    observer.observe(document.querySelector('.right-half'));
    observer.observe(document.querySelector('.f-c-image-wrapper'));
    observer.observe(document.querySelector('.fo-c-left'));
    observer.observe(document.querySelector('.fo-c-right'));
    observer.observe(document.querySelector('.si-c-left'));
    observer.observe(document.querySelector('.si-c-right'));
    // observer.observe(document.querySelector('.fir-c-left'));
    // observer.observe(document.querySelector('.fir-c-right'));
    const dottedLineList = document.querySelectorAll('.d-l-1');
    dottedLineList.forEach(el => {
        // console.log(el);
        observer.observe(el);
    })
    const customerTestimonialImages = document.querySelectorAll('.t-d-c-1');
    customerTestimonialImages.forEach(el => {
        // console.log(el);
        observer.observe(el);
    })
    observer.observe(document.querySelector(".eighth-container"));
    observer.observe(document.querySelector(".ei-c-m-bottom"));

    startSecondContainer();
    loadMobileHeaderEvents();
    // imagesLoaded();
    setActiveTab('women');
    loadBannerCarousel();
    updateImage();
});
function loadBannerCarousel() {
    const slides = document.querySelectorAll('.first-c-slide-dyn');
    const dots = document.querySelectorAll('.first-c-dot-dyn');
    let currentSlide = 0;
    let lastTime = 0;
    const interval = 4000; // Time between slides in milliseconds
    let requestId;

    function showSlideDyn(index) {
        const offset = -index * 100;
        document.querySelector('.first-c-slides-dyn').style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlideDyn() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlideDyn(currentSlide);
    }

    function startAutoSlideDyn() {
        const now = performance.now();
        if (now - lastTime >= interval) {
            nextSlideDyn();
            lastTime = now;
        }
        requestId = requestAnimationFrame(startAutoSlideDyn);
    }

    function stopAutoSlideDyn() {
        if (requestId) {
            cancelAnimationFrame(requestId);
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-slide')) - 1;
            showSlideDyn(index);
            currentSlide = index;
        });
    });

    // Start auto-slide when the page loads
    startAutoSlideDyn();

    // Optional: Stop auto-slide when user interacts with dots
    // document.querySelector('.first-c-carousel').addEventListener('mouseover', stopAutoSlide);
    // document.querySelector('.first-c-carousel').addEventListener('mouseout', startAutoSlide);

    // Initialize the first slide
    showSlideDyn(currentSlide);
}
function loadMobileHeaderEvents() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.side-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.add('menu-open');
    });

    closeBtn.addEventListener('click', function () {
        sideMenu.classList.remove('menu-open');
    });

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            document.body.classList.remove('menu-open');
        }
    });
}
let intervalV = 1000;
function startSecondContainer() {
    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    const text4 = document.querySelector(".text4");
    const text5 = document.querySelector(".text5");
    recursiveFunc(text1);
    setTimeout(() => {
        recursiveFunc(text2);
        setTimeout(() => {
            recursiveFunc(text3);
            setTimeout(() => {
                recursiveFunc(text4);
                setTimeout(() => {
                    recursiveFunc(text5);
                }, intervalV)
            }, intervalV)
        }, intervalV)
    }, intervalV)
    setTimeout(() => {
        intervalV = 3000;
    }, 4000)
}
function recursiveFunc(text) {
    if (text.classList.contains("class-5")) {
        text.classList.remove("class-5");
    }
    text.classList.add("class-1")
    setTimeout(() => {
        text.classList.remove("class-1");
        text.classList.add("class-2");
        setTimeout(() => {
            text.classList.remove("class-2");
            text.classList.add("class-3");
            setTimeout(() => {
                text.classList.remove("class-3");
                text.classList.add("class-4");
                setTimeout(() => {
                    text.classList.remove("class-4");
                    text.classList.add("class-5");
                    setTimeout(() => {
                        recursiveFunc(text);
                    }, intervalV)
                }, intervalV)
            }, intervalV)
        }, intervalV)
    }, intervalV)
}

function setActiveTab(tabName) {
    var tabs = document.querySelectorAll('.tab');
    var subcategoryContainers = document.querySelectorAll('.subcategories');
    var images = document.querySelectorAll('.category-image');


    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });

    subcategoryContainers.forEach(function (container) {
        container.classList.remove('active');
    });
    images.forEach(function (image) {
        image.classList.remove('active');
    });

    var activeTab = document.getElementById(tabName);
    var activeSubcategories = document.getElementById(tabName + '-subcategories');
    var activeImage = document.getElementById(tabName + '-image');


    activeTab.classList.add('active');
    activeSubcategories.classList.add('active');
    activeImage.classList.add('active');


    // Set the last subcategory as active by default
    var subcategories = activeSubcategories.querySelectorAll('.subcategory');
    subcategories.forEach(function (subcat) {
        subcat.classList.remove('active');
    });
    var lastSubcategory = subcategories[subcategories.length - 1];
    lastSubcategory.classList.add('active');

    setContent(lastSubcategory.id + '-content');
}

function setActiveSubcategory(subcategoryId) {
    var subcategories = document.querySelectorAll('.subcategory');
    subcategories.forEach(function (subcat) {
        subcat.classList.remove('active');
    });

    var activeSubcategory = document.getElementById(subcategoryId);
    activeSubcategory.classList.add('active');
    setContent(subcategoryId + '-content');
}

function setContent(contentId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        if (content.classList.contains('visible')) {
            content.classList.remove('visible');
            setTimeout(function () {
                content.style.display = 'none';
            }, 500); // Match this duration with the CSS transition time
        }
    });

    setTimeout(function () {
        var activeContent = document.getElementById(contentId);
        activeContent.style.display = 'block';
        activeContent.classList.add('visible');
    }, 500); // Delay to allow previous content to hide first
}

//fifth-container
const slides = document.querySelectorAll('.fi-c-slide');
const dots = document.querySelectorAll('.fi-c-dot');
let currentSlide = 0;
let lastTime = 0;
const interval = 5000; // Time between slides in milliseconds
let requestId;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.fi-c-slides').style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    const now = performance.now();
    if (now - lastTime >= interval) {
        nextSlide();
        lastTime = now;
    }
    requestId = requestAnimationFrame(startAutoSlide);
}

function stopAutoSlide() {
    if (requestId) {
        cancelAnimationFrame(requestId);
    }
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-slide')) - 1;
        showSlide(index);
        currentSlide = index;
    });
});

// Start auto-slide when the page loads
startAutoSlide();

// Optional: Stop auto-slide when user interacts with dots
document.querySelector('.fi-c-carousel').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.fi-c-carousel').addEventListener('mouseout', startAutoSlide);

// Initialize the first slide
showSlide(currentSlide);

function updateImage() {
    const img1 = document.getElementById('men-image');
    const img2 = document.getElementById('women-image');
    const img3 = document.getElementById('fourth-container-img-bg');
    const img4 = document.getElementById('fourth-container-img');
    const img5 = document.getElementById('Franchise-girl-img');
    const img6 = document.getElementById('academy-img');
    const img7 = document.getElementById('banner-girl');
    const img8 = document.getElementById('loader-overlay-img');
    // let ban1 = document.getElementById("ban-1")
    let ban2 = document.getElementById("ban-2")
    let ban3 = document.getElementById("ban-3")
    let ban4 = document.getElementById("ban-4")
    let ban5 = document.getElementById("ban-5")
    let ban6 = document.getElementById("ban-6")
    if (window.matchMedia('(max-width: 600px)').matches) {
        img1.src = './assets/mobile/services_men.png';
        img2.src = './assets/mobile/services_women.png';
        img3.src = './assets/mobile/bridal_img_bg.jpg';
        img4.src = './assets/mobile/bridal_img.png';
        img5.src = './assets/mobile/Franchise_girl.png';
        img6.src = './assets/mobile/academy_image.png';
        //   img7.src = './assets/mobile/banner_girl.png';
        img8.src = './assets/mobile/nat_logo_svg.svg';
        // ban1.src = './home_page_banner/mobile/ban1.jpg';
        if (ban2) {
            ban2.src = './home_page_banner/mobile/ban2_v1.jpg';
        }
        if (ban3) {
            ban3.src = './home_page_banner/mobile/ban1.jpg';
        }
        if (ban4) {
            ban4.src = './home_page_banner/mobile/ban2.jpg';
        }
        if (ban5) {
            ban5.src = './home_page_banner/mobile/ban5.jpg';
        }
        if(ban6){
            ban6.src = './home_page_banner/mobile/ban6.jpg';
        }

    }
    imagesLoaded();
}
let currentIndex = 0;

function showCard(index) {
    const cards = document.querySelector('.ei-c-m-cards');
    const totalCards = document.querySelectorAll('.ei-c-m-card').length;
    if (index >= totalCards) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalCards - 1;
    } else {
        currentIndex = index;
    }
    cards.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextCard() {
    showCard(currentIndex + 1);
}

function prevCard() {
    showCard(currentIndex - 1);
}
function imagesLoaded() {
    const images = document.querySelectorAll('img');
    let loadedImagesCount = 0;

    images.forEach((img) => {
        if (img.complete) {
            loadedImagesCount++;
        } else {
            img.addEventListener('load', () => {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    console.log(loadedImagesCount, images.length);
                    console.log('here')
                    // generateConfetti();
                    document.querySelector('.loader-overlay').style.display = 'none';

                }
            });
        }
    });
    console.log(loadedImagesCount, images.length);
    if (loadedImagesCount === images.length) {
        // generateConfetti();
        document.querySelector('.loader-overlay').style.display = 'none';
    }
}

window.onload = function () {
    // setActiveTab('women'); // Set default tab
    // setTimeout(()=>{
    // },200)
    // updateImage();
}
window.onresize = function () {
    updateImage();
}
function openNewTab(url) {
    // const url = 'https://www.example.com'; // Replace with your desired URL
    window.open(url, '_blank');
}
function openTab(url, newTab) {
    let anchor = document.createElement('a');
    anchor.href = url;
    if (newTab) {
        anchor.target = '_blank';
    }
    anchor.click();
}
function openTabNEW(url){
    let anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
            anchor.click();
}