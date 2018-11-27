<template>
	<div class="jk-suggestions">
            <div class="jk-sTit">界面加载慢</div>
            <div class="jk-sText jk-supplement">
                <textarea cols="30" rows="10" v-model="content" placeholder="请填写10个字以上的问题描述以便我们提供更好的帮助"></textarea>
                <p class="jk-swordNum"><span class="origin">{{content.length}}</span> / 200字以内</p>
            </div>
            <!-- <div class="jk-sTit">相关截图（选填）<span>0/4</span></div> -->
            <div class="jk-sAdd-img">
                <!--<div class="jkFlexItem">
                    <div class="jk-sAdd-imgItem">
                        <img src="./images/sImg.png" alt="">
                        <span class="del"></span>
                    </div>
                </div>-->
            
                <!-- <div class="jkFlexItem">
                    <div class="jk-sAdd-imgItem">
                        <div class="jk-rent-photoBtn">
                            <input type="file">
                        </div>
                    </div>
                </div> -->

                <div class="jk-bottom">
                    <button class="jk-oneBtn-bottom" type="submit" @click="submit">提交</button>
                </div>

            </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
	export default{
		name:'mineAdviceAdd',
		data(){
			return{
                userId:this.GLOBAL.userid,
                content:''
			}
		},
		mounted(){
		},
		methods:{
			submit(){
                if(this.content.length > 200){
                    Toast({
                        message: '您最多可输入200字',
                        position: 'middle',
                        duration: 2000
                    });
                    return false;
                }
                
                var type = '界面加载慢';
                if(this.$route.params.type == 2) type = '卡顿';
                var postStr = '';
                postStr += '/api/API.ashx?apicommand=submitfeedback';
                postStr += '&userid='+this.GLOBAL.userid;
                postStr += '&type='+type;
                postStr += '&content='+this.content;
                this.$http.post(postStr).then(function(data){
                    if(data.body.result=='Y'){
                        console.info('Success!');
                        Toast({
                            message: '提交成功',
                            position: 'middle',
                            duration: 2000
                        });
                        this.$router.push({name: 'mine', params:{'type': 1}});
                    }else{
                        Toast({
                            message: '提交失败',
                            position: 'middle',
                            duration: 2000
                        });
                    }
                })
            }
		}
	}
</script>

<style>
</style>