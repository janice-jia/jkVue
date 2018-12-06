<template>
    <div class="jk-infoPage">
        <div class="jk-infoPageIcon">
            <img class="icon-error" src="../../assets/icon-error.png" alt="">
        </div>

        <div class="jk-infoPageTit">
            您还没有进行身份认证，<br/>暂时不能发布房源
        </div>
        <div class="jk-infoPageDesc">
            <router-link class="jk-oneBtn-bottom" :to="{name: 'mineAuthenticationEdit'}">
                <span style="color:#ffffff;">马上认证</span>
            </router-link>
            <p style="margin-top:20px;">
                 <router-link :to="{name: 'index'}" style="color: rgb(44,106,219)">
                    暂不认证，看看再说
                </router-link>
                <!-- <router-link :to="{name: 'tenant',params:{'renttype':renttype}}" style="color: rgb(44,106,219)">
                    暂不认证，看看再说
                </router-link> -->
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "noauth",
         data () {
            return {
                renttype: this.$route.params.renttype
            }
        }
    }
</script>