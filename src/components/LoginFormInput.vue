<template>
    <div class="form-input">
        <label>{{label}}</label>
        <input :type="type" :value="modelValue" @input="onInput" class="input-field" :placeholder="placeholder" />
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script>


export default {
    props: {
        label: String,
        modelValue: String,
        error: String,
        placeholder: String,
        type: {
            type: String,
            default: 'text'
        }
    },methods:{
        onInput(event) {
            this.$emit('update:modelValue', event.target.value);
            this.$emit('validate');
        }
    }
}

</script>

<style>
.input-field {
    width: 90%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    background-color: white;
    color: var(--text-color);
  }

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>