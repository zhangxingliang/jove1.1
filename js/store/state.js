var t = [
            {
              name: 'MaterialList',
              selected: false,
              checked:false,
              open:false,
              path: '/MaterialList',
              floor: 1,
              type : "folder",
              children:[]
            },
            {
              name: 'Search Result',
              selected: false,
              checked:false,
              open:false,
              path: '/Search Result',
              floor: 1,
              type : "folder",
              children:[]
            }
          ];
          var q = [
                      {
                        name: 'MaterialList',
                        selected: false,
                        checked:false,
                        open:false,
                        path: '/MaterialList',
                        floor: 2,
                        type : "folder",
                        father:t[0],
                        children:[]
                      },
                      {
                        name: 'Search Result',
                        selected: false,
                        checked:false,
                        open:false,
                        path: '/Search Result',
                        floor: 2,
                        type : "folder",
                        father:t[0],
                        children:[]
                      }
                    ];
t[0].children = q;
const state = {
  navPath: [],
  nodes: t,
  mousePosition : {
    x : 0,
    y : 0
  },
  menuStatus: false,
  dragData: {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  },
  clipBoard: []
}
