AFRAME.registerComponent('car', {
    schema: {
        lightColor: { type: 'string', default: '#ff0000' }
    },

    init: function () {
        object = this.el.getObject3D('mesh')
        console.log(object)

         
        color = this.el.getAttribute('light')
        console.log("Color - ", color.color)
        console.log(this.data)
        console.log(this.el.getAttribute('gltf-model'))
        this.el.setAttribute('light', {
            color:this.data
        })
        console.log(this.el.getAttribute('light'))
        // console.log(this.el)
    },

    update: function () {
        // Do something when component's data is updated.
    },

    remove: function () {
        // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
    }
});
