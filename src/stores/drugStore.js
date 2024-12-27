import { defineStore } from 'pinia';

export const useDrugStore = defineStore('drug',{
    state: () => ({
        drugs: [
        {
        name: "Ібупрофен",
        description: "-",
        price: 100,
        quantity: 0,
        },
        {
        name: "Ношпа",
        description: "-",
        price: 120,
        quantity: 5,
        },
        {
        name: "Корвалол",
        description: "-",
        price: 150,
        quantity: 6,
        },   
]}),
    actions: {
        changeQuantity(name, difference){
            const index = this.drugs.indexOf(this.getDrugByName(name))
            if (index === -1) {
                return
            } else {
                const newValue = this.drugs[index].quantity + difference
                if (newValue < 0) {
                    return
                }
                this.drugs[index].quantity = newValue
            }            
        },
    },
    getters: {
        getDrugByName: (state) => (name) => state.drugs.find(drug => drug.name === name)
    }
})