<template>
    <section class="home">
        <div>联系人{{index+1}}</div><br/>
        <span>姓名：</span>
        <input type="text" v-model="itemC.name" placeholder="请输入姓名" /><br/>
        <span>年龄：</span>
        <input type="text" v-model="itemC.phone" placeholder="请输入电话" /><br/>
        <span>性别：</span>
        <div class="sex" v-for="(el,idx) in sexType" :key="idx" @click="sexC(el)">
            <i :class="{choose: el.isSelected}"></i>
            <p>{{el.name}}</p>
        </div>
        <button @click="deleteP">删除</button>
        <hr/>
    </section>
</template>
<script>
export default {
    props: {
        itemC: {
            type: Object,
            default() {
                return {};
            }
        },
        index: {
            type: Number,
            required: true
        },
    },
    data() {
        return {
            sexType: [{ id: 0, name: '男', isSelected: false }, { id: 1, name: '女', isSelected: false }],
            choose: 'choose',
        };
    },
    methods: {
        deleteP() {
            this.$emit('deleteIndex', this.index);
        },
        sexC(val) {
            if (val.isSelected === false) {
                val.isSelected = true;
                this.sexType.forEach((el) => {
                    if (el.id !== val.id) {
                        el.isSelected = false;
                    }
                });
            } else {
                val.isSelected = false;
            }
            this.itemC.sex = val.name;
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
    input {
        border: 1px solid #ccc;
    }
    .sex {
        display: flex;
        i {
            width: 16px;
            height: 16px;
            border-radius: 8px;
            border: 1px solid #ccc;
        }
        .choose {
            background: orange;
        }
    }
}
</style>
