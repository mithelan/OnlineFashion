import axios from 'axios'


export const login = stockmanager => {
    return axios.post('http://localhost:5000/stockmanager/login',{
        username:stockmanager.username,
        password:stockmanager.password,
    }).then(res =>{
        localStorage.setItem('stockmanagertoken',res.data)
        return res.data;
    }).catch(err =>{
        console.log(err);
    })
}
