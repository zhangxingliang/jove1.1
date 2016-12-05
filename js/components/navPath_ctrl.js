const nav_path_ctrl = {
    template: "#nav_path_ctrl",
    computed: {
      navPath(){
        return this.$store.state.navPath
      }
    },
    methods: {
      click: function (node) {
        this.$store.dispatch({
          type : types.GET_MATERIALS,
          source : node
        })
      },
      backUp: function () {
          this.$store.commit({
            type : types.BACK_UP
        });
      }
    }
};
