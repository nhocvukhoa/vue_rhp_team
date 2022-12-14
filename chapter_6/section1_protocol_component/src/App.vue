<template>
    <div class="container">
        <div class="row">
            <app-user></app-user>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue'

    export default {
        components: {
            'app-user': User
        }
    }
</script>
