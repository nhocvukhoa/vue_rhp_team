<template>
    <div>
        <div class="title">
            <!-- slot default: ta định nghĩa giá trị cho slot đấy -->
            <slot name="title"></slot>
            <span style="color: #000;">
                <slot name="subTitle">aaaaaaaaaaaa</slot>
            </span>
        </div>
        <div class="content">
            <!-- slot không có name(chưa được đăng ký sẽ nhảy vào đây): default slot -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['cardWords']
    }
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, .6);
        padding: 30px;
        margin: 20px auto;
        text-align: center;
    }

    h2 {
        color: red;
    }

    .title {
        font-style:italic;
    }
</style>
