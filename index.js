

// var createRect = function(width,height) {
//     return {
//             width:width,
//             height:height,
        
//             draw:function (){
//                 console.log('hello world')
//                 this.pinproparty()
//                 console.log(this)
//             },
//             pinproparty:function(){
//                 console.log('my Width is ' + this.width)
//                 console.log(' my height is ' +  this.height)
//             }
//     }
// }

// var Rect1 = createRect(20,30)
// Rect1.draw()

// var Rect2 = createRect(30,40)
// Rect2.draw()

var Reactangle = function (width,height){
        this.width=width
        this.height=height

        this.draw=function(){
            console.log('i am a Reactangle')
            this.prientProparty()
        }
        this.prientProparty=function(){
            console.log('my width is ' + this.width)
            console.log('my height is ' + this.height)
        }
}

 var Rect3 = new Reactangle(10,20)
 Rect3.draw()