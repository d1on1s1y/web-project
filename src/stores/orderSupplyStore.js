import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderSupplyStore = defineStore('orderSupply',{
    state: () => ({
        orders: [],
        supplies: []}),
        actions:{
            // deleteOrderSupplyById(id){
            //     this.orders = this.orders.filter(el => el._id !== id)
            //     this.supplies = this.supplies.filter(el => el._id !== id)
            // }
            async deleteOrderSupplyById(id){
                //для демонстрації можна закомментити блок іф і розкомментити нижній код
                if (this.orders.filter(el => el._id !== id)) {
                    
                    try {
                        await axios.delete(`/api/orders/${id}`)
                        this.orders = this.orders.filter(el => el._id !== id)
                        
                    } catch (error) {
                        console.error('Error deleting order:', error);
                    }
                    return
                }

                try {
                    await axios.delete(`/api/supplies/${id}`)
                    this.supplies = this.supplies.filter(el => el._id !== id)
                    
                } catch (error) {
                    console.error('Error deleting supply:', error);
                }
                
                
                
                // this.orders = this.orders.filter(el => el._id !== id)
                // this.supplies = this.supplies.filter(el => el._id !== id)
            },
            async fetchOrders() {
                try {
                  const response = await axios.get('/api/orders'); 
                  this.orders = response.data; 
                } catch (error) {
                  console.error('Error fetching orders:', error);
                }
              },
              async fetchSupplies() {
                try {
                  const response = await axios.get('/api/supplies'); 
                  this.supplies = response.data; 
                } catch (error) {
                  console.error('Error fetching supplies:', error);
                }
              },

        },
        getters:{
        getOrederSupplyById: (state) => (id) => state.orders.find(el => el._id === id) ? state.orders.find(el => el._id === id) : state.supplies.find(el => el._id === id)
        //Блять, якого хуя, видає андефайндед// уже не выдає
    }
    })