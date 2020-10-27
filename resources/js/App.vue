<template>
  <div class="wrapper" style="background:#e9ecef">
    <transition name="fade" mode="out-in">
      <router-view name="LoginRouterView"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="HeaderComponent"></router-view>
    </transition>
    <transition name="slide" mode="out-in">
      <router-view name="SidebarComponent" v-show="this.$route.name != 'login'"></router-view>
    </transition>
    <div class="content-wrapper over-content" v-if="this.$route.name != 'login'">
      <transition name="fade" mode="out-in">
        <router-view name="ContentComponent"></router-view>
          </transition>
    </div>

    <!-- <router-view name="HeaderComponent"></router-view>
    <router-view name="SidebarComponent"></router-view>
    <router-view nam="ContentComponent"></router-view>-->

    <!-- <footer class="main-footer">
      <strong>
        Copyright &copy; 2014-2019
        <a href="http://adminlte.io">AdminLTE.io</a>.
      </strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.0.2
      </div>
    </footer>-->
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
/*.over-content {
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
!* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
} *!
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active,
.fade-leave-to-active {
  transition: all 0.3s ease;
}*/
</style>
