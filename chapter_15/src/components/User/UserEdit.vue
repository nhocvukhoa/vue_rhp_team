<template>
    <div>
        <h1>User edit</h1>
        <p>Location: {{ $route.query.locate }}</p>
        <p>Browser: {{ $route.query.browser }}</p>
        <hr>
        <button class="btn btn-danger" @click="show">Something</button>
        <div style="height: 700px"></div>
        <h3 id="react">Đọc hướng dẫn react tại đây</h3>
        <div style="height: 1700px"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                status: false,
            }
        },
        methods: {
            show () {
                this.status = false;
                console.log(this.status);
            }
        },
        //trước khi rời router này để sang sử dụng router khác
        beforeRouteLeave (to, from, next) {
            if (this.status) {
                //Guard ko có tác dụng
                next()
            } else {
                if (confirm('Are you exit? All data is delete!')) {
                    next()
                } else {
                    next(false)
                }
            }
        }
    }
</script>

<style>
    
</style>
