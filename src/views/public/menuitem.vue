<template>
 <li class="item text-center">
   <router-link :to="link" active-class="active"><slot /></router-link>
 </li>
</template>

<script>
export default {
  props:['link']
}
</script>

<style lang="scss" scoped>
  .item{
    font-size: 18px;
    list-style: none;
    a{
      color: #fff;
      font-size: 1.2857rem;
      text-decoration: none;
      white-space: nowrap;
      &.active{
        display: inline-block;
        width: 100%;
        height: 62px;
        background: #1190ff;
      }
      &:hover{
        display: inline-block;
        width: 100%;
        height: 62px;
        background: #1190ff;
      }
    }
    .item{
      // background-color: rgba($color: #1190ff, $alpha: 0.2);
      border-bottom: 2px solid transparent;
      height: 40px;
      a{
        background: none;
      }
      &.active{
        // height: 40px;
        border-bottom-color: #1190ff;
        // background: none;
      }
      &:hover{
        // height: 40px;
        border-bottom-color:#1190ff;
        // background: none;
      }
    }
  }
</style>