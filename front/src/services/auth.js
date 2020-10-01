export const isAuthenticated = () =>{

    if(localStorage.getItem('login') == 'true'){
        return true;
    }else{
        return false;
    }

};