<template>
    <div class="jk-wap">
        <div class="jk-null jk-null-nopadding" v-if="!houseList || houseList.length==0">
            <div class="jk-null-tit">
                暂无房源信息
            </div>
            <div class="jk-null-desc">
                    有合适的房子快来发布吧
            </div>
        </div>

        <div class="jk-cont" v-show="houseList && houseList.length > 0" v-for="(item, index) in houseList"
            :key="index">
            <!--  -->
            <div class="jk-cont-item jkFlex">
                <router-link class="houseLink" :to="{name: 'houseInfo', params: {houseid: item.houseid}}"></router-link>
                <div class="jk-cont-item-media">
                    <img :src="imgWenSiteUrl+item.thumbnailurl" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        <!-- 合租。丰西北里3居室-南卧 -->
                        {{item.community}}
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        <!-- 15m²| 2/6 -->
                        {{item.area}}m²| {{item.floor}}/{{item.floorcount}}
                    </div>
                    <div class="jk-cont-item-price oneLine" style="color:#888888;">
                        {{item.rent}}元/月
                    </div>
                    <div class="jk-cont-item-tag oneLine" v-show="publishType == 1">
                        <router-link class="jk-tag-Link" v-show="!isauth" :to="{name: 'mineAuthenticationEdit'}"> 
                            立即认证
                        </router-link>
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
                isauth:false,
                houseList:[]
                // iconRight:iconRight
            }
        },
        created () {
            this.getList();
            this.isauthFn();
            
        },
        methods: {
            isauthFn(){
                this.$http.get('/api/API.ashx?apicommand=isauth&userid='+this.GLOBAL.userid).then(function(data) {
                    if(data == 'Y'){
                        this.isauth = true;
                    }else{
                        this.isauth = false;
                    }
                })
            },
            getList(){
                var ispublish = 1;
                if(this.publishType == 2 ) ispublish = 0;
                this.$http.get('/api/API.ashx?apicommand=getmyhouse&ispublish='+ispublish+'&userid='+this.GLOBAL.userid).then(function (data) {
                    this.houseList = data.body.houseList;
                })
            }
        }
    }
</script>