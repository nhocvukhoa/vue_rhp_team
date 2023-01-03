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
                <p v-global-highlight:background.delayed="'green'">Color style by directives global</p>
                <p v-local-hightlight:background.delayed.blink="{mainColor: 'green', secondColor: 'blue', delay: 500}">
                    Color style by directives local</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-hightlight': {
                bind (el, binding, vnode) {
                    var delay = 0;

                    if (binding.modifiers['delayed']) {
                        delay = 5000;
                    }

                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor; //green
                        let secondColor = binding.value.secondColor; //blue
                        let currentColor = mainColor; //green

                        //Lặp lại 1 lần
                        setTimeout(() => {
                            //Lặp lại nhiều lần
                            setInterval(() => {
                                currentColor == mainColor ? currentColor = secondColor : currentColor = mainColor;

                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay);
                    }
                },
            }
        }
    }
</script>

<style>

</style>
