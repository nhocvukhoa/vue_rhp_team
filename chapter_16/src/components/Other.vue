<template>
    <div>
        <p>This is result other: {{ tenResult }}</p>
        <p>This is name result other: {{ nameResult }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            // ... là three dots js
            ...mapGetters(['tenResult', 'nameResult'])
        }
    }
</script>

<style>
    
</style>
