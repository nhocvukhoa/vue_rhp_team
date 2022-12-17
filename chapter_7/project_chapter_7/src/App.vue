<template>
    <div id="app">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <button class="btn btn-danger" @click="selectedComponent = 'app-card'">Card</button>
                    <button class="btn btn-primary" @click="selectedComponent = 'app-about'">About</button>
                    <button class="btn btn-secondary" @click="selectedComponent = 'app-contact'">Contact</button>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <keep-alive>
                        <component :is="selectedComponent"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from './components/Card.vue'
    import Contact from './components/Contact.vue'
    import About from './components/About.vue'

    export default {
        data: function() {
            return {
                cardTitle: 'Black Cat',
                selectedComponent: 'app-card'
            }
        },
        components: {
          'app-card': Card,
          'app-contact': Contact,
          'app-about': About
        }
    }
</script>

<style>

</style>
