<template>
    <div class='canvas' v-show='false'>
        <canvas id="watermark"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'IwjwFinWatermark',
        props: {
            width: {
                type: Number,
                default: window.screen.width
            },
            height: {
                type: Number,
                default: window.screen.height
            },
            canvasdata:{
                type: [Object,Array],
                default: function() {
                    return {
                        watermark: (window.watermark && window.watermark.mobile) || '此处为水印',
                        fontsize: '18px Calibri',
                        fontwidth: '60',
                        rotate: '50'
                    }
                }
            },
            opacity: {
                type: String,
                default: '0.3'
            }
        },
        mounted() {
            let ctx = this.canvas();
            let src = this.canvasToImage(ctx);
            let id = document.getElementsByClassName('watermark');
            for(let i = 0; i< id.length; i++){
                id[i].style.backgroundImage = `url(${src})`;
                id[i].style.opacity = this.opacity;
            }
        },
        methods:{
            canvas(){
                let { width, height, names } = this;
                let {fontsize, watermark, fontwidth, rotate} = this.canvasdata;
                let jLength = width / 50;
                let iLength = height / 50;
                let canvas = document.getElementById('watermark');
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.font = fontsize;
                ctx.textBaseline = "top";
                for(var j = 0; j < jLength; j++){
                    for(var k = 0; k < iLength; k++){
                        ctx.save();
                        ctx.translate((j*2)*fontwidth,k*fontwidth);
                        ctx.rotate(rotate);
                        ctx.fillText(watermark, 0, 0, fontwidth);
                        ctx.restore();
                    }
                }
                
                return ctx;
            },
            canvasToImage(ctx){
                console.log(ctx);
                var image = new Image();
                image.src = ctx.canvas.toDataURL("image/png");
                return image.src;
            }
        }
    }
</script>

<style lang='scss'>
    .canvas{ 
        margin: 0;
        position: fixed;
        z-index: 0;
        overflow: hidden;
    }
</style>
