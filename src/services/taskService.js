class TaskService {

    init() {
        return new Promise((resolve, reject) => {
            return window.gapi.client.load('tasks', 'v1', () =>
                window.gapi.client.load('plus', 'v1', () => resolve()));
        });
    }

    async getAllTaskList() {
        let listOfList = await this.listTaskLists()
        return await Promise.all(listOfList.items.map(async (list) => {
            let rep = await this.listTasks(list.id)
            return {
                ...list,
                tasks: Array.isArray(rep && rep.items) ? rep.items : []
            }
        }))
    }

    listTaskLists() {
        const request = window.gapi.client.tasks.tasklists.list();
        return this.makeRequest(request);
    }

    showTaskList(taskListId) {
        const request = window.gapi.client.tasks.tasklists.get({ tasklist: taskListId });
        return this.makeRequest(request);
    }


    listTasks(taskListId) {
        const request = window.gapi.client.tasks.tasks.list({
            tasklist: taskListId
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


    makeRequest(requestObj) {
        return new Promise((resolve, reject) => {
            requestObj.execute(resp =>
                resp.error
                    ? reject(resp.error)
                    : resolve(resp.result));
        });
    }

    // insertTaskList({ title }) {
    //     const request = window.gapi.client.tasks.tasklists.insert({ title });
    //     return this.makeRequest(request);
    // }

    // updateTaskList({ taskListId, title }) {
    //     const request = window.gapi.client.tasks.tasklists.update({
    //         tasklist: taskListId,
    //         id: taskListId,
    //         title
    //     });

    //     return this.makeRequest(request);
    // }

    // deleteTaskList({ taskListId }) {
    //     const request = window.gapi.client.tasks.tasklists.delete({
    //         tasklist: taskListId
    //     });
    //     return this.makeRequest(request);
    // }

    // insertTask({ taskListId, ...params }) {
    //     const request = window.gapi.client.tasks.tasks.insert({
    //         tasklist: taskListId,
    //         ...params
    //     });
    //     return this.makeRequest(request);
    // }

    // deleteTask({ taskListId, taskId }) {
    //     const request = window.gapi.client.tasks.tasks.delete({
    //         tasklist: taskListId,
    //         task: taskId,
    //         id: taskId
    //     });

    //     return this.makeRequest(request);
    // }
}

export default new TaskService();
