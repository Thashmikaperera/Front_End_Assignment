export class User_api{
    saveUser(user){
        const userJson = JSON.stringify(user);

        const sendAjax = (userJson) => {
            $.ajax({
                url: "http://localhost:8080/page/user",
                type: "POST",
                data: JSON.stringify(userJson), // Ensure userJson is stringified
                contentType: "application/json",
                success: function () {
                    Swal.fire({
                        icon: 'success',
                        title: 'User Saved Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                error: function (xhr, status, error) {
                    console.error('AJAX Error:', status, error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error Saving User',
                        text: 'Please try again later.',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
            });
        };


        console.log('Save user call');
        sendAjax(userJson);
    }

    getUser(userName,password){
        if (userName){
            $.ajax({
                type:"GET",
                url:"http://localhost:8080/page/user",
                data:{
                    action: 'checkUser',
                    userName: userName
                },
                success: function (responseText){
                    let user = responseText;
                    if (typeof responseText === 'string'){
                        // If it's a string, parse it as JSON
                        user = JSON.parse(responseText);
                    }

                    if (userName === user.userName && password === user.password) {
                        const loadingScreen = $('#login_page');
                        loadingScreen.hide();

                        const loadingScreen1 = $('#dashboard_page');
                        loadingScreen1.show();

                        const loadingScreen2 = $('#home_page');
                        loadingScreen2.show();

                        const loadingScreen3 = $('#customer_form');
                        loadingScreen3.hide();

                        // const loadingScreen4 = $('#item_form');
                        // loadingScreen4.hide();


                    }
                },
                error: function (xhr, status, error) {
                    console.log(error);
                }
            });
        }
    }
}