/**
 * Created by win7 on 2018/9/13.
 */


/*
 实现用户点击搜索按钮跳转到搜索结果页

 1.给搜索按钮添加点击事件
 2.获取用户输入的搜索关键字
 3.判断用户是否输入了搜索关键字
 4.如果用户没有输入 阻止跳转 并且给出提示
 5.如果用户输入了 跳转到搜索结果页面 并且要将用户输入的关键字带到这个页面去

 */

/*
 实现历史关键字存储

 1.准备一个存储关键字的数组
 2.当用户点击搜索按钮的时候 将用户输入的关键字追加到数组中
 3.将数组存储在本地存储中
 4.在页面一上来的时候 判断本地存储中是否有已经存储的关键字
 5.将数据和HTML拼接 将数据展示在页面中

 */

$(function(){
    var keyArr = [];

    $("#search-btn").click(function(){
        var keywords = $(this).siblings("input").val();

        if(keywords.trim()){
            keyArr.unshift(keywords);
            localStorage.setItem("keyArr",JSON.stringify(keyArr));
            location.href = "search-result.html?keyword="+keywords;
        }else{
            alert("请输入关键字")
        }
    })

    if(localStorage.getItem("keyArr")){
        keyArr = JSON.parse(localStorage.getItem("keyArr"));
        console.log(keyArr)
        var html = template("history-tmp",{res:keyArr});

        $(".history-items").html(html);
    }

    $(".clear-history").click(function(){
        $(".history-items").html("");
        localStorage.removeItem("keyArr");
    })
})