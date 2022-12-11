<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers></servers>
            <server-details></server-details>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue'
    import Servers from './components/Servers/Servers.vue'
    import ServerDetails from './components/Servers/ServerDetails.vue'
    import Footer from './components/Shared/Footer.vue'

    export default {
        components: {
            appHeader: Header, //appHeader sẽ được phiên dịch thành app-header
            Servers, //Servers sẽ được phiên dịch thành servers
            'server-details': ServerDetails, //đặt tên component kiểu này cho khỏe
            'app-footer': Footer
        }
    }
</script>
