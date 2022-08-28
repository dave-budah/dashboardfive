const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');

allDropdown.forEach( item=> {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', (e) => {
        console.log('clicked');
        e.preventDefault();

        if (!this.classList.contains('active')) {
            allDropdown.forEach( i => {
                const aLink = i.parentElement.querySelector('a:first-child');

                this.classList.remove('active');
                i.classList.remove('show');
            })
        }

    })
    }
)

const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', () => {
    dropdownProfile.classList.toggle('show');
})

// Menu
const allMenu = document.querySelectorAll('main .data .content-data .head .menu');
allMenu.forEach(item => {
    const icon = item.querySelector('.icon');
    const menuLink = item.querySelector('.menu-link');

    icon.addEventListener('click', function () {
        menuLink.classList.toggle('show');
    })
})

window.addEventListener('click', (e) => {
    if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
            if (dropdownProfile.classList.contains('show')) {
                dropdownProfile.classList.remove('show');
            }
        }
    }
        // allMenu.forEach(item => {
        //     const icon = item.querySelector('.icon');
        //     const menuLink = item.querySelector('.menu-link');
        //
        //     if(e.target !== icon) {
        //         if(e.target !== menuLink) {
        //             if(menuLink.classList.contains('show')) {
        //                 menuLink.classList.remove('show')
        //             }
        //         }
        //     }
        // })

})

const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');

    if(sidebar.classList.contains('hide')) {
        allSideDivider.forEach(item => {
            item.textContent = '-';
        })
    } else {
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        })
    }

    if(sidebar.classList.contains('hide')) {
         allSideDivider.forEach(item => {
            item.textContent = '-';
        })
    } else {
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        })
    }
});

// Theme Toggling
function styleSwitcherToggle() {
 const styleSwitcher = document.querySelector('.js-style-switcher'),
 styleSwitcherToggler = document.querySelector('.js-style-switcher-toggler');

 styleSwitcherToggler.addEventListener('click', function() {
    styleSwitcher.classList.toggle('open');
    this.querySelector('i').classList.toggle("fa-cancel");
    this.querySelector('i').classList.toggle("fa-cog");
 });
}
styleSwitcherToggle();

// Color Themes
function themeColors() {
    const colorStyle = document.querySelector('.js-color-style'),
        themeColorsContainer = document.querySelector('.js-theme-colors');

    themeColorsContainer.addEventListener('click', ({target}) => {
        if(target.classList.contains('js-theme-color-item')) {
            localStorage.setItem('color',target.getAttribute('data-js-theme-color'));
            setColor();
        }
    });
    function setColor() {
        let path = colorStyle.getAttribute('href').split('/');
        path = path.slice(0, path.length-1);
        colorStyle.setAttribute('href',path.join('/') + '/' + localStorage.getItem('color') + '.css');
        if(document.querySelector('.js-theme-color-item.active')){
            document.querySelector('.js-theme-color-item.active').classList.remove('active');
        }
        document.querySelector('[data-js-theme-color= ' + localStorage.getItem('color') + ']').classList.add('active');
    }
    if (localStorage.getItem('color') !== null) {
        setColor();
    } else {
       const defaultColor = colorStyle.getAttribute('href').split('/').pop().split('.').shift();
       document.querySelector('[data-js-theme-color=' + defaultColor + ']').classList.add('active');
    }
}
themeColors();

// Light and dark toggle

function themeLightDark() {
    const darkModeCheckBox = document.querySelector('.js-dark-mode');
    const label = document.querySelector('label');

    darkModeCheckBox.addEventListener('click', function() {
        if(this.checked) {
            localStorage.setItem('theme-dark', 'true');
            label.textContent = 'Lite Mode';
        } else {
            localStorage.setItem('theme-dark', 'false');
            label.textContent = 'Dark Mode';
        }
        themeMode();
    });

    function themeMode() {
        if(localStorage.getItem('theme-dark') === 'false') {
            document.body.classList.remove('t-dark');
        } else {
            document.body.classList.add('t-dark');
        }
    }
    if(localStorage.getItem('theme-dark') !== null) {
        themeMode();
    }
    if(document.body.classList.contains('t-dark')) {
        darkModeCheckBox.checked = true;
    }
}
themeLightDark();

