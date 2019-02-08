<template>
<el-container class="navmenu-container">
  <el-menu class="navmenu" :collapse="isCollapse" @select="onSelectNavMenu">
    <el-menu-item index="1"><i class="el-icon-menu"></i><span>MENU #1</span></el-menu-item>
    <el-menu-item index="2"><i class="el-icon-menu"></i><span>MENU #2</span></el-menu-item>
    <el-menu-item index="3"><i class="el-icon-menu"></i><span>MENU #3</span></el-menu-item>
  </el-menu>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    }
  },

  methods: {
    onSelectNavMenu(index) {
      console.log('onSelectNavMenu', index)
      this.isCollapse = !this.isCollapse
    },
  },
}
</script>

<style>
.navmenu-container {
  height: 100%;
}

.navmenu {
  width: 180px;
  min-height: 100%;
}
</style>
