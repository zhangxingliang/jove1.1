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
        item.floor = payload.target.floor + 1;
        item.father.children.remove(item);
        item.father = payload.target;
        item.checked = false;
        payload.target.children.push(item);
      });
  },
}
