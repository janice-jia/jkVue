<template>
    <div class="jk-infoPage">
        <div class="jk-infoPageIcon">
            <img class="icon-success" src="../assets/icon-success.png" alt="" />
        </div>

        <div class="jk-infoPageTit">
            恭喜您，已经成为玖快租房认证用户。
        </div>
        <div class="jk-infoPageDesc">
            <router-link class="jk-oneBtn-bottom" :to="{name: 'publish'}">
                <span style="color:#ffffff;">马上发布房源</span>
            </router-link>
            <p style="margin-top:20px;">
                <router-link :to="{name: 'index'}" style="color: rgb(44,106,219)">
                    暂不发布，看看再说
                </router-link>
            </p>
            <!-- <p>需要工作人员后台审核完才能优先推荐，请您关注提交房源时的所填写的联系方式，保持畅通，工作人员会尽快和您核实信息</p> -->
        </div>

    </div>
</template>