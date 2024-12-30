import { defineStore } from 'pinia';
import axios from 'axios';

export const useLogStore = defineStore('log',{
    state: () => ({
        logs:[]

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

            this.createLog(name, formattedDate, description)
        },
            // Створити новий лог
    async createLog(contributorName, time, description) {
        try {
          const newLog = { contributorName, time, description };
          const response = await axios.post('/api/logs', newLog); 
          this.logs = [...this.logs,response.data]; 
            // console.log('New log created sucsessfully ', response.data);

        } catch (error) {
          console.error('Error creating log:', error);
        }
      },
    async fetchLogs() {
        try {
          const response = await axios.get('/api/logs'); 
          this.logs = response.data; 
        } catch (error) {
          console.error('Error fetching logs:', error);
        }
      },
    },
    getters:{
        getLogsByContributorName: (state) => (name) => state.logs.filter(el => el.contributorName === name)
    }
})