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
                    <input type="input" v-model="userinfo.nickname" class="jk-group-select" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">真是姓名：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.realname" class="jk-group-select" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">生日：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.birthday" class="jk-group-select" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">手机：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.mobile" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">身份证：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" v-model="userinfo.idcard" class="jk-group-select" placeholder="请填写内容"/>
                </div>
            </div>
        </div>

        <div class="jk-bottom">
            <button class="jk-oneBtn-bottom" type="submit">完成</button>
        </div>

        
    </div>

</template>
<script type="text/ecmascript-6">
export default {
    name: 'mineEditinfo',
    data () {
        return {
            userinfo:{}
        }
    },
    created(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            this.$http.get('/api/API.ashx?apicommand=getuserinfo&userid='+this.GLOBAL.userid).then(function (data) {
                if (data.body) {
                    this.userinfo = data.body.userinfo[0];
                }
            })
        }
    }
}

</script>
