<template>
    <div class='canvas'>
        <canvas id="myCanvas" :width='width' :height= 'height'></canvas>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                width:  window.screen.width,
                height: window.screen.height
            }
        },
        mounted() {
            let jLength = this.width % 70;
            let iLength = this.height % 70;
            this.canvas(((window.watermark&&window.watermark.mobile) || '此处为水印'), '18px serif', jLength, iLength)   
        },
        methods:{
            canvas(text, font, jLength, iLength){
                var ctx = document.getElementById('myCanvas').getContext('2d');
                ctx.font = font;
                ctx.textBaseline = "top";
                for(var j = 0; j < jLength; j++){
                    for(var i = 0; i < iLength; i++){
                        ctx.save();
                        ctx.translate((j*2)*70,i*70);
                        ctx.rotate(50);
                        ctx.fillText(text, 0, 0, 70);
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
