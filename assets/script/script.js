$(document).ready(function (){
    $('#signUp').eq(0).on('click',function (){
        const loadingScreen = document.querySelector('#sign_up_page');
        loadingScreen.style.display = 'block';

        const loadingScreen1 = document.querySelector('#login_page');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#home_page');
        loadingScreen2.style.display = 'none'

        const loadingScreen3 = document.querySelector('#dashboard_page');
        loadingScreen3.style.display = 'none'

        const loadingScreen4 = document.querySelector('#customer_form');
        loadingScreen4.style.display = 'none'

        const loadingScreen5 = document.querySelector('#item_form');
        loadingScreen5.style.display = 'none'
    });
    $('#signInBtn').eq(0).on('click',function () {
        const loadingScreen = document.querySelector('#sign_up_page');
        loadingScreen.style.display = 'none';

        const loadingScreen1 = document.querySelector('#login_page');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#home_page');
        loadingScreen2.style.display = 'block'

        const loadingScreen3 = document.querySelector('#dashboard_page');
        loadingScreen3.style.display = 'block'
    });


        $('#customer').eq(0).on('click',function (){
        const loadingScreen = document.querySelector('#sign_up_page');
        loadingScreen.style.display = 'none';

        const loadingScreen1 = document.querySelector('#login_page');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#home_page');
        loadingScreen2.style.display = 'none'

        const loadingScreen3 = document.querySelector('#dashboard_page');
        loadingScreen3.style.display = 'block'

        const loadingScreen4 = document.querySelector('#customer_form');
        loadingScreen4.style.display = 'block'

        const loadingScreen5 = document.querySelector('#item_form');
        loadingScreen5.style.display = 'none'
    });

    $('#home').eq(0).on('click',function (){
        const loadingScreen = document.querySelector('#sign_up_page');
        loadingScreen.style.display = 'none';

        const loadingScreen1 = document.querySelector('#login_page');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#home_page');
        loadingScreen2.style.display = 'block'

        const loadingScreen3 = document.querySelector('#dashboard_page');
        loadingScreen3.style.display = 'block'

        const loadingScreen4 = document.querySelector('#customer_form');
        loadingScreen4.style.display = 'none'

    });

    $('#item').eq(0).on('click',function (){
        const loadingScreen = document.querySelector('#sign_up_page');
        loadingScreen.style.display = 'none';

        const loadingScreen1 = document.querySelector('#login_page');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#home_page');
        loadingScreen2.style.display = 'none'

        const loadingScreen3 = document.querySelector('#dashboard_page');
        loadingScreen3.style.display = 'block'

        const loadingScreen4 = document.querySelector('#customer_form');
        loadingScreen4.style.display = 'none'

        const loadingScreen5 = document.querySelector('#item_form');
        loadingScreen5.style.display = 'block'
    });
});
window.addEventListener('load',function (){
    const loadingScreen = document.querySelector('#sign_up_page');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('#login_page');
    loadingScreen1.style.display = 'block';

    const loadingScreen2 = document.querySelector('#home_page');
    loadingScreen2.style.display = 'none'

    const loadingScreen3 = document.querySelector('#dashboard_page');
    loadingScreen3.style.display = 'none'

    const loadingScreen4 = document.querySelector('#customer_form');
    loadingScreen4.style.display = 'none'

    const loadingScreen5 = document.querySelector('#item_form');
    loadingScreen5.style.display = 'none'
});