<template>
    <div>
        <h1>From contact page</h1>
        <datacontact-component></datacontact-component>
    </div>
</template>

<script>
    //Tạo component local
    import DataContact from './DataContact.vue';
    export default {
        components: {
            'datacontact-component': DataContact
        }
    }
</script>
