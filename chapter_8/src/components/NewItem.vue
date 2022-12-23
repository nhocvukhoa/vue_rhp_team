<template>
    <div class="row">
        <form>
            <div class="col-sm-8 col-md-6 form-group">
                <label for="">Nhập câu hỏi</label>
                <textarea class="form-group" v-model="item" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="col-sm-8 col-md-6">
                <button class="btn btn-success" @click.prevent="createNewItem">Add item</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                item: ''
            }
        },
        methods: {
            createNewItem() {
                this.$emit('itemAdded', this.item);
                this.item = '';
            }
        }
    }
</script>

<style scoped>

</style>
