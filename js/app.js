// init app and start
const app = new Vue({
  store,
  data: {

  },
  components: {
    'tree-ctrl' : tree_ctrl,
    'material-ctrl' : material_ctrl,
    'nav-path-ctrl' : nav_path_ctrl

  },
  computed: {
    nodes(){
      return this.$store.getters.folderTree;
    },
    materials(){
      return this.$store.getters.currentNode.children;
    },
    materialsCount(){
      return this.materials.length;
    }
  },
  methods: {
    advanceSearch(){

    },
    taskMonitor(){

    }
  }
}).$mount('#app')
