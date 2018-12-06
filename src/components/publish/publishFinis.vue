<template>
    <div class="jk-infoPage">
        <div class="jk-infoPageIcon">
            <img class="icon-success" src="../../assets/icon-success.png" alt="" />
        </div>

        <div class="jk-infoPageTit">
            恭喜！您的房源已经发布成功。
        </div>
        <div class="jk-infoPageDesc">
            <p class="c1">需要工作人员后台<b>审核完</b>才能优先推荐，</p>
            <p class="c1">请您关注提交房源时的所填写的联系方式，<b>保持畅通</b></p>
            <p class="c1">工作人员会尽快和您核实信息。</p>
        </div>


        <div class="jk-bottom">
            <router-link class="jk-oneBtn-bottom" :to="{name: 'index'}">
                完成
            </router-link>
        </div>
    </div>
</template>