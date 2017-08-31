<template>
    <div class='canvas'>
        <canvas :id="names"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'IwjwFinWatermark',
        props: {
            names: {
                type: String,
                required: true
            },
            width: {
                type: Number,
                default: window.screen.width
            },
            height: {
                type: Number,
                default: window.screen.height
            },
            canvasData:{
                type: Object,
                default: function() {
                    return {
                                watermark: (window.watermark && window.watermark.mobile) || '此处为水印',
                                fontsize: '18px serif'
                            }
                }
            }
        },
        mounted() {
            this.canvas()   
        },
        methods:{
            canvas(canvasData){
                let { width, height, names } = this;
                let {fontsize, watermark} = this.canvasData;
                let jLength = width % 70;
                let iLength = height % 70;
                let canvas = document.getElementById(names);
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext('2d');
                ctx.font = fontsize;
                ctx.textBaseline = "top";
                for(var j = 0; j < jLength; j++){
                    for(var k = 0; k < iLength; k++){
                        ctx.save();
                        ctx.translate((j*2)*70,k*70);
                        ctx.rotate(50);
                        ctx.fillText(watermark, 0, 0, 70);
                        ctx.restore();
                    }
                }
            }
        }
    }
</script>

<style lang='scss'>
    canvas{ 
        margin: 0;
        opacity: 0.3;
        position: fixed;
        z-index: 0;
        overflow: hidden;
    }
</style>
