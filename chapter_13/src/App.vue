<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-block btn-success" @click="show =! show">Show notification</button>
                <transition name="fade">
                    <div class="alert alert-success mt-md-3" v-if="show">This is something about notification</div>
                </transition>
                <transition name="slide">
                    <div class="alert alert-warning mt-md-3" v-if="show">This is something about notification</div>
                </transition>
                <transition appear
                    enter-class=""
                    enter-active-enter="animated bounceOutDown"
                    leave-class=""
                    leave-active-class="animated hinge">
                        <div class="alert alert-danger mt-md-3" v-if="show">This is something about notification</div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 3s ease;
    }

    .fade-leave-to {
        opacity: 1;
    }
    
    .fade-leave-active {
        transition: opacity 3s ease;
        opacity: 0;
    }

    /*Slide*/
    .slide-enter {

    }

    .slide-enter-active {
        transition: opacity .5s;
        animation: slide-in .5s ease-out forwards;
    }

    .slide-leave {

    }

    .slide-leave-active {
        transition: opacity .5s;
        animation: slide-out .5s ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(100px);
        }
        to {
            transform: translateY(0);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
        } 
        to {
            transform: translateY(20px);
        }
    }
</style>
