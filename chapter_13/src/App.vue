<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                <h1>Animations</h1>
                <hr>
                <select class="form-control mb-md-3" v-model="typeAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-block btn-success" @click="show =! show">Show notification</button>
                <transition v-bind:name="typeAnimation">
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
                <!-- out-in giúp chuyển động chậm hơn -->
                <transition v-bind:name="typeAnimation" mode="out-in">
                    <div class="alert alert-success mt-md-3" v-if="show" key="success">
                        This is something about notification from success
                    </div>
                    <div class="alert alert-danger mt-md-3" v-else key="danger">
                        This is something about notification from danger
                    </div>
                </transition>
                <hr>
                <button class="btn btn-success mb-md-3" @click="status =! status">Add or Remove</button>
                <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
                        <div style="width: 200px; height: 200px; background: lightblue" v-if="status"></div>
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
                typeAnimation: 'fade',
                status: false,
            }
        },
        methods: {
            beforeEnter(el) {
                console.log("beforeEnter");
            },
            enter(el, done) {
                console.log("enter");
                done();
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');//Không làm gì nên ko có
            },
            beforeLeave(el) {
                console.log("beforeLeave");
            },
            leave(el, done) {
                console.log('leave');
                done();
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
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
