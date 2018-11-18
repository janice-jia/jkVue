<template>
<div>
    <div class="jk-my">
        <div class="jk-avatar">
            <a href="javaacript:;" class="jk-change-my" @click="goMine">
                转为{{islandlord ? '房东' : '租客'}}
            </a>
            <div class="jk-avatar-img">
                <img :src="avatar" alt="">
            </div>
            <div class="jk-userName">玖快租房</div>
            <div class="jk-userEdit">
                <p><a href="./userInformationEdit.html" class="jk-userEdit-link">查看并编辑个人信息</a></p>
            </div>
        </div>
        

        <!-- link -->
        <div class="jk-info-link">
            <ul>
                <li class="jk-info-linkItem" v-show="!islandlord">
                    <router-link class="item1" :to="{name: 'minehouseList'}">房源管理</router-link>
                </li>
                <li class="jk-info-linkItem">
                     <router-link class="item2" :to="{name: 'mineCollect'}">我的收藏</router-link>
                </li>
                <li class="jk-info-linkItem">
                    <router-link class="item3" :to="{name: 'mineOrderlist'}">我的约看</router-link>
                </li>
                <li class="jk-info-linkItem" v-show="!islandlord">
                    <router-link class="item4" :to="{name: 'mineAuthentication'}">我的认证</router-link>
                </li>
                <li class="jk-info-linkItem">
                    <a v-bind:href="telNumber" class="item5">联系客服</a>
                </li>
                <li class="jk-info-linkItem">
                    <router-link class="item6" :to="{name: 'mineAdvice'}">意见反馈</router-link>
                </li>
                <li class="jk-info-linkItem logout">
                    <a href="" >退出登录</a>
                </li>
            </ul>
        </div>
    </div>
    <bottomCom></bottomCom>  
</div>
</template>

<script type="text/ecmascript-6">
import bottomCom from './bottomCom.vue';
import avatar from '../assets/avatar.jpg';
import config from '../js/config'
export default {
    name: 'mine',
    data () {
        return {
            avatar:avatar,
            islandlord: false,
            telNumber: 'tel:'+config.config.telNumber
        }
    },
    components: {
        bottomCom
    },
    created (){
        this.islandlordFn();
    },
    watch: {
        '$route' (to, from) {
            this.islandlordFn();
        }
    },
    methods:{
        islandlordFn(){
            if(this.$route.params.type == '1'){
                this.islandlord = true
            }else{
                this.islandlord = false
            }
        },
        goMine(){
            var typeM = 1;
            if(this.islandlord){
                typeM='2';
            } else{
                typeM='1'
            }
            this.$router.push({name: 'mine', params:{'type':typeM}});
        }
    }
}
</script>