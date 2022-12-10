<template>
    <div>
        <p>My address: {{ address }}</p>
        <hr>
        <button @click="showPhone">Show my phone</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                address: '30 Nguyễn Công Trứ, Hội An'
            }   
        },
        methods: {
            showPhone() {
                this.address = '0965072230';
            }
        },
    }
</script>
