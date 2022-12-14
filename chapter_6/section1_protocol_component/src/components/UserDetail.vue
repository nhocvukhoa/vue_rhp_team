<template>
    <div>
        <h3>Information User Detail</h3>
        <p>List Details</p>
        <p>My name: {{ name }}</p>
        <p>My city: {{ myCity }}</p>
        <p>My age: {{ userAge }}</p>
        <p>My phone: {{ userPhone }}</p>
        <p>My parent money: {{ totalMoneyFn() }}</p>
        <p>Reverse city: {{ reverseCity() }}</p>
        <p>Reverse name: {{ reverseName() }}</p>
        <button @click="resetName">Reset name</button>
        <button @click="resetNameFn()">Reset name by callback</button>
        <button @click="resetPhone">Reset phone</button>
        <button @click="resetPhoneFn()">Reset phone by callback</button>
    </div>
</template>

<script>
    import { eventBus } from '../main.js'
    //props là dùng để truyền dữ liệu từ component cha sang component con
    //các component con có thể truyền các thông báo sự kiện sang component cha
    export default {
        props: {
            name: {
                type: Object,
                default: 'Anh Khoa',
            },
            myCity: {
                type: Object,
                default: 'Hội An', 
            },
            nameReseted: {
                type: Object,
            },
            resetNameFn: Function,
            resetPhoneFn: Function,
            userAge: {
                type: Number
            },
            userPhone: {
                type: String
            },
            totalMoneyFn: {
                type: Number
            }
        },
        methods: {
            reverseCity() {
                return this.myCity.split("").reverse().join("");
            },
            reverseName() {
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Ngọc Anh';
                this.$emit('nameReseted', this.name);
            },
            resetPhone() {
                this.userPhone = '0984072305';
                this.$emit('phoneReseted', this.userPhone);
            }
        },
        created() {
            eventBus.$on('ageEdited', (age) => {
                this.userAge = age;
            });

            eventBus.$on('phoneEdited', (phone) => {
                this.userPhone = phone;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
