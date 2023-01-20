<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link
                        tag="li"
                        class="nav-item"
                        to="/"
                        active-class="active"
                        exact><a class="nav-link">Home</a></router-link>
                    <router-link
                        tag="li"
                        class="nav-item"
                        to="/user"
                        active-class="active"><a class="nav-link">User</a></router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>

</script>

<style>
    
</style>
