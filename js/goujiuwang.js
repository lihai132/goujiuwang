$(function () {
    class Goujiuwang {
        constructor(json, json1) {

            this.josn = json;
            this.josn1 = json1;
            this.lbt = json1.lbt;
            this.right = json1.right;





        }
        //初始化
        innit() {
            let html1 = this.createHaedertop();
            let oGouJiuWang = $("<div id='goujiuwang'></div>");
            oGouJiuWang.append(html1);
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
            $(".lbt .left a").eq(0).addClass("a1");
            this.crestelbtlist();

            let html6 = this.create1();

            oGouJiuWang.append(html6)






        }

        //处理数据的方法
        shuju() {
            this.addLbtlist();
            this.addLbt();
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
            let res1 = this.lbt.map((ele) => {

                return `
            <a href="http://www.gjw.com/product/Item-ID-7735.htm">
                     <img src="${ele}" alt="">
            </a>`
            }).join("");



            let oLeft = $("<div class='left'></div>")
            oLeft.append(res1)

            let res2 = `<div class="kh1">
            <</div> <div class="kh2">>
        </div>
        <ul class='lbt-ul'>
        <li class='a1'><a href="">1</a></li>
        <li><a href="">2</a></li>
        <li><a href="">3</a></li>
        <li><a href="">4</a></li>
        <li><a href="">5</a></li>
        <li><a href="">6</a></li>
        <li><a href="">7</a></li>
        <li><a href="">8</a></li>
        </ul>`;

            oLeft.append(res2);

            // console.log(oLeft[0]);
            let res3 = this.right.map((e) => {
                return `<a href=""><img src="${e}" alt=""></a>`
            }).join("");

            let oRight = $("<div class='right'></div>");
            oRight.append(res3);
            let oLbt = $("<div class='lbt'></div>");

            oLbt.append(oLeft);
            oLbt.append(oRight);



            return oLbt;
        }
        //建立侧边栏的方法
        crestelbtlist() {
            let data = this.josn;
            let html = data.map((element) => {

                return `<div class="lbt-list">
               <div class="lbt-list-left">
                   ${element.nav.map((e)=>{
                       return `<dl>
                       <dt>${e.title}</dt>
                       ${e.nv.map((e1)=>{
                           return `<dd><a href="" class="c1">${e1}</a></dd>`
                       }).join("")}
                   </dl>
                  `
                   }).join("")}
               </div>
               <div class="lbt-list-right">
                   <ul>
                       ${element.tp.map((ele)=>{
                           return `<li><a href=""><img src="${ele}" alt=""></a></li>`
                       }).join("")}
                   </ul>
                   <div class="r1"><img src="${element.tp1}" alt=""></div>
               </div>
           </div>`
            }).join("");

            $(".lbt").append(html);


            $(".lbt-list-left").each(function (i, ele) {

                ele.children[2].className = 'd3';
                ele.children[3].className = 'd4';
            })





        }

        create1() {
            return `  <div class="list-1">
            <li><img src="./images/zhen-icon.png" alt="">正品保证 放心购买</li>
            <li><img src="./images/mian-icon.png" alt=""> 满100即享全国免邮费</li>
            <li><img src="./images/pei-icon (1).png" alt="">破损包赔 售后无忧</li>
            <li class='list-1-4'><img src="./images/phone-icon.png" alt="">APP下单更优惠</li>
        </div>`
        }








































        //效果部分

        //侧边栏部分的效果

        addLbtlist() {

            $(".list-n1:lt(8)").hover(function () {


                let index = $(".list-n1").index(this);

                $(".lbt-list").eq(index).stop(false).show(1);

                $(".lbt-list").eq(index).mouseenter(function () {
                    $(".lbt-list").eq(index).stop(false).show(1);
                })
            }, function () {

                let index = $(".list-n1").index(this);
                $(".lbt-list").eq(index).hide(1);



                $(".lbt-list").eq(index).mouseleave(function () {
                    $(".lbt-list").eq(index).hide(1);
                })
            })
        }

        //轮播图效果
        addLbt() {

            let index1 = 0;


            setInterval(() => {
                let index = $(".lbt .left .a1").index();


                if (index > $(".lbt .left >a").length - 2) {
                    index = -1;

                }

                Array.from($(".lbt .left >a")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt .left >a")[index + 1].className = "a1";
                Array.from($(".lbt-ul >li")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt-ul >li")[index + 1].className = "l1";




            }, 2000)

            $(".lbt-ul >li").each(function (index, element) {
                console.log(index, element);


                element.onclick = (e) => {
                    if (e && e.preventDefault) {
                        e.preventDefault();
                    }
                    // console.log(index);
                    Array.from($(".lbt .left >a")).forEach((ele) => {
                        ele.className = "";
                    })
                    $(".lbt .left >a")[index].className = "a1";
                    Array.from($(".lbt-ul >li")).forEach((ele) => {
                        ele.className = "";
                    })
                    $(".lbt-ul >li")[index].className = "l1";



                }

            })



            $(".kh1").click((e) => {

                let index = $(".lbt .left .a1").index() - 1;
                console.log(index);


                if (index < 0) {
                    index = $(".lbt .left >a").length - 1;
                    console.log("iiiiii", index)
                }

                Array.from($(".lbt .left >a")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt .left >a")[index].className = "a1";
                Array.from($(".lbt-ul >li")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt-ul >li")[index].className = "l1";
            })


            $(".kh2").click((e) => {

                let index = $(".lbt .left .a1").index();
                console.log(index);


                if (index > $(".lbt .left >a").length - 2) {
                    index = -1;

                }

                Array.from($(".lbt .left >a")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt .left >a")[index + 1].className = "a1";
                Array.from($(".lbt-ul >li")).forEach((ele) => {
                    ele.className = "";
                })
                $(".lbt-ul >li")[index + 1].className = "l1";
            })









        }




























    }



    $.getJSON("../goujiuwang/php/php.json", (json) => {


        $.getJSON("../goujiuwang/php/lbt.json", (json1) => {
            let goujiuwang = new Goujiuwang(json, json1);
            goujiuwang.innit();
            goujiuwang.shuju();

        })


    })



})