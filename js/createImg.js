$(document).ready(function(){
    //var tlfyMaxScore = 248.5;
    $('#cetTypeInput').change(function(){
        var p1=$(this).children('option:selected').val();//这就是selected的值
        if(p1=="吴亦凡"){$("#startphoto").attr("src","images/1.jpg")}
        if(p1=="宋小宝"){$("#startphoto").attr("src","images/2.jpg")}
        if(p1=="岳云鹏"){$("#startphoto").attr("src","images/3.jpg")}
        if(p1=="李易峰"){$("#startphoto").attr("src","images/4.jpg")}
        if(p1=="胡歌"){$("#startphoto").attr("src","images/5.jpg")}
        if(p1=="陈翔"){$("#startphoto").attr("src","images/6.jpg")}
        if(p1=="霍建华"){$("#startphoto").attr("src","images/7.jpg")}
        if(p1=="鹿晗"){$("#startphoto").attr("src","images/8.jpg")}
        });
    $("#createImgBtn").on("click",function() {
        var youName = $("#youNameInput").val();
        var schoole = $("#schooleInput").val();
        var cetType = $("#cetTypeInput").find("option:selected").html();
        if (isNull(youName)) {
            alert("请填写姓名");
            return;
        }
        if (isNull(schoole)) {
            alert("请填写学校");
            return;
        }
        $("#youName").html(youName);
        $("#schoole").html(schoole);
        $("#cetType").html(cetType);
        $("div.collectInfo").hide();
        $("div.cetPanel").show();
        html2canvas( document.body ,{  		
            onrendered: function(canvas){
                //alert( canvas.toDataURL());
               /* $('#downloadBtn').show().attr( 'href' , canvas.toDataURL("image/png") ) ;
                $('#downloadBtn').attr( 'download' , '我的'+cetType+'成绩单.png' ) ;
                $("div.cetPanel").hide();*/
                $("body").append("<h3 id='tempTitle' style='width:100%;text-align:center'>＞请长按保存图片或截图然后发朋友圈吧＜</h3>");
                //$("div.cetPanel").hide();
               /* var downloadBtn = $('<br/><a href="'+canvas.toDataURL("image/png")+'" download="我的'+cetType+'成绩单.png" style="font-size:1.5rem">下载成绩单</a>');
                $("body").append(downloadBtn);*/
                var image = new Image();
                image.src = canvas.toDataURL("image/png");
                image.width = $(document).width();
                document.body.appendChild(image);
                setTimeout(function(){
                    $("#tempTitle").hide();
                    $("body,html").css("background","none");
                },3000);
            },
            background:"#ffffff",
            height:677,
            width:440
        });
    });
});

function isNull(val){
    if(!val || val=="null" || val=="undefined"){
        return true;
    }
    return false;
}

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
  WeixinJSBridge.call('hideOptionMenu');
}, false);
