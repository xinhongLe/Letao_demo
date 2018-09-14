/**
 * Created by win7 on 2018/9/12.
 */
$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick ����ϵ����ϵ��Խ�󣬹����ٶ�Խ������������ԽС��Ĭ��ֵ0.0006
    });

    $.ajax({
        type:"get",
        url:"/category/queryTopCategory",
        success:function(res){
            console.log(res)
           var html =  template("first-tmp",res);
            $(".content-first").html(html);

            //һ�������Ƿ�������
            if(res.rows.length){
                $(".content-first").find("a").eq(0).addClass("active");
                var id = res.rows[0].id;
                getSecondCategory(id);
            }
        }
    })

    $(".content-first").on("click","a",function(){
        var firstId = $(this).data("id");
        $(this).addClass("active").siblings("a").removeClass("active");

        getSecondCategory(firstId);
    })
})

function getSecondCategory(id){
    $.ajax({
        url:"/category/querySecondCategory",
        type:"get",
        data:{
            id:id
        },
        success:function(res){
            console.log(res)
            var html = template("second-tmp",res);
            $(".items-second").html(html)
        }
    })
}