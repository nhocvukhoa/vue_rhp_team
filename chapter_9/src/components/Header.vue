<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Item added</h3>
            <div class="progress">
                <div class="progress-bar bg-success" :style="{width: (itemCount / maxItem) * 100 + '%'}"></div>
                {{ itemCount }} / {{ maxItem }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       props: ['itemCount', 'maxItem']
    }
</script>

<style>

</style>
