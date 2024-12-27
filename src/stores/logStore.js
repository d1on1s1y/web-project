import { defineStore } from 'pinia';

export const useLogStore = defineStore('log',{
    state: () => ({
        logs:[
            {
                contributorName: '',
                time: '',
                description:'',
            }
        ]

    }),
    actions:{
        addLog(name, description){
            const now = new Date();
            const formattedDate = now.toLocaleString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
            });
            const log = {
                contributorName: name,
                time: formattedDate,
                description: description,
            }
            this.logs = [...this.logs,log]
            // console.log(log);

        }
    },
    getters:{
        getLogsByContributorName: (state) => (name) => state.logs.filter(el => el.contributorName === name)
    }
})