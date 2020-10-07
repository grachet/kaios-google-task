import config from './config.json';

const SCOPES = ['https://www.googleapis.com/auth/tasks'];

class TaskService {

    isLoaded() {
        return !!window.gapi && !!window.gapi.auth2
    }

    // async init() {
    //     console.log(window.gapi)
    //     let init = await window.gapi.auth2.init({
    //         'client_id': config.web.client_id,
    //         'scope': 'https://www.googleapis.com/auth/tasks',
    //         ux_mode: 'redirect',
    //         redirect_uri: 'https://localhost:3000',
    //         'cookie_policy': 'none',
    //     })
    //     console.log("init", init)
    //     let user = await window.gapi.auth2.GoogleAuth.currentUser.get();

    //     console.log("user", user)
    // }

    // init(params = {}) {
    //     console.log(window.gapi)
    //     return !!window.gapi.auth2 && new Promise((resolve, reject) => {
    //         window.gapi.auth2.authorize({
    //             'client_id': config.web.client_id,
    //             'scope': SCOPES,
    //             // 'immediate': params.immediate,
    //             'cookie_policy': 'none',
    //             ux_mode: "redirect",
    //             redirect_uri: "https://myapp.org"
    //         },
    //             authResult => {
    //                 console.log(authResult)
    //                 if (authResult.error) {
    //                     return reject(authResult.error);
    //                 }
    //                 return window.gapi.client.load('tasks', 'v1', () =>
    //                     window.gapi.client.load('plus', 'v1', () => resolve(authResult && authResult.access_token)));
    //             });
    //     });
    // }

    init(params = {}) {
        console.log(window.gapi)
        return !!window.gapi && new Promise((resolve, reject) => {
            window.gapi.auth.authorize({
                'client_id': config.web.client_id,
                'scope': SCOPES,
                // 'immediate': params.immediate,
                'cookie_policy': 'none',
                "ux_mode": "redirect",
                redirect_uri: 'https://localhost:3000',
            },
                authResult => {
                    console.log(authResult)
                    if (authResult.error) {
                        return reject(authResult.error);
                    }
                    return window.gapi.client.load('tasks', 'v1', () =>
                        window.gapi.client.load('plus', 'v1', () => resolve(authResult && authResult.access_token)));
                });
        });
    }

    listTaskLists() {
        const request = window.gapi.client.tasks.tasklists.list();

        return this.makeRequest(request);
    }

    showTaskList(taskListId) {
        const request = window.gapi.client.tasks.tasklists.get({ tasklist: taskListId });

        return this.makeRequest(request);
    }

    insertTaskList({ title }) {
        const request = window.gapi.client.tasks.tasklists.insert({ title });

        return this.makeRequest(request);
    }

    updateTaskList({ taskListId, title }) {
        const request = window.gapi.client.tasks.tasklists.update({
            tasklist: taskListId,
            id: taskListId,
            title
        });

        return this.makeRequest(request);
    }

    deleteTaskList({ taskListId }) {
        const request = window.gapi.client.tasks.tasklists.delete({
            tasklist: taskListId
        });

        return this.makeRequest(request);
    }

    listTasks(taskListId) {
        const request = window.gapi.client.tasks.tasks.list({
            tasklist: taskListId
        });

        return this.makeRequest(request);
    }

    insertTask({ taskListId, ...params }) {
        const request = window.gapi.client.tasks.tasks.insert({
            tasklist: taskListId,
            ...params
        });

        return this.makeRequest(request);
    }

    updateTask({ taskListId, taskId, ...params }) {
        const request = window.gapi.client.tasks.tasks.update({
            tasklist: taskListId,
            task: taskId,
            id: taskId,
            ...params
        });

        return this.makeRequest(request);
    }

    deleteTask({ taskListId, taskId }) {
        const request = window.gapi.client.tasks.tasks.delete({
            tasklist: taskListId,
            task: taskId,
            id: taskId
        });

        return this.makeRequest(request);
    }

    makeRequest(requestObj) {
        return new Promise((resolve, reject) => {
            requestObj.execute(resp =>
                resp.error
                    ? reject(resp.error)
                    : resolve(resp.result));
        });
    }
}

export default new TaskService();
