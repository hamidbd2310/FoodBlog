class Helper {

    static isLogin(){
        let token=localStorage.getItem('token');
        return token !== null;
    }

    static isEmpty(value){
        return value.length === 0
    }

    static isMobile = (value) => {
        // Regular expression for Bangladeshi mobile number format: +8801XXXXXXXXX or 01XXXXXXXXX
        const regex = /^(\+88)?01\d{9}$/;
        return regex.test(value);
    };


    static tokenHeader(){
        return {
            headers: {
                'token': localStorage.getItem('token')
            }
        }
    }

    static Unauthorized(code){
        if(code===401){
            localStorage.clear();
            window.location.href="/login"
        }
    }

    static API_BASE="https://cart-api.teamrabbil.com/api"
    static BASE_API="http://localhost:5000/api"

}

export default Helper