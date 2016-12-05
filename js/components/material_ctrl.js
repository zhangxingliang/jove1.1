const material_ctrl = {
  template: "#material_ctrl",
  props: {
    data: Object
  },
  data: function(){
    return {
      intervalId : -1
    }
  },
  methods: {
    dblclick: function(event){

    }
  },
  computed: {
    material(){
      return this.data
    }
  }
}
