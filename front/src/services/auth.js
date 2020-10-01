export const isAuthenticated = () =>{

    if(localStorage.getItem('Login') == 'true'){
        return true;
    }else{
        return false;
    }

};