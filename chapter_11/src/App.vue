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
                <p v-global-highlight:background.delayed="'red'">Color style by directives global</p>
                <p v-local-hightlight:background.delayed="'green'">Color style by directives local</p>
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
