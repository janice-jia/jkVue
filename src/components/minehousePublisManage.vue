<template>
    <div class="jk-wap">
        <div class="jk-null" v-if="!houseList || houseList.length==0">
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
                        {{item.title}}
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        <!-- 15m²| 2/6 -->
                        {{item.area}}m²| {{item.floor}}/{{item.floorcount}}
                    </div>
                    <div class="jk-cont-item-price oneLine" style="color:#888888;">
                        {{item.rent}}
                        <span v-show="item.rentunit=='日租'">元/天</span>
                        <span v-show="item.rentunit=='月租'">元/月</span>
                    </div>
                    <div class="jk-cont-item-tag oneLine" v-show="publishType == 1">
                        <router-link class="jk-tag-Link" v-show="!isauth" :to="{name: 'mineAuthenticationEdit'}"> 
                            立即认证
                        </router-link>
                        <a href="javacript:;" class="jk-tag-Link" @click="publish(item)"> 发布</a>
                    </div>
                    <div class="jk-cont-item-tag oneLine" v-show="publishType == 2">
                        <router-link class="jk-tag-Link" :to="{name: 'houseInfo', params: {houseid: item.houseid}}">
                            查看
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import contItem from '../assets/cont-item.jpg';
    import {Toast} from 'mint-ui';

    export default {
        name: 'minehousePublisManage',
        data () {
            return{
                contItem:contItem,
                publishType:this.$route.params.publishType,
                isauth:false,
                houseList:[],
                imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl
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
                    if(data.body.result == 'Y'){
                        this.isauth = true;
                    }else{
                        this.isauth = false;
                    }
                })
            },
            getList(){
                var ispublish = 0;
                if(this.publishType == 2 ) ispublish = 1;
                this.$http.get('/api/API.ashx?apicommand=getmyhouse&ispublish='+ispublish+'&userid='+this.GLOBAL.userid).then(function (data) {
                    this.houseList = data.body.houselist;
                })
            },
            //发布
            publish(info){
                if(!this.isauth){
                    Toast({
                        message: '您还没有认证，请认证后发布',
                        position: 'middle',
                        duration: 2000
                    });
                }else{
                    this.$http.get('/api/API.ashx?apicommand=publishhouse&houseid='+info.houseid).then(function (data) {
                        if(data.body.result == "Y" || data.status == 200){
                            Toast({
                                message: '发布成功',
                                position: 'middle',
                                duration: 2000
                            });
                            this.getList();
                        }else{
                            Toast({
                                message: '发布失败',
                                position: 'middle',
                                duration: 2000
                            });
                        }
                    })
                }
            }
        }
    }
</script>