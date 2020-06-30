<template>

  <ul class="wrapper">
  <!-- 遍历 router 菜单数据 -->
    <div :key="index" v-for="(item, index) in router" :class="{hidden:item.hidden}" class="menu-item">
      <menu-item v-if="!item.hidden" :link="item.path">
        <!-- 对于没有 children 子菜单的 item -->
        <span class="item-title text-center" v-if="!item.children">{{item.title}}</span>

        <!-- 对于有 children 子菜单的 item -->
        <template v-else>
          <span class="item-title text-center">{{item.title}}</span>
          <!-- 递归操作 -->
          <Menu :router="item.children"></Menu>
        </template>
      </menu-item>

      
    </div>
  </ul>
</template>

<script>
import MenuItem from './menuitem'
export default {
  name:'Menu',
  data(){
    return{
      toggleShow: false,
    }
  },
  props:['router'],
  components:{MenuItem},
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    display: flex;
    justify-content: space-between;
    .hidden{
      display: none;
    }
    .menu-item{
      width: 100%;
      text-align: center;
      &:hover{
        .wrapper{
          height: auto;
          transition: height 1s ease-in-out;
        }
      }
    }
    .item-title{
      // display: inline-block;
      // width: 100%;
      // height: 62px;
      line-height: 62px;
      font-size: 18px;
      color: #fff;
    }
    .wrapper{
      display: flex;
      flex-direction: column;
      height: 0;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,0.2);
      transition: height 1s ease-in-out;
      .item{
        width: 100%;
      }
      .item-title{
        color: #000;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
      }
    }
    
  }
</style>