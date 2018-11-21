<template>
    <div class="jk-wap">

        <div class="jk-null jk-null-nopadding" v-if="!collectList || collectList.length==0">
            <div class="jk-null-tit">
                暂无收藏信息
            </div>
            <div class="jk-null-desc">
                    有合适的房子快来收藏吧
            </div>
        </div>

        <div class="jk-cont" v-show="collectList && collectList.length > 0">

            <!-- 我的收藏 -->
            <div class="jk-cont-item jk-cont-Like jkFlex" 
            v-for="(item, index) in collectList"
            :key="index">
                <router-link class="houseLink" :to="{name: 'houseInfo', params: {houseid: item.houseid}}"></router-link>
                <a href="javascript:;" class="userLike userLikeHover"></a>
                <div class="jk-cont-item-media">
                    <img :src="imgWenSiteUrl+item.thumbnailurl" alt="" />
                </div>
                <div class="jk-cont-item-main jkFlexItem">
                    <div class="jk-cont-item-tit oneLine">
                        <!-- 合租。丰西北里3居室-南卧 -->
                        {{item.community}}
                    </div>
                    <div class="jk-cont-item-desc oneLine">
                        {{item.area}}m²| {{item.floor}}/{{item.floorcount}}
                    </div>
                    <div class="jk-cont-item-price oneLine">
                        {{item.rent}}元/月
                    </div>
                    <div class="jk-cont-item-tag oneLine">
                        <p>八通线/梨园</p>     
                    </div>
                </div>
            </div>

            <!-- 我的收藏 -->
            <!-- <div class="jk-cont-item jk-cont-Like jkFlex">
                <a href="houseInfo.html" class="houseLink"></a>
                <a href="" class="userLike"></a>
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
                        <p>八通线/梨园</p>     
                    </div>
                </div>
            </div> -->

        </div>
    </div>
</template>


<script type="text/ecmascript-6">
export default {
    name: 'mineCollect',
    data() {
        return {
            collectList:[],
            imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
        }
        
    },
    created (){
        console.info('this.GLOBAL.userid', this.GLOBAL)
        this.getList()
    },
    methods: {
        getList () {
            this.$http.get('/api/API.ashx',{
                params:{
                    'apicommand': 'getcollect',
                    'userid':this.GLOBAL.userid
                }
            }).then(function(data){
                this.collectList = data.body.collectlist;
            })
        }
    }
}
</script>