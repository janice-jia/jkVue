<template>
    <div class="jk-rent2">
        <!-- 房屋配置 -->
        <div class="jk-rent2Tit">房屋配置</div>
        <div class="jkFlex tag-parent" id="houseConfig">
            <p class="jk-ca-tag" v-for="(item,index) in houseContentList" :data-id="index">{{item.housecontent}}</p>
        </div>
        <input type="hidden" name="houseConfigVal" id="houseConfigVal" />

        <!-- 房屋亮点 -->
        <div class="jk-rent2Tit">房屋亮点</div>
        <div class="jkFlex tag-parent" id="houseGood">
            <p class="jk-ca-tag" v-for="(item,index) in houseFeatureList" :data-id="index">{{item.housefeature}}</p>
        </div>
        <input type="hidden" name="houseGoodVal" id="houseGoodVal" />

        <!-- 出租要求 -->
        <div class="jk-rent2Tit">出租要求</div>
        <div class="jkFlex tag-parent" id="houseRequire">
            <p class="jk-ca-tag" v-for="(item,index) in houseRequireList" :data-id="index">{{item.houserequire}}</p>
        </div>
        <input type="hidden" name="houseRequireVal" id="houseRequireVal" />

        <!-- 补充两句 -->
        <div class="jk-rent2Tit">补充两句</div>
        <div class="jk-supplement">
            <textarea name="" id="" cols="30" rows="10" placeholder="选填（详细的描述会大大增加快速出租的机会！可以介绍房子吸引人的地方，交通和周边环境，可以入住的时间，对租客的要求等）"></textarea>
            <p class="jk-swordNum"><span class="origin">22</span> / 300字以内</p>
        </div>

        <div class="jk-bottom" @click="submitData">
            <button class="jk-oneBtn-bottom" type="submit">确定</button>
        </div>
    </div>
</template>

<script>
    let apiUrl = '/api/API.ashx';
    export default {
        name: "secondStep",
        data(){
            return {
                houseRequireList:[],
                houseFeatureList:[],
                houseContentList:[],
                pageId:null,
            }
        },
        mounted(){
            this.getHouseRequire();
            this.getHouseFeature();
            this.getHouseContent();
            //判断是从哪个页面进入的（点击确定的时候使用）
            if(this.$route.params.page){
                this.pageId = this.$route.params.page;
            }
        },
        methods:{
            getHouseRequire(){
                let sendData = {
                    apicommand:'gethouserequire'
                };
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                   if(data.data.content && data.data.content.length>0){
                       this.houseRequireList = data.data.content;
                   }
                })
            },
            getHouseFeature(){
                let sendData = {
                    apicommand:'gethousefeature'
                };
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        this.houseFeatureList = data.data.content;
                    }
                })
            },
            getHouseContent(){
                let sendData = {
                    apicommand:'gethousecontent'
                };
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        this.houseContentList = data.data.content;
                    }
                })
            },
            submitData(){
                //tenant提交

                //shared提交

            }
        },
    }
</script>

<style scoped>

</style>
