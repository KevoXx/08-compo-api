<template>
    <div>
        <h1>Counter</h1>
        <p>Current count: {{ counter }}</p>
        <div style="display: flex; justify-content: space-between; width: 200px;">
            <button class="button" @click="increment">Increment</button>
            <button class="button" @click="decrement">Decrement</button>
        </div>
    </div>
</template>

<script setup>
import useCounter from '../composables/useCounter'

const { counter, increment, decrement } = useCounter(8)


</script>

<style  scoped>
.button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
</style>