 // mobile menu elements
 const mobileopen = document.querySelector('.open-mobile-menu')
 const mobilemenu = document.querySelector('.mobile-menu')
 const body = document.querySelector('body')
 //dropdown services (services in mobile menu)
 const service = document.querySelector('.mobile-menu-services')
 const servicedropdown = document.querySelector('.services-dropdown')
 //dropdown about (about in mobile menu)
 const about = document.querySelector('.mobile-menu-about')
 const aboutdropdown = document.querySelector('.about-dropdown')

 // open profile menu elements
 const openprofile = document.querySelector('.open-profile-menu')
 const profilemenu = document.querySelector('.mobile-profile-menu')

 // open profile menu event
 openprofile.addEventListener('click', (event) => {
     event.stopPropagation()

     if(body.classList.contains('overflowHIDDEN') && profilemenu.classList.contains('active')){
        body.classList.remove('overflowHIDDEN')
     }else{
        body.classList.add('overflowHIDDEN')
     }


     // open profile menu
    profilemenu.classList.toggle('active')
    
     
     // close mobile menu if it opened
     if(mobilemenu.classList.contains('active')){
         mobilemenu.classList.remove('active')
         mobileopen.classList.remove('activated')
     }

    
 })
 
 profilemenu.addEventListener('click', (event) => {
     event.stopPropagation()
 })

 // mobile menu
 mobileopen.addEventListener('click', (event) => {
     event.stopPropagation()

     if(body.classList.contains('overflowHIDDEN') && mobilemenu.classList.contains('active')){
        body.classList.remove('overflowHIDDEN')
     }else{
        body.classList.add('overflowHIDDEN')
     }
     // open mobile menu
     mobileopen.classList.toggle('activated')
     mobilemenu.classList.toggle('active')
     // stop scroll outside mobile menu
    
     // close service dropdown when user closed mobile menu
     if (service.classList.contains('active')) {
         service.classList.remove('active')
         servicedropdown.classList.remove('active')
     }
     // close about dropdown when user closed mobile menu
     if (about.classList.contains('active')) {
         about.classList.remove('active')
         aboutdropdown.classList.remove('active')
     }
     if(profilemenu.classList.contains('active')){
         profilemenu.classList.remove('active')
     }

    
 })
 // on click on header side or body side close mobile menu and profile menu
 window.addEventListener('click', () => {
     mobilemenu.classList.remove('active')
     mobileopen.classList.remove('activated')
     profilemenu.classList.remove('active')
    
 })
 mobilemenu.addEventListener('click', (event) => {
     event.stopPropagation()
 })




 //  service dropdown open
 service.addEventListener('click', () => {
     service.classList.toggle('active')
     servicedropdown.classList.toggle('active')
     // close about dropdown if it open when user try to open service dropdown
     if (about.classList.contains('active')) {
         about.classList.remove('active')
         aboutdropdown.classList.remove('active')
     }
 })
 // about dropdown open
 about.addEventListener('click', () => {
     about.classList.toggle('active')
     aboutdropdown.classList.toggle('active')
     // close service dropdown if it open when user try to open about dropdown
     if (service.classList.contains('active')) {
         service.classList.remove('active')
         servicedropdown.classList.remove('active')
     }
 })


 const footerdropdown = document.querySelector('.footer-select-language')
 const openfooterdropdown = document.querySelector('.open-footer-dropdown')

 openfooterdropdown.addEventListener('click', () => {
    footerdropdown.classList.toggle('active')
 })