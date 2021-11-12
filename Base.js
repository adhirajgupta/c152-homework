AFRAME.registerComponent('base', {
    schema: {
        height:{type:'number',default:50},
        radius:{type:'number',default:20}
    },

    init: function () {
      // Do something when component first attached.
      this.el.setAttribute('geometry',{
          primitive:'circle',
          radius:this.data.radius,
        //   height:this.data.height
      })
      console.log(this.el.getAttribute('material'))
      this.el.setAttribute('material',{color:'#defabc'})
    },

    update: function () {
      // Do something when component's data is updated.

    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
            // console.log(time)
            // console.log(timeDelta)
      // Do something on every scene tick or frame.
    }
});
