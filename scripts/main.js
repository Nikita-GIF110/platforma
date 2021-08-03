document.addEventListener('DOMContentLoaded', () => {

  const anchorLinks = document.querySelectorAll('.header_navigation_list_link a');
  for(let i = 0; i < anchorLinks.length; i++) {
    anchorLinks[i].addEventListener('click', function(e) {
      const blockId = e.target.getAttribute('href').substr(1);

      if(window.innerWidth > 992){
      document.getElementById(blockId).scrollIntoView({
        behavior: "smooth",
        block: "start"
        })
      }else{
        header.classList.remove('show');
        document.getElementById(blockId).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
      }
    })  
  }
  
  const menuBtn = document.querySelector('.m-menu-btn');
  const header = document.querySelector('.header');

  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menuBtn.classList.toggle('show');
    header.classList.toggle('show');
  })

  const contentLinks = document.querySelectorAll('.navigation_link');
  const contentTabs = document.querySelectorAll('.block');

  contentLinks.forEach(function(item) {
    item.addEventListener('click', function(e) {

      e.preventDefault();
      let currentLink = item;
      let linkId = currentLink.getAttribute('data-tab');
      let currentTab = document.querySelector(linkId);

      if(!currentLink.classList.contains('active')){
         contentLinks.forEach(function(item) {
          item.classList.remove('active');
        });
        contentTabs.forEach(function(item) {
          item.classList.remove('active');
        });

        currentLink.classList.add('active');
        currentTab.classList.add('active');
      }
    })
  });

  const accordionLinks = document.querySelectorAll('.accordion_item_link');
  
  for(let i = 0; i < accordionLinks.length; i++){
    accordionLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      if(!accordionLinks[i].classList.contains('active')){
        for(let i = 0; i < accordionLinks.length; i++){
          accordionLinks[i].parentElement.classList.remove('active');
        }
        accordionLinks[i].parentElement.classList.add('active');
      }
    })
  }
  document.querySelector('.accordion_item_link').click();

});