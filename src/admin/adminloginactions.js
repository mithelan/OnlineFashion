import axios from 'axios'


export const loginAd = admin => {
    return axios.post('http://localhost:5000/adminaction/loginadmin',{
        username:admin.username,
        password:admin.password,
    }).then(res =>{
        localStorage.setItem('admintoken',res.data)
        return res.data;
    }).catch(err =>{
        console.log(err);
    })
}
