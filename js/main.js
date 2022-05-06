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
})
