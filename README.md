# watermark test
使用方法（详见：index.html）：

    names:  画布ID
            类型 String
            默认值 无
            是否必填 是

    width:  画布宽度 
            类型 Number 
            默认值 屏幕宽度
            是否必填 否

    height: 画布高度 
            类型 Number 
            默认值 屏幕高度
            是否必填 否

    canvasdata: 显示数据 
            类型 Object 
            默认值 {
                    watermark: (window.watermark && window.watermark.mobile) || '此处为水印', //水印显示文字
                    fontsize: '18px serif'  //文字字体，大小
                  }
            是否必填 否
            
    opacity: 水印透明度
             类型 String
             默认值 0.3
             是否鼻涕 否