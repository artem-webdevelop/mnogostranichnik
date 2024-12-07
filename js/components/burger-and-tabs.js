




    const hamburger = document.querySelector('.header__btn'),
        menu = document.querySelector('.rightside-menu'),
        closeElem = document.querySelector('.rightside-menu__close');
        

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });


    
    const tabs = document.querySelectorAll('.gallery__btn'),
        tabsContent = document.querySelectorAll('.gallery__items'),
        tabsParent = document.querySelector('.gallery__buttons');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('fade');
        });

        tabs.forEach(item => {
            item.classList.remove('gallery__btn_active');
        });
    }

    function showTabContent(i = 0) {
        
        tabsContent[i].classList.add('fade');
        tabsContent[i].style.display = 'grid';
        tabs[i].classList.add('gallery__btn_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function (event) {
        const target = event.target;
        if (target && target.classList.contains('gallery__btn')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    



