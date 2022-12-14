<template>
    <div class="component col-12">
        <h1 class="title">The User component</h1>
        <p>I am {{ name }}, {{ age }} years old and my phone here: {{ phone }}</p>
        <p>I am from Hội An</p>
        <p>Money mother: {{ moneyMother }}</p>
        <p>Money father: {{ moneyFather }}</p>
        <button @click="changeName">Change my name</button>
        <hr>
        <div class="row">
             <div class="col-xs-6 col-sm-6">
                <app-user-detail v-bind:name="name" @nameReseted="name = $event" 
                    :resetNameFn='resetName' :userAge="age" :userPhone="phone"
                    @phoneReseted="phone = $event" :resetPhoneFn="resetPhone"
                    :totalMoneyFn='totalMoney'></app-user-detail>
            </div>
             <div class="col-xs-6 col-sm-6">
                <app-user-edit :userAge="age" @ageEdited="age = $event"
                    :userPhone="phone"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
        import UserDetail from './UserDetail.vue'
        import UserEdit from './UserEdit.vue'

        export default {
            data: function() {
                return {
                    name: 'Ngọc Anh',
                    city: '',
                    nameReseted: '',
                    age: 18,
                    phone: '0965072230',
                    moneyFather: 200,
                    moneyMother: 400,
                }
            },
            methods: {
                changeName() {
                    this.name = 'Tấn Văn'
                },
                //use callback reset name
                resetName() {
                    this.name = 'Ngọc Anh'
                },
                //use callback reset phone
                resetPhone() {
                    this.phone = '0984072305'
                },
                //use callback total money
                totalMoney() {
                    return this.moneyFather + this.moneyMother;
                }
            },
            components: {
                'app-user-detail': UserDetail,
                'app-user-edit': UserEdit,
            }    
        }
</script>

<style scope>
    div.component {
        background-color: lightblue;
        padding: 30px;
    }

    .title {
        text-align: center;
    }
</style>
