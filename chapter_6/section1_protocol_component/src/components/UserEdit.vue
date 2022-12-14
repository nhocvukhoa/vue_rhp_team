<template>
    <div>
        <h3>You may edit user here</h3>
        <p>Edit me!</p>
        <p>My Age: {{ userAge }}</p>
        <p>My phone: {{ userPhone }}</p>
        <button @click="changeAge">Change age</button>
        <button @click="changePhone">Change phone</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    export default {
        props: {
            userAge: {
                type: Number
            },
            userPhone: {
                type: String
            },
        },
        methods: {
            changeAge() {
                this.userAge = 30;
                //this.$emit('ageEdited', this.userAge);
                eventBus.$emit('ageEdited', this.userAge);
            },
            changePhone() {
                this.userPhone = '0984072305';
                // eventBus.$emit('phoneEdited', this.userPhone);
                eventBus.changePhone(this.userPhone);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
