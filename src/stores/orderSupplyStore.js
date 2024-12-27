import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useOrderSupplyStore = defineStore('orderSupply',{
    state: () => ({
        orders: [
            {
            drugName: 'Ібупрофен',
            quantity: 2,
            id: nanoid()
            },
            {
            drugName: 'Парацетомол',
            quantity: 5,
            id: nanoid()
            },
            {
            drugName: 'Клофелін',
            quantity: 14,
            id: nanoid()
            },
            {
            drugName: 'Ношпа',
            quantity: 1,
            id: nanoid()
            },
            {
            drugName: 'Ношпа',
            quantity: 2,
            id: nanoid()
            }, 
            {
            drugName: 'Ношпа',
            quantity: 1,
            id: nanoid()
            },    
        ],
        supplies: [
            {
            drugName: 'Ібупрофен',
            quantity: 2,
            id: nanoid()
            },   
        ]}),
        actions:{
            deleteOrderSupplyById(id){
                this.orders = this.orders.filter(el => el.id !== id)
                this.supplies = this.supplies.filter(el => el.id !== id)
            }
        },
        getters:{
        getOrederSupplyById: (state) => (id) => state.orders.find(el => el.id === id) ? state.orders.find(el => el.id === id) : state.supplies.find(el => el.id === id)
    }
    })