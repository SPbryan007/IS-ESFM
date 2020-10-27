<template>
  <!-- <div class="wrapper" style="background:#e9ecef">
    <transition name="fade" mode="out-in">
      <router-view name="LoginRouterView"></router-view>
    </transition>

  </div>-->
  <div>
    <el-header>Cabecera</el-header>
    <el-container>
      <el-aside width="220px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigator One</span>
            </template>
            <el-menu-item-group>
              <span slot="title">Group One</span>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">item four</span>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view name="ContentComponent"></router-view>
        </transition>
      </el-main>
    </el-container>
  </div>
  <!-- ./wrapper -->
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      //   loading: false,
      //   initiated: false,
    };
  },
  mounted() {
    // this.init();
  },
  methods: {
    // init() {
    //   console.log(this.$router.name);
    // }
    //...mapState(["authenticated"])
    // init() {
    //   axios
    //     .get("/auth/init")
    //     .then(response => {
    //       this.user = response.data.user;
    //       if (response.data.user) {
    //         this.$router.push("/dasboard");
    //       }
    //       console.log(reponse.data.user);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
  //   beforeCreate() {
  //     axios
  //       .get("/auth/init")
  //       .then(response => {
  //         console.log(response.data);
  //         this.user = Response.data;
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }
};

// $(function() {
//     $("#datatableProveedor").DataTable();
//     // $("#example2").DataTable({
//     //     paging: true,
//     //     lengthChange: false,
//     //     searching: false,
//     //     ordering: true,
//     //     info: true,
//     //     autoWidth: false
//     // });
// });
</script>
<style>
.over-content {
  overflow: hidden;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-5%);
}

.moveUp-enter-active {
  animation: fadeIn 0.3s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.5s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-200px);
  }
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} */
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,
.fade-leave-to-active {
  transition: all 0.3s ease;
}
</style>
