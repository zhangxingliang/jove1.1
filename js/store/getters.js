const getters = {
  folderTree: state=>{
      return state.nodes;
    },
    currentNode: (state, getters)=>{
      if(state.navPath.length > 0){
        return state.navPath[state.navPath.length-1];
      }
      return {children:[]};
    },
    copingBoard: (state, getters)=>{
      return getters.currentNode.children.filter(item=>item.coping == true);
    }
}
