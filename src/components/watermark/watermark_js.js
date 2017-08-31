function canvas(data){
    var width = window.screen.width;
    var height = window.screen.height;
    for(var i = 0; i < data.id.length; i++){
        console.log(i < data.id.length);
        document.getElementById(data.id[i]).width = width;
        document.getElementById(data.id[i]).height = height;
        var ctx = document.getElementById(data.id[i]).getContext('2d');
        let jLength = width % 70;
        let iLength = height % 70;
        ctx.font = data.fontsize;
        ctx.textBaseline = "top";
        for(var j = 0; j < jLength; j++){
            for(var k = 0; k < iLength; k++){
                ctx.save();
                ctx.translate((j*2)*70,k*70);
                ctx.rotate(50);
                ctx.fillText(data.watermark, 0, 0, 70);
                ctx.restore();
            }
        }
    }
    
}


export { 
         canvas 
        };