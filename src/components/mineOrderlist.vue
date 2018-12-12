<template>
    <div class="jk-wap">
     <div class="jk-null jk-null-nopadding" v-if="!orderList || orderList.length==0">
            <div class="jk-null-tit">
                暂无约看信息
            </div>
        </div>

        <div class="jk-cont" v-show="orderList && orderList.length > 0">


            <!-- 我的约看 -->
            <div class="jk-cont-item jkFlex" 
                v-for="(item, index) in orderList"
                :key="index">
                <router-link class="houseLink" :to="{name: 'mineOrderInfo', params: {houseid: item.houseid}}"></router-link>
                <div class="jk-cont-item-media">
                    <!-- <img src="./images/cont-item.jpg" alt="" /> -->
                    <img :src="imgWenSiteUrl+item.thumbnailurl" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        <!-- 合租。丰西北里3居室-南卧 -->
                        {{item.renttype+' . '}}{{item.community}}{{item.housestructure}}
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        {{item.area}}m² | {{item.floordesc ? item.floordesc+'/' : ''}}{{item.floorcount ? '总'+item.floorcount : ''}}
                    </div>
                    <div class="jk-cont-item-price oneLine">
                        <!-- 2000元/月 -->
                        {{item.rent}}
                        <span v-show="item.rentunit=='日租'">元/天</span>
                        <span v-show="item.rentunit=='月租'">元/月</span>
                    </div>
                    <div class="jk-cont-item-tag oneLine">
                        <router-link class="jk-tag-Link" :to="{name: 'mineOrderInfo', params: {houseid: item.houseid}}">
                            查看
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- 我的约看 -->
            <!-- <div class="jk-cont-item jkFlex">
                <a href="myOrderLookInfo.html" class="houseLink"></a>
                <div class="jk-cont-item-media">
                    <img src="./images/cont-item.jpg" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        合租。丰西北里3居室-南卧
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        15m²| 2/6
                    </div>
                    <div class="jk-cont-item-price oneLine">
                        2000元/月
                    </div>
                    <div class="jk-cont-item-tag oneLine">
                        <a href="myOrderLookInfo.html" class="jk-tag-Link"> 查看</a>
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'mineOrderlist',
    data() {
        return {
            orderList:[],
            imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
        }
        
    },
    created (){
        this.getList()
    },
    methods: {
        getList () {
            this.$http.get('/api/API.ashx',{
                params:{
                    'apicommand': 'getmyappointment',
                    'userid':this.GLOBAL.userid
                }
            }).then(function(data){
                this.orderList = data.body.houseinfo;
            })
        }
    }
}
</script>