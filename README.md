# watermark test
使用方法：
    <iwjw-fin-watermark :width='width' :height='height' :canvasData='canvasData'></iwjw-fin-watermark>

    width:  画布宽度 
            类型 Number 
            默认值 屏幕宽度
    height: 画布高度 
            类型 Number 
            默认值 屏幕高度
    canvasData: 显示数据 
            类型 Object 
            默认值 {
                    watermark: (window.watermark && window.watermark.mobile) || '此处为水印', //水印显示文字
                    fontsize: '18px serif'  //文字字体，大小
                  }