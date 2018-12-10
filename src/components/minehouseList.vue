<template>
    <div class="jk-publish">

        <!-- 未发布 -->
        <!-- <div class="jk-publish-item">
            <router-link class="houseLink" :to="{name: 'minehousePublisManage', params: {publishType: 1}}"></router-link>
            <div class="jk-publish-itemImg w45">
                 <img :src="noPublish" alt="未发布"/>
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">未发布</p>
                <p class="publishcon">认证后一键发布</p>
            </div>
            <div class="jk-publish-itemRight">
                 <img :src="iconRight" alt="" />
            </div>
        </div> -->

        <!-- 已发布 -->
        <div class="jk-publish-item">
            <router-link class="houseLink" :to="{name: 'minehousePublisManage', params: {publishType: 2}}"></router-link>
            <div class="jk-publish-itemImg  w45">
                 <img :src="noPublish1" alt="已发布"/>
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">已发布</p>
                <p class="publishcon">发布成功，可随时查看已发布信息</p>
            </div>
            <div class="jk-publish-itemRight">
                <img :src="iconRight" alt="" />
            </div>
        </div>

        <bottomCom></bottomCom>
    </div>
</template>

<script type="text/ecmascript-6">
import bottomCom from './bottomCom.vue';
import noPublish from '../assets/noPublish.png';
import noPublish1 from '../assets/noPublish1.png';
import iconRight from '../assets/icon-right.png';
export default {
    name: 'minehouseList',
    data () {
        return{
            noPublish:noPublish,
            noPublish1:noPublish1,
            iconRight:iconRight
        }
    },
    components: {
        bottomCom
    }
}
</script>
