<template>
    <div>
        <p>This is result: {{ result }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            result() {
                return this.$store.getters.tenResult;
            }
        }
    }
</script>

<style>
    
</style>
