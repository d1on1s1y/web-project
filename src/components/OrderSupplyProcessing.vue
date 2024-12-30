<template>

    <div>

        <p>{{coef > 0 ? "Поставка" : "Замовлення"}}</p>
        <ul>
            <li v-for="(item) in dataArray" :key="item._id" >{{ drugStore.getDrugById(item.drugІd).name }} {{ item.quantity  }} 
                <button v-bind:id="item._id" @click="acceptOrderSupply">accept</button>  
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

        drugStore.fetchDrugs();
        orderSupplyStore.fetchOrders()
        orderSupplyStore.fetchSupplies()

        return { drugStore, orderSupplyStore, logStore, authStore };
},
methods:{
    acceptOrderSupply(event){
        const item = this.orderSupplyStore.getOrederSupplyById(event.target.id);
        
        if (!this.drugStore.getDrugById(item.drugІd)) {
            return
        }

        this.drugStore.changeQuantity(item.drugІd, item.quantity * this.coef)
        this.orderSupplyStore.deleteOrderSupplyById(item._id)

        this.logStore.addLog(this.authStore.userInfo.name, (this.coef > 0 ? "Поставка" : "Замовлення") + ` ${this.drugStore.getDrugById(item.drugІd).name} в кількості ${item.quantity} прийнято` )
    },  
}
}
</script>

<style>
ul{
list-style: none;
}
</style>