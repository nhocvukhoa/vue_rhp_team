<template>
    <div class="row mb-2">
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
        props: ['items'],
        data: function() {
            return {
                item: ''
            }
        },
        methods: {
            createNewItem() {
               for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i].toLowerCase() === this.item.toLowerCase()) {
                        return alert('Item name is already!');
                    }
                }

                if (this.item == '') {
                    return false;
                } else {
                    this.$emit('itemAdded', this.item);
                    this.item = '';
                }
            }
        }
    }
</script>

<style scoped>

</style>
