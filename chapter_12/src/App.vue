<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filter and Mixins</h1>
                <p>{{ text | tolowerCase }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello everyone, Vue Js'
            }
        },
        filters: {
            tolowerCase(text) {
                return text.toLowerCase();
            }
        }
    }
</script>

<style>

</style>
