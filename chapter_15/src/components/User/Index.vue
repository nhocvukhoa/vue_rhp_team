<template>
    <div>
        <h1>Please select one user to manage:</h1>
        <ul class="list-group">
            <router-link class="list-group-item"
                tag="li"
                to="/user/1">User 01</router-link>
            <router-link class="list-group-item"
                tag="li"
                to="/user/2">User 02</router-link>
            <router-link class="list-group-item"
                tag="li"
                to="/user/3">User 03</router-link>
            <router-link class="list-group-item"
                tag="li"
                to="/user/4">User 04</router-link>
        </ul>
    </div>
</template>

<script>

</script>

<style>
    .list-group-item {
        cursor: pointer;
    }
</style>
