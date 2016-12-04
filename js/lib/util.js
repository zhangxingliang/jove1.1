Array.prototype.remove = function(item){
  var idx = this.indexOf(item)
  if(idx > -1){
      this.splice(idx, 1)
  }
  return idx
}


const util = {
  isArray: function(arr){
    return Object.prototype.toString.call(arr) === '[object Array]'
  },
  getHistories: function(node, arr){
    arr.unshift(node)
    if(node.father){
      util.getHistories(node.father, arr)
    }
  },
  deselectAllItems: function(items){
    util.isArray(items)&&items.forEach(item=>{
      item.checked = false
    })
  },
  getOperations: function(items){

  },
  throttle: function(delay, action){
    var last = 0
    return function(){
      var curr = +new Date()
      if (curr - last > delay){
        action.apply(this, arguments)
        last = curr
      }
    }
  },
  parseData: function(arr, father, option){
    var floor = 0
    if(father){
      floor = father.floor + 1
    }
    if(util.isArray(arr)){
      arr.forEach(item=>{
        item.floor = floor
        item.selected = false
        item.father = father
        item.openned = false
        if(item.children && util.isArray(item.children)){
          util.parseData(item.children, item)
        }
        else{
          item.children = []
        }
      });
      //may sort filter by option
    }
    else{
      arr = []
    }
    return arr
  }
}
