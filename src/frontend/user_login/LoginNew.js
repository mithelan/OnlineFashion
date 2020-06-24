import axios from "axios";



export function isAuthenticated( userData) {
    return function(dispatch) {

        let url =  'http://localhost:5000/api/auth'

    }

}




export async function doLogin(email, password) {




    if(email!=="" && password!=='') {


        let url =  'http://localhost:5000/api/auth';

        let obj={
            email:email,
            password:password
        }


        axios.post(url, obj)
            .then((response) => {
                // localStorage.removeItem( "token" )

                localStorage.setItem( "token", response.data.token );

                if(isAuthenticated = true){



                    alert("Login sucess ")

                }


            })
            .catch((err) => {

                alert("please login again")

            })










    }
    else{
        alert(" provide the correct uername and password")
    }
    return {
        type: "LOGIN_EMPTY",
        payload: {
            message : "Empty username or password.",
        }
    }

}







