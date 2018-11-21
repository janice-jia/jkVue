<template>
    <div class="jk-rent2">
        <!-- 房屋配置 -->
        <div class="jk-rent2Tit">房屋配置</div>
        <div class="jkFlex tag-parent" id="houseConfig">
            <p  class="jk-ca-tag" 
                v-for="(item,index) in houseContentList" 
                :data-id="index" 
                :key="index"
                @click="setTag(item, 'housecontent',$event)"
            >{{item.housecontent}}</p>
        </div>
        <input type="hidden" name="houseConfigVal" id="houseConfigVal" />

        <!-- 房屋亮点 -->
        <div class="jk-rent2Tit">房屋亮点</div>
        <div class="jkFlex tag-parent" id="houseGood">
            <p class="jk-ca-tag" 
                v-for="(item,index) in houseFeatureList" 
                :data-id="index" 
                :key="index"
                @click="setTag(item, 'housefeature',$event)"
            >{{item.housefeature}}</p>
        </div>
        <input type="hidden" name="houseGoodVal" id="houseGoodVal" />

        <!-- 出租要求 -->
        <div class="jk-rent2Tit">出租要求</div>
        <div class="jkFlex tag-parent" id="houseRequire">
            <p class="jk-ca-tag" 
                v-for="(item,index) in houseRequireList" 
                :data-id="index" 
                :key="index"
                @click="setTag(item, 'houserequire',$event)"
            >{{item.houserequire}}</p>
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
                userid:'',
                houseRequireList:[],
                houseFeatureList:[],
                houseContentList:[],
                pageId:null,
                wordsNum:0,//字数计数器
                descVal:'',
                housecontentClass:'jk-ca-tag',
                userid:this.GLOBAL.userid,
                sendDataInfo:{
                    housecontent:[],
                    housefeature:[],
                    houserequire:[],
                    description:''
                }
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
            setTag(item, type,event){
                // this.sendDataInfo[type] = item[type] + ',';
                var el = event.currentTarget;
                el.className = 'jk-ca-tag tag-hover'
                //根据当前选中tag匹配是否已选
                console.info('this.sendDataInfo[type]' ,this.sendDataInfo[type]);
                var s = this.sendDataInfo[type].join(",").indexOf(item[type]);
                if(s>=0){
                    for(var r in this.sendDataInfo[type]){
                        if( this.sendDataInfo[type][r] == item[type] ){
                            this.sendDataInfo[type].splice(r,1);
                            el.className = 'jk-ca-tag'
                        }
                    }
                } else{
                    this.sendDataInfo[type].push(item[type])
                }
                console.info('this.sendDataInfo[type]' ,this.sendDataInfo[type]);
                //获取点击对象
            },
            getHouseRequire(){
                let sendData = {
                    apicommand:'gethouserequire'
                },
                _this = this;
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                   if(data.data.content && data.data.content.length>0){
                       _this.houseRequireList = data.data.content;
                   }
                })
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
                if(this.sendDataInfo.housecontent) this.sendDataInfo.housecontent = this.sendDataInfo.housecontent.join(",");
                if(this.sendDataInfo.housefeature) this.sendDataInfo.housefeature = this.sendDataInfo.housefeature.join(",");
                if(this.sendDataInfo.houserequire) this.sendDataInfo.houserequire = this.sendDataInfo.houserequire.join(",");
                this.sendDataInfo.houseid=this.$route.params.houseid;
                this.sendDataInfo.description=this.descVal;
                this.sendDataInfo.userid = this.userid;
                this.$http.post('/api/API.ashx?apicommand=addhouseotherinfo',JSON.stringify(this.sendDataInfo)).then(function (data) {
                    Toast({
                        message: '上传成功',
                        position: 'middle',
                        duration: 2000
                    });
                    this.$router.push({ name:'publishFinis'});
                })
                //shared提交

            }
        },
    }
</script>

<style scoped>

</style>
