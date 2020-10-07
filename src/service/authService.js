import { clientId } from './config';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class TaskService {

    constructor() {
        this.user = {
            isLogined: false,
            accessToken: ''
        }
    }

    init = async () => {
        const { renewSession } = this.props.auth;
        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }


}

export default new TaskService();
