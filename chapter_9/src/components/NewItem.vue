<template>
    <div class="row mt-4">
        <div class="col-sm-12">
            <div class="form-group input-area">
                <label for="">Nhập câu hỏi</label>
                <textarea rows="10" v-model="item"></textarea>
            </div>
            <button class="btn btn-success" @click.prevent="createQuestion">Thêm câu hỏi</button>
            <hr>
        </div>
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
            createQuestion() {
                for (var i = 0; i < this.items.length; i++) {
                    if (this.items[i].toLowerCase() === this.item.toLowerCase()) {
                        return alert('Câu hỏi này đã tồn tại');
                    }
                }

                if (this.item == '') {
                    return false;
                }

                this.$emit('itemAdded', this.item);
                this.item = '';
            }
        }
    }
</script>

<style scope>
    .input-area {
        display: flex;
        flex-direction: column;
    }
</style>
