<template>
    <div class="jk-publish">

        <!-- 未发布 -->
        <div class="jk-publish-item">
            <a href="houseList_noPublish.html" class="houseLink"></a>
            <div class="jk-publish-itemImg w45">
                <!-- <img src="./images/noPublish.png" alt="未发布"/> -->
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">未发布</p>
                <p class="publishcon">认证后一键发布</p>
            </div>
            <div class="jk-publish-itemRight">
                <!-- <img src="./images/icon-right.png" alt="" /> -->
            </div>
        </div>

        <!-- 已发布 -->
        <div class="jk-publish-item">
            <a href="houseList_noPublish.html" class="houseLink"></a>
            <div class="jk-publish-itemImg  w45">
                <!-- <img src="./images/noPublish1.png" alt="已发布"/> -->
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">已发布</p>
                <p class="publishcon">发布成功吧，可再次查看详细信息</p>
            </div>
            <div class="jk-publish-itemRight">
                <!-- <img src="./images/icon-right.png" alt="" /> -->
            </div>
        </div>
        

         <!-- 底部导航 start-->
         <div class="jk-nav jkFlex">
            <div class="jk-nav-item jkFlexItem">
                <a class="nav-link" href="./index.html"></a>
                <div class="jk-nav-item-icon nav-icon01"></div>
                <p>首页</p>
            </div>
            <div class="jk-nav-item jkFlexItem nav-hover">
                <a class="nav-link" href="./publish.html"></a>
                <div class="jk-nav-item-icon nav-icon02"></div>
                <p>发布</p>
            </div>
            <div class="jk-nav-item jkFlexItem">
                <a class="nav-link" href="my.html"></a>
                <div class="jk-nav-item-icon nav-icon03"></div>
                <p>我</p>
            </div>
        </div>
        <!-- 底部导航 end-->
    </div>
</template>

<script type="text/ecmascript-6">
import config from '../js/config'
export default {
    name: 'houseManage',
    data () {}
}
</script>
