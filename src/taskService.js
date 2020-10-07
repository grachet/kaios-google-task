class TaskService {

    constructor() {
        this.tasks = {

        }
    }

    init = () => {
        this.tasks = {
            test: 1
        }
    }

    getTasks = () => {
        return this.tasks
    }

    // userMail() {
    //     let account = this.msalInstance.getAccount()
    //     return account && account.userName;
    // }

    // async getToken(isIdToken) {
    //     if (this.msalInstance.getAccount()) {
    //         var tokenRequest = {
    //             scopes: isIdToken ? [msalConfig.auth.clientId] : graphScopes
    //         };
    //         return this.msalInstance.acquireTokenSilent(tokenRequest)
    //             .then(response => {
    //                 return isIdToken ? response.idToken.rawIdToken : response.accessToken
    //             })
    //             .catch(err => {
    //                 // could also check if err instance of InteractionRequiredAuthError if you can import the class.
    //                 if (err.name === "InteractionRequiredAuthError") {
    //                     return this.msalInstance.acquireTokenPopup(tokenRequest)
    //                         .then(response => {
    //                             return isIdToken ? response.idToken.rawIdToken : response.accessToken
    //                         })
    //                         .catch(err => {
    //                             dispatchSendNotif("Unable to use your microsoft account (no token)", "error")
    //                             console.error(err);
    //                             return null
    //                         });
    //                 }
    //             });
    //     } else {
    //         dispatchSendNotif("You are not connected to your microsoft account", "error")
    //         return null
    //     }
    // }

    // login = () => {
    //     this.msalInstance.loginRedirect(graphScopes);
    // };

    // logout = () => {
    //     this.msalInstance.logout();
    // };


}

export default new TaskService();
