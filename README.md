# watermark test

watermark 会自动转成 img 添加到 类名为watermark的标签下

使用方法（详见：index.html）：

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
                    fontwidth: '60' //文字宽度，数值越大，间隔越大
                    rotate: '50' //文字倾斜角度
                  }
            是否必填 否

    opacity: 水印透明度
             类型 String
             默认值 0.3
             是否必填 否