const mutations = {
  [types.SET_MATERIALS](state, payload){
    payload.target.children = payload.data
  },
  [types.TOGGLE_FOLDER](state, payload){
    payload.target.open = !payload.target.open
  },
  [types.EXPAND_FOLDER](state, payload){
      payload.target.open = true
  },
  [types.MOVE_MATERIALS](state, payload){
    payload.data.forEach(item=>{
        item.floor = payload.target.floor + 1
        item.father.children.remove(item)
        item.father = payload.target
        item.checked = false
        payload.target.children.push(item)
      })
  },
  [types.BACK_UP](state, payload){
    var l = state.navPath.length
    if(l > 1){
      state.navPath.splice(-1, 1)[0].selected = false
    }
    state.histories[state.histories.length-1].selected = true
  },
  [types.GET_NAVPATH](state, payload){
    if(state.navPath.length){
      state.navPath[state.navPath.length-1].selected = false;
    }
    payload.target.selected = true;
    state.navPath.length = 0 ;
    util.getHistories(payload.target, state.navPath);
  }
}
