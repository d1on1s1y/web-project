import { defineStore } from 'pinia';
import axios from 'axios';

export const useDrugStore = defineStore('drug',{
    state: () => ({
        drugs: []
    }),
    actions: {
        async changeQuantity(id, difference) { //Значения не обновляются нормально. ПОФИКСИТЬ
            const newValue = this.getDrugById(id).quantity + difference
            if(newValue >= 0){
                try {
                // Надсилаємо PATCH-запит для оновлення конкретного препарату
                const response = await axios.patch(`/api/drugs/${id}`, {quantity: newValue});
                // Оновлюємо препарат у локальному списку
                const index = this.drugs.findIndex((drug) => drug._id === id);
                if (index !== -1) {
                    this.drugs[index] = { ...this.drugs[index], ...response.data };
                }
            } catch (error) {
                console.error('Error updating drug:', error);
            }
        }
        },
        async fetchDrugs() {
            try {
              const response = await axios.get('/api/drugs'); // Запит до бекенду
              this.drugs = response.data; 
            //   console.log('Drugs fetched sucsessfuly');
            } catch (error) {
              console.error('Error fetching drugs:', error);
            }
          },
    },
    getters: {
        getDrugById: (state) => (id) => state.drugs.find(drug => drug._id === id)
    }
})