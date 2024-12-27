<template>
    <OrderSupplyProcessing :dataArray = 'orderSupplyStore.orders' :coef = '-1'/>
    <OrderSupplyProcessing :dataArray = 'orderSupplyStore.supplies' :coef = '1'/>
</template>

<script>
import OrderSupplyProcessing from './OrderSupplyProcessing.vue';
import { useOrderSupplyStore } from '@/stores/orderSupplyStore';

export default {
    components: {
        OrderSupplyProcessing
    },
    setup() {
        const orderSupplyStore = useOrderSupplyStore();

        return { orderSupplyStore };
}
}
</script>

<style></style>