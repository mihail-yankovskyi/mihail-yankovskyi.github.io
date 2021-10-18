// body
const body = document.querySelector('body');

// header wrapper
const wrapper = document.querySelector('.wrapper');

// dropdown menu buttons
const dropdownContactsBtn = document.querySelector('#contacts');
const dropdownTehnologiesBtn = document.querySelector('#technologies');

// sidebar 
const sideBar = document.querySelector('.side-bar');

// sidebar buttons
const sidebarContactsBtn = document.querySelector('.contacts-btn');
const sidebarTehnologiesBtn = document.querySelector('.technologies-btn');

// sidebar contacts button active-border
const sidebarContactsBorder = document.querySelector('.sidebar-contacts-button-border-bottom');

// sidebar technologies button active-border
const sidebarTechnologiesBorder = document.querySelector('.sidebar-technologies-button-border-bottom');

// sidebar contacts
const contentContacts = document.querySelector('.content-contacts');

// sidebar technologies
const contentTechnologies = document.querySelector('.content-technologies');

// sidebar close button
const sidebarCloseButton = document.querySelector('.close-button');

// backdrop
const backdrop =  document.querySelector('.back-drop');

dropdownContactsBtn.addEventListener('click', () => {
    // open sidebar
    sideBar.classList.add('open-side-bar');
    // remove active class from sidebar Tehnologies button
    sidebarTehnologiesBtn.classList.remove('side-bar-technologies-active-btn');
    sidebarTechnologiesBorder.classList.add('sidebar-button-hide-border');
    // add active class to sidebar contacts button
    sidebarContactsBtn.classList.add('side-bar-contacts-active-btn');
    // add active class to sidebar contacts button border
    sidebarContactsBorder.classList.add('sidebar-button-active-contacts-border');
    sidebarContactsBorder.classList.remove('sidebar-button-hide-border');
    // show backdrop
    backdrop.classList.add('visible');
    // prevent scroll when backdrop is visible
    body.classList.add('prevent-scroll');
    // hide sidebar technologies
    contentTechnologies.classList.add('hidden');
    // show sidebar contacts
    contentContacts.classList.remove('hidden');
})

dropdownTehnologiesBtn.addEventListener('click', () => {
    // open sidebar
    sideBar.classList.add('open-side-bar');
    // remove active class from sidebar contacts button
    sidebarContactsBtn.classList.remove('side-bar-contacts-active-btn');
    sidebarContactsBorder.classList.add('sidebar-button-hide-border');
    // add active class to sidebar technologies button
    sidebarTehnologiesBtn.classList.add('side-bar-technologies-active-btn');
    // add active class to sidebar technologies button border
    sidebarTechnologiesBorder.classList.add('sidebar-button-active-technologies-border');
    sidebarTechnologiesBorder.classList.remove('sidebar-button-hide-border');
    // show backdrop
    backdrop.classList.add('visible');
    // prevent scroll when backdrop is visible
    body.classList.add('prevent-scroll');
    // hide sidebar contacts
    contentContacts.classList.add('hidden');
    // show sidebar technologies
    contentTechnologies.classList.remove('hidden');
})

sidebarContactsBtn.addEventListener('click', () => {
    // remove active class from sidebar Tehnologies button
    sidebarTehnologiesBtn.classList.remove('side-bar-technologies-active-btn');
    sidebarTechnologiesBorder.classList.add('sidebar-button-hide-border');
    // add active class to sidebar contacts button
    sidebarContactsBtn.classList.add('side-bar-contacts-active-btn');
    // add active class to sidebar contacts button border
    sidebarContactsBorder.classList.add('sidebar-button-active-contacts-border');
    sidebarContactsBorder.classList.remove('sidebar-button-hide-border');
    // show backdrop
    backdrop.classList.add('visible');
    // prevent scroll when backdrop is visible
    body.classList.add('prevent-scroll');
    // hide sidebar technologies
    contentTechnologies.classList.add('hidden');
    // show sidebar contacts
    contentContacts.classList.remove('hidden');
})

sidebarTehnologiesBtn.addEventListener('click', () => {
    // remove active class from sidebar contacts button
    sidebarContactsBtn.classList.remove('side-bar-contacts-active-btn');
    sidebarContactsBorder.classList.add('sidebar-button-hide-border');
    // add active class to sidebar technologies button
    sidebarTehnologiesBtn.classList.add('side-bar-technologies-active-btn');
    // add active class to sidebar technologies button border
    sidebarTechnologiesBorder.classList.add('sidebar-button-active-technologies-border');
    sidebarTechnologiesBorder.classList.remove('sidebar-button-hide-border');
    // show backdrop
    backdrop.classList.add('visible');
    // prevent scroll when backdrop is visible
    body.classList.add('prevent-scroll');
    // hide sidebar contacts
    contentContacts.classList.add('hidden');
    // show sidebar technologies
    contentTechnologies.classList.remove('hidden');
})

// on 3 dots click show drop-down menu
wrapper.addEventListener('click', () => {
    showDropdown();
})

function showDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// when click outside menu - close drop-down menu
window.addEventListener('click', (event) => {
    if (!event.target.matches('.menu-btn') && !event.target.matches('.dot')) {
        var dropdown = document.querySelector('.dropdown-content');

        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});

// close sidebar
sidebarCloseButton.addEventListener('click', (event) => {
  closeSidebar();
});

backdrop.addEventListener('click', (event) => {
  closeSidebar();
});

function closeSidebar() {
  sideBar.classList.remove('open-side-bar');
  sidebarContactsBtn.classList.remove('active-btn-side-bar');
  sidebarTehnologiesBtn.classList.remove('active-btn-side-bar');
  backdrop.classList.remove('visible');
  body.classList.remove('prevent-scroll');
}
// end close sidebar