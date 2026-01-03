let mobileNavBtn = document.getElementById("mobileNavBtn"),
    mainPage = document.getElementById("main-page"),
    mobileNavPage = document.getElementById("mobileNavPage");

const showMobileNav = () =>{
    mobileNavPage.classList.remove('hidden');
    mobileNavPage.classList.remove('slide-left')
    mobileNavPage.classList.add('slide-right');
    mainPage.classList.add('blur-xs');
}
const RmMobileNav = () => {
    mobileNavPage.classList.remove('slide-right')
    mobileNavPage.classList.add('slide-left');
    setTimeout(() => {
        mobileNavPage.classList.add('hidden');
    }, 300);
    
    mainPage.classList.remove('blur-xs');
}