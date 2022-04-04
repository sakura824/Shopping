<template>
  <div class="check-button" :class="{check:isChange}">
      <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    props: {
        isChange: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.check-button {
    background-color: rgb(236, 234, 234);
    border-radius: 50%;
}
.check {
    background-color: var(--color-tint);
}
</style>