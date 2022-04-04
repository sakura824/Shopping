<template>
    <div class="right-up" v-if="subcategories">
        <div class="item" v-for="(item,index) in subcategories.list" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subcategories: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
.right-up {
    flex-wrap: wrap;
   display: flex;
     
}
.item {
     width: 25%;
     margin: 10px;
     text-align: center;
}
.item img {
    width: 70px;
}
</style>