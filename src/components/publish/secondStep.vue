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
            <textarea name="" id="" cols="30" rows="10" maxlength="300" @input="keyDownCounter" v-model="descVal"
                      placeholder="选填（详细的描述会大大增加快速出租的机会！可以介绍房子吸引人的地方，交通和周边环境，可以入住的时间，对租客的要求等）"></textarea>
            <p class="jk-swordNum"><span class="origin">{{wordsNum}}</span> / 300字以内</p>
        </div>

        <div class="jk-bottom" @click="submitData">
            <button class="jk-oneBtn-bottom" type="submit">确定</button>
        </div>
    </div>
</template>

<script>
    let apiUrl = '/api/API.ashx';
    import index from '../../js/index'
    export default {
        name: "secondStep",
        data(){
            return {
                houseRequireList:[],
                houseFeatureList:[],
                houseContentList:[],
                pageId:null,
                wordsNum:0,//字数计数器
                descVal:'',
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
            console.log(this.houseContentList,'this.houseContentList')


        },
        methods:{
            getHouseRequire(){
                let sendData = {
                    apicommand:'gethouserequire'
                },
                _this = this;
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                   if(data.data.content && data.data.content.length>0){
                       _this.houseRequireList = data.data.content;
                    //    console.info('_this.houseRequireList', _this.houseRequireList);
                       let houseRequireList_default = this.getDefault(_this.houseRequireList);
                       console.info('houseRequireList_default',houseRequireList_default)
                       index.getSelectData(houseRequireList_default, 'houseRequire','jk-ca-tag', 'houseRequireVal','tag-hover');
                   }
                })
            },
            getDefault(arr){
                var arr1 = []
                for(var i=0; i<arr.length; i++){
                    if(arr[i].houserequire)
                        arr1.push(arr[i].houserequire);
                }
                return arr1;
            },
            getHouseFeature(){
                let sendData = {
                    apicommand:'gethousefeature'
                },
                _this = this;
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        _this.houseFeatureList = data.data.content;
                        if(_this.houseFeatureList){
                            index.getSelectData(_this.houseFeatureList, 'houseGood','jk-ca-tag', 'houseGoodVal','tag-hover');
                        }

                    }
                })
            },
            getHouseContent(){
                let sendData = {
                    apicommand:'gethousecontent'
                },
                _this = this;
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        _this.houseContentList = data.data.content;
                        index.getSelectData(_this.houseContentList, 'houseConfig','jk-ca-tag', 'houseConfigVal','tag-hover');
                    }
                })
            },
            //计算字数
            checkStrLengths(str, Length) {
                let maxLength = Length,
                    result = 0;
                if (str && str.length > maxLength) {
                    result = maxLength;
                } else {
                    result = str.length;
                }
                return result;
            },
            keyDownCounter(){
                //获取输入内容
                let userDesc = this.descVal;
                if (userDesc && userDesc.length <300) {
                    this.wordsNum = this.checkStrLengths(userDesc, 300);
                } else {
                    this.wordsNum = 0
                }


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
