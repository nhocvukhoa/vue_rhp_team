<template>
    <div>
       <h1>This is About page</h1>
       <button @click="counter++">Increase number</button>
       <p>{{ counter }}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                counter: 0
            }
        },
        created() {
            console.log('Created About Component');
        },
        destroyed() {
            console.log("Destroyed About Component");
        },
        //Dừng 1 lifecycle nhưng ko phải là xóa như destroyed, dữ liệu vẫn còn
        deactivated() {
            console.log("Deactivated About Component");
        },
        //Thông báo bắt đầu 1 lifecycle
        activated() {
            console.log("Activated About Component");
        },
    }
</script>

<style scoped>
    
</style>
