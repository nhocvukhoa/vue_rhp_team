<template>
    <div>
        <router-view name="page-header"></router-view>
        <div class="container">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
    }
</script>

<style>
    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slide-out 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }

    @keyframes slide-out {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(30px);
        }
    }
</style>
