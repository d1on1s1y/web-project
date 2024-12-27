<template>

    <div>

        <p>{{coef > 0 ? "Поставка" : "Замовлення"}}</p>
        <ul>
            <li v-for="(item) in dataArray" :key="item.id" >{{ item.drugName }} {{ item.quantity  }} 
                <button v-bind:id="item.id" @click="acceptOrderSupply">accept</button>  
            </li>
        </ul>
        
    </div>
</template>

<script>
import { useDrugStore } from '@/stores/drugStore';
import { useAuthStore } from '@/stores/authStore';
import { useLogStore } from '@/stores/logStore';

import { useOrderSupplyStore } from '@/stores/orderSupplyStore';

export default{
    props: {
    coef: {
        type: Number,
        required: true,
    },
    dataArray: {
      type: Array,
      required: true
    }
  },
  setup() {
        const drugStore = useDrugStore();
        const orderSupplyStore = useOrderSupplyStore();
        const logStore = useLogStore()
        const authStore = useAuthStore()

        return { drugStore, orderSupplyStore, logStore, authStore };
},
methods:{
    acceptOrderSupply(event){
        const item = this.orderSupplyStore.getOrederSupplyById(event.target.id);
        if (!this.drugStore.getDrugByName(item.drugName)) {
            return
        }
        //добавить функцию для поставок что бы добавлять новые препараты
        this.drugStore.changeQuantity(item.drugName, item.quantity * this.coef)
        this.orderSupplyStore.deleteOrderSupplyById(item.id)
        this.logStore.addLog(this.authStore.userInfo.name, (this.coef > 0 ? "Поставка" : "Замовлення") + ` ${item.drugName} в кількості ${item.quantity} прийнято` )
    },  
}
}
</script>

<style>
ul{
list-style: none;
}
</style>