document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
    const contents = tabsContainer.querySelectorAll('.tab__content');
  
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {

        tabsContainer.querySelector('.tab_active').classList.remove('tab_active');
        tabsContainer.querySelector('.tab__content_active').classList.remove('tab__content_active');
  
        tab.classList.add('tab_active');
        contents[index].classList.add('tab__content_active');
      });
    });
  });
  