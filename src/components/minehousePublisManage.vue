<template>
    <div class="jk-wap">
        <div class="jk-cont">

            <!-- 我的约看 -->
            <div class="jk-cont-item jkFlex">
                <a href="#" class="houseLink"></a>
                <div class="jk-cont-item-media">
                    <img :src="contItem" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        合租。丰西北里3居室-南卧
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        15m²| 2/6
                    </div>
                    <div class="jk-cont-item-price oneLine" style="color:#888888;">
                        2000元/月
                    </div>
                    <div class="jk-cont-item-tag oneLine" v-show="publishType == 1">
                        <a href="#" class="jk-tag-Link"> 立即认证</a>
                        <a href="#" class="jk-tag-Link"> 发布</a>
                    </div>
                </div>
            </div>

            <!-- 我的约看 -->
            <div class="jk-cont-item jkFlex">
                <a href="#" class="houseLink"></a>
                <div class="jk-cont-item-media">
                    <img :src="contItem" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        合租。丰西北里3居室-南卧
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        15m²| 2/6
                    </div>
                    <div class="jk-cont-item-price oneLine" style="color:#888888;">
                        2000元/月
                    </div>
                    <div class="jk-cont-item-tag oneLine">
                        <a href="#" class="jk-tag-Link"> 立即认证</a>
                        <a href="#" class="jk-tag-Link"> 发布</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import contItem from '../assets/cont-item.jpg';
    export default {
        name: 'minehousePublisManage',
        data () {
            return{
                contItem:contItem,
                publishType:this.$route.params.publishType,
                // iconRight:iconRight
            }
        },
        created () {
            this.getList()
        },
        methods: {
            getList(){
                // this.$http.get('/API.ashx?apicommand=publishhouse?userid=1').then(function (data) {
                //
                // })
            }
        }
    }
</script>