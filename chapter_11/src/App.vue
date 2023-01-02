<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Default/Built-in Directives</h1>
                <p v-text="'Something...'"></p>
                <p v-html="'<h1>This is heading one</h1>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight>Color style by directives</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style>

</style>
