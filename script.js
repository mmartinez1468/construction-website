// This function handles the mobile dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
  // First, keep your existing code for toggling the main menu
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
  
    toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
  
      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
    })
  }
  showMenu('nav-toggle', 'nav-menu')
  
  // Add new code for handling dropdown menus on mobile
  const dropdownItems = document.querySelectorAll('.dropdown__item');
  
  dropdownItems.forEach(item => {
    // Select the div with nav__link and the dropdown__menu within this item
    const dropdownToggle = item.querySelector('.nav__link');
    const dropdownMenu = item.querySelector('.dropdown__menu');
    
    // Add click event listener to the dropdown toggle
    dropdownToggle.addEventListener('click', function(e) {
      // Check if we're on mobile view
      if (window.innerWidth <= 1118) {
        e.preventDefault(); // Prevent default behavior
        
        // Toggle an active class on the dropdown menu
        dropdownMenu.classList.toggle('dropdown__menu--active');
        
        // Toggle rotation of the arrow
        const arrow = dropdownToggle.querySelector('.dropdown__arrow');
        if (arrow) {
          arrow.style.transform = dropdownMenu.classList.contains('dropdown__menu--active') 
            ? 'rotate(180deg)' 
            : 'rotate(0)';
        }
      }
    });
  });
  
  // Handle window resize to reset dropdown states
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1118) {
      document.querySelectorAll('.dropdown__menu--active').forEach(menu => {
        menu.classList.remove('dropdown__menu--active');
      });
      
      document.querySelectorAll('.dropdown__arrow').forEach(arrow => {
        arrow.style.transform = '';
      });
    }
  });
});



  
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
