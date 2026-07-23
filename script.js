const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('.main-navigation');
const header=document.querySelector('.site-header');
const navigationLinks=document.querySelectorAll('.main-navigation a');
const sections=document.querySelectorAll('main section[id]');

// Replace # with your permanent Discord invite link.
const discordInviteUrl='#';
document.querySelectorAll('[data-discord-link]').forEach(link=>{link.href=discordInviteUrl;});

if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const isOpen=navigation.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(isOpen));document.body.classList.toggle('menu-open',isOpen);});navigationLinks.forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');}));}

function updateHeader(){if(header)header.classList.toggle('scrolled',window.scrollY>20);}
function updateActiveNavigation(){let current='home';sections.forEach(section=>{if(window.scrollY>=section.offsetTop-150)current=section.id;});navigationLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${current}`));}
window.addEventListener('scroll',()=>{updateHeader();updateActiveNavigation();});
updateHeader();updateActiveNavigation();

