<template>
    <div>
       <h1>This is Contact page</h1>
    </div>
</template>

<script>
    export default {
        deactivated() {
            console.log("Deactivated Contact Component");
        },
        activated() {
            console.log("Activated Contact Component");
        },
    }
</script>

<style scoped>
    
</style>
