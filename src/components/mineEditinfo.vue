<template>
    <div class="jk-information">
        <div class="jk-inf-avatar">
            <!-- <div class="jk-inf-avatarBtn">
                <input type="file" />
            </div> -->
            <div class="jk-inf-avatarImg">
                <img :src="userinfo.headimgurl" alt="">
            </div>
            
        </div>

    
        <div class="jk-information-edit">
            <div class="jk-group">
                <div class="jk-group-tit">昵称：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.nickname" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">真实姓名：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input  v-bind:disabled="isauth" type="input" v-model="userinfo.realname" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">生日：</div>
                <div class="jk-group-inputInfo jkInfotr" @click="showBirth">
                    <!-- <input type="input" v-model="userinfo.birthday" class="jk-group-select" placeholder="请填写内容"/> -->
                    <input type="input" class="jk-group-select" v-model="userinfo.birthday" placeholder="请选择内容"/>
                </div>
            </div>
            <!--入住时间--><!--日期选择器-->
            <mt-datetime-picker
                    type="date"
                    ref="picker"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    @confirm="handleConfirm"
            >
            </mt-datetime-picker>
            <div class="jk-group">
                <div class="jk-group-tit">手机：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.mobile" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">身份证：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input  v-bind:disabled="isauth" type="input" v-model="userinfo.idcard" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
        </div>

        <div class="jk-bottom">
            <button class="jk-oneBtn-bottom" type="submit" @click="subUserInfo">完成</button>
        </div>

        
    </div>

</template>
<script type="text/ecmascript-6">
import {Toast} from 'mint-ui';
export default {
    name: 'mineEditinfo',
    data () {
        return {
            userinfo:{},
            popBirth: false,
            startDate: new Date(),
            isauth:false
        }
    },
    created(){
        this.getUserInfo();
        this.isauthFn();
    },
    methods:{
        isauthFn(){
            this.$http.get('/api/API.ashx?apicommand=isauth&userid='+this.GLOBAL.userid).then(function(data) {
                console.info(data)
                if(data.body.result == 'Y'){
                    this.isauth = true;
                }else{
                    this.isauth = false;
                }
            })
        },
        getUserInfo(){
            this.$http.get('/api/API.ashx?apicommand=getuserinfo&userid='+this.GLOBAL.userid).then(function (data) {
                if (data.body) {
                    this.userinfo = data.body.userinfo[0];
                }
            })
        },
        subUserInfo(){
            var getStr = '';
                getStr += '/api/API.ashx?apicommand=submituserinfo';
                getStr += '&userid='+this.GLOBAL.userid;
                getStr += '&realname='+this.userinfo.realname;
                getStr += '&mobile='+this.userinfo.mobile;
                getStr += '&idcard='+this.userinfo.idcard;
                getStr += '&birthday='+this.userinfo.birthday;
                getStr += '&nickname='+this.userinfo.nickname;
            this.$http.get(getStr).then(function(data){
                if(data.body.result=='Y'){
                    console.info('Success!');
                    Toast({
                        message: '修改成功',
                        position: 'middle',
                        duration: 2000
                    });
                    this.getUserInfo();
                }else{
                    Toast({
                        message: '修改失败',
                        position: 'middle',
                        duration: 2000
                    });
                }
            })
        },
        showBirth(){
            this.popBirth = true; //
            this.$refs.picker.open();
        },
        //获取生日时间
        handleConfirm (data) {
            this.userinfo.birthday = this.format(data);
        },
        //时间格式转换
        format(Date){
            let Y = Date.getFullYear(),
                M = Date.getMonth() + 1;
            M = M < 10 ? '0' + M : M;// 不够两位补充0
            let D = Date.getDate();
            D = D < 10 ? '0' + D : D;
            let H = Date.getHours();
            H = H < 10 ? '0' + H : H;
            let Mi = Date.getMinutes();
            Mi = Mi < 10 ? '0' + Mi : Mi;
            let S = Date.getSeconds();
            S = S < 10 ? '0' + S : S;
            // return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S;
            return Y + '-' + M + '-' + D;
        },
    }
}

</script>
