AFRAME.registerComponent('rotate', {
    schema: {
        rotateY: { type: 'number', default: 1 }
    },
    tick: function () {
      let clicks = 0
        window.addEventListener("click",(e)=>{
          clicks +=1
        this.data.rotateY += clicks
        
        })
        let rotate = this.el.getAttribute('rotation')
        rotate.y = this.data.rotateY
        console.log(this.data.rotateY)
        this.el.setAttribute('rotation', {
            x: rotate.x,
            y: rotate.y,
            z: rotate.z
        })

    }

})