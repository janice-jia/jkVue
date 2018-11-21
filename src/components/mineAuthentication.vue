<template>
    <div class="jk-publish">

        <!-- 身份证认证 -->
        <div class="jk-publish-item">
            <router-link class="houseLink" :to="{name: 'mineAuthenticationEdit'}" v-show="!isauth"></router-link>
            <div class="jk-publish-itemImg w51">
                <img :src="authentication" alt="认证"/>
            </div>
            <div class="jk-publish-itemType ft32">
                <p class="publishcon">身份证认证</p>
            </div>
            <div class="jk-publish-itemType tr ft32">
                <router-link class="auLink" :to="{name: 'mineAuthenticationEdit'}" v-show="!isauth">去认证</router-link>
                <p class="auLink" v-show="isauth">已认证</p>
            </div>
            <div class="jk-publish-itemRight">
                <img :src="iconright" alt="" />
            </div>
        </div>
        

        <bottomCom></bottomCom>         
    </div>
</template>
<script type="text/ecmascript-6">
import bottomCom from './bottomCom.vue';
import authentication from '../assets/_authentication.png';
import iconright from '../assets/icon-right.png';
export default {
    name: 'minehousePublisManage',
    data () {
        return {
            authentication: authentication,
            iconright: iconright,
            islandlord: false,
            isauth:false
        }
    },
    components: {
        bottomCom
    },
    created(){
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
    }
}
</script>