const actions = {
  [types.GET_MATERIALS](context, payload){
    // http get then commit if need
    if(payload.source.children.length > 0){

    }
    else {
      // success commit  fail alert
      context.commit({
          type : types.SET_MATERIALS,
          target : payload.source,
          data : []
          })
    }
  },
  [types.TOGGLE_FOLDER](context, payload){
    context.dispatch({
      type : types.GET_MATERIALS,
      source : payload.source
    })
    context.commit({
      type : types.TOGGLE_FOLDER,
      target : payload.source
    })
  },
  [types.EXPAND_FOLDER](context, payload){
    context.dispatch({
      type : types.GET_MATERIALS,
      source : payload.source
    })
    context.commit({
      type : types.EXPAND_FOLDER,
      target : payload.source
    })
  },
  [types.UPLOAD_FILES](context, payload){

  },
  [types.MOVE_MATERIALS](context, payload.data){
    context.commit({
      type : types.MOVE_MATERIALS,
      data : payload.data,
      target : payload.target
    })
  },
  [types.COPY_MATERIALS](context, payload){

  },
  [types.CLIP_MATERIALS](context, payload){

  },
}
