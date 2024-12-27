<template>
  <table>      
      <thead>
        <tr>
          <th  v-for="key in Object.keys(dataArray[0])" :key="key.id">{{ key }}</th>
        </tr>
      </thead>
    <tr v-for="row in dataArray" :key="row.id" >
      <td v-for="value in Object.values(row)" :key="value.id">{{ value }}</td>
    </tr>
    </table>
  </template>

<script>

export default {
  props: {
    dataArray: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
th,
td {
  padding: 10px;
  border: 1px solid black;
}
table{
  margin: 20px;
  min-width: 330px;
  border-collapse: collapse;
  border: 3px solid black;
}
</style>