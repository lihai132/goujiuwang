$(function () {
    class Goujiuwang {
        constructor(json) {

            this.josn = json;
            console.log(json);


        }
        //初始化
        innit() {
            let html1 = this.createHaedertop();
            let oGouJiuWang = $("<div id='goujiuwang'></div>");
            // console.log(oGouJiuWang);
            oGouJiuWang.append(html1);
            // console.log($("#goujiuwang")[0]);
            $("body").append(oGouJiuWang);

            let html2 = this.createHeadertp();

            oGouJiuWang.append(html2);
            let html3 = this.createItem();
            oGouJiuWang.append(html3);
            let html4 = this.createList();
            let oList = $("<div class='list'></div>");
            oList.append(html4);
            oGouJiuWang.append(oList);

            let html5 = this.createLbt();
            oGouJiuWang.append(html5);





        }

        //处理数据的方法
        shuju() {
            // this.addListnv();
        }


        //建立haeder-top的方法
        createHaedertop() {
            return `<div class="haeder-top">
<div class="center">
    <div class="center-left">
        <img src="../goujiuwang/images/ewms.png" alt="">
        <span> 购酒网APP </span>
        <em> ﹀</em>
        <div class="ewm">
            <span>◆</span>
            <img src="../goujiuwang/images/APP.png" alt="">
        </div>
    </div>

    <ul class="center-right">

        <li class="loginReg" id="login"><em>Hi,请 </em>
            <a href="http://order.gjw.com/login/login" class="login" rel="nofollow" target="_self">登录</a>/
            <a href="http://order.gjw.com/login/register.htm" class="reg" rel="nofollow"
                target="_self">注册</a>
        </li>
        <li class="line"></li>
        <li class="wddd navlist">
            <a href="http://order.gjw.com/UserCenter/MyOrder.html" class="force_link"
                rel="nofollow">我的订单</a>
        </li>
        <li class="line"></li>
        <li class="yhzx navlist">

            <a href="http://order.gjw.com/UserCenter/MyOrder.html" rel="nofollow">个人中心</a>

        </li>
        <li class="line"></li>
        <li class="zxkf navlist">
            <a onclick="NTKF.im_openInPageChat('kf_9250_1462524671271')" class="force_link"
                rel="nofollow">在线客服</a>
        </li>
        <li class="line"></li>

        <li class="bz navlist">
            <a href="http://www.gjw.com/news/default.htm" class="force_link" rel="nofollow">购酒公告</a>
        </li>
        <li class="line"></li>
        <li class="bz navlist">
            <a href="http://www.gjw.com/help/show.htm" class="force_link" rel="nofollow">帮助</a>
        </li>
        <li class="line"></li>
        <li class="tyj navlist">
            <a href="http://order.gjw.com/FeedBack/default.htm" class="force_link force_link_active"
                rel="nofollow">提意见</a>
        </li>
        <li class="line"></li>
        <li class="tel navlist">
            <a class="force_link force_link_active telNum"><em>☏</em> 400-722-1919</a>
        </li>

    </ul>
</div>
</div>`
        }
        //建立Header-tp的方法
        createHeadertp() {
            return `<div class='header-tp'>
            <a href="href="http://www.gjw.com/Minisite/20190724/1917.htm"">
            <img src="./images/tp.jpg" alt="">
            </a>
            </div>`
        }
        //建立Header-Item的方法
        createItem() {
            return `<div class="header-Item">
<a href="http://www.gjw.com" class="Item-a">
    <img src="./images/logo1.jpg" alt="">
</a>
<div class="Item-1">
    <a href="http://www.gjw.com/product/item-id-1664.htm">
        <img src="./images/top-1.gif" alt="">
    </a>
</div>
<div class="Item-2">
    <input type="text" placeholder="飞天茅台"><span>搜索</span>
    <ul>
        <li><a href="">茅台</a></li>
        <li><a href="">五粮</a></li>
        <li><a href="">拉菲</a></li>
        <li><a href="">奔富</a></li>
        <li><a href="">洋河</a></li>
        <li><a href="">黄尾袋鼠</a></li>
        <li><a href="">剑南春</a></li>
        <li><a href="">泸州老窖</a></li>
    </ul>
</div>
<div class="Item-3">

    <a href="http://order.gjw.com/order/Cart.html">
        <em></em>
        <span class="s1">去购物车结算</span>
        <span class="s2">></span>
        <div class="itemNum">0</div>
    </a>

</div>
</div>`
        }

        //建立list的方法
        createList() {
            return `<ul class="list-u1">

            <li class="list-nv">
            <a href="">☰ &nbsp 全部分类</a>
            <ul>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/ax-icon1.png" alt="">一健选购</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/bj-icon2.png" alt="">白酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/ptj-icon3.png" alt="">葡萄酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/yj-icon4.png" alt="">洋酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/hj-icon5.png" alt="">黄酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/ysj-icon6.png" alt="">清酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/pj-icon7.png" alt="">啤酒</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/jjzb-icon8.png" alt="">酒具周边</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/xp-icon9.png" alt="">新品</a>
                <span>></span>
            </li>
            <li class='list-n1'>
                <a href="http://www.gjw.com/yangjiu">
                    <img src="./images/qingcang10.png" alt="">清仓</a>
                <span>></span>
            </li>
    
    
        </ul>
            </li>

            <li><a href="">首页</a></li>
            <li><a href="">特卖会</a></li>
            <li><a href="">进口馆</a></li>
            <li><a href="">居酒屋</a></li>
            <li><a href="">尚家诚购</a></li>
            <li><a href="">高端收藏</a></li>
            <li><a href="">茅台年份酒</a></li>
            <li><a href="">尾货直批</a></li>
        </ul>
        <div class="list-d1">
            <a href="">
                <img src="./images/sr.gif" alt="">
            </a>
        </div>`
        }
        //建立轮播图的方法
        createLbt() {
            return ` <div class="lbt">
<div class="left">
    <a href="http://www.gjw.com/product/Item-ID-7735.htm" class="a1">
        <img src="./images/lb1.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb2.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb3.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb4.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb5.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb6.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb7.jpg" alt="">
    </a>
    <a href="http://www.gjw.com/product/Item-ID-7735.htm">
        <img src="./images/lb8.jpg" alt="">
    </a>
    <div class="kh1">
        <</div> <div class="kh2">>
    </div>
    <ul>
        <li class="l1"><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li><a href="">7</a></li>
        <li><a href="">8</a></li>
    </ul>

</div>
<div class="right">
    <a href=""><img src="./images/jd1.jpg" alt=""></a>
    <a href=""><img src="./images/jd2.jpg" alt=""></a>
</div>

</div>`
        }
        //建立侧边栏的方法
        crestelbtlist() {
            let data = this.josn;
            data.map((element) => {
                console.log(element);

            })
        }








































        //效果部分

        //侧边栏部分的效果

        // addListnv() {
        //     let data = this.josn;
        //     // console.log(data);
        //     let oLbtlist = $("<div class='lbt-list'></div>");
        //     $(".list-n1").mouseenter(function () {


        //         let index = $(".list-n1").index(this);

        //         console.log(data[index].tp);


        //         let res1 = data[index].tp.map((ele) => {
        //             return `<li><a href=""><img src="${ele}" alt=""></a></li>`
        //         }).join("");
        //         let oUl = $("<ul></ul>");
        //         oUl.append(res1);
        //         console.log(oUl[0]);

        //         let res2 = data[index].nav.map((element) => {
        //             return `<dl>
        //             <dt>${element.title}</dt>
        //             ${element.nv.map((e)=>{
        //                 return `<dd class="d1"><a href="" class="c1">${e}</a></dd>`
        //             })}
        //         </dl>`
        //         }).join("");

        //         let oLeft = $("<div class='left'></div>");
        //         let oRight = $("<div class='right'></div>");


        //         oLeft.append(res2);

        //         let res3 = `<div class="r1"><img src="${data[index].tp1}" alt=""></div>`

        //         oRight.append(oUl);
        //         oRight.append(res3);

        //         oLbtlist.append(oLeft);
        //         oLbtlist.append(oRight);
        //         console.log(oLbtlist[0]);
        //         $(".lbt").append(oLbtlist)
        //         $(".lbt-list").css("display", "block");











        //         // data[index].map((element) => {



        //         // }).join("");
        //         // console.log(res2);












        //     })

        //     $(".list-n1").mouseleave(function () {
        //         $(".lbt-list").remove();
        //     })
        // }





























    }



    $.getJSON("../goujiuwang/php/php.json", (json) => {
        let goujiuwang = new Goujiuwang(json);
        goujiuwang.innit();
        goujiuwang.shuju();

    })



})