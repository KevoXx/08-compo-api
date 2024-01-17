import { ref } from "vue"

const useCounter = (value=0) => {
    const counter = ref(value)   

    const increment = () => {
        counter.value++
    }

    const decrement = () => {
        counter.value--
    }

    return{
        counter,
        increment,
        decrement
    }

}

export default useCounter
