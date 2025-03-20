///////////////// OPENS MENU /////////////////
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
  
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
  }
  showMenu('nav-toggle','nav-menu')



  
///////////////// REPLAYS ANIMATION WHEN BACK IN VIEWPORT /////////////////
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Remove to re-trigger animation
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.animated').forEach(element => {
    observer.observe(element);
  });



  ///////////////// PRE LOADER /////////////////
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    loader.classList.add('loaderHidden');
  
    loader.addEventListener('transitioned', () => {
      document.body.removeChild('loader');
    })
  })