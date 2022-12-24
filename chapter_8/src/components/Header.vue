<template>
   <div class="row">
       <div class="col-sm-12">
            <h3>Item added</h3>
            <div class="progress">
                <div class="progress-bar bg-success" :style="{width: (itemCount / maxItems) * 100 + '%'}"></div>
                <span>{{ itemCount }} / {{ maxItems }}</span>
            </div>
       </div>
   </div>
</template>

<script>
    export default {
       props: ['itemCount', 'maxItems']
    }
</script>

<style scoped>

</style>
