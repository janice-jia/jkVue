<template>
    <div class="jk-infoPage">
        <div class="jk-infoPageIcon">
            <img class="icon-success" src="../../assets/icon-success.png" alt="" />
        </div>

        <div class="jk-infoPageTit">
            发布完成
        </div>
        <div class="jk-infoPageDesc">
            <p>您发布的房源可以到<router-link :to="{name: 'minehouseList'}">“房源管理”</router-link>中查看</p>
        </div>


        <div class="jk-bottom">
            <router-link class="jk-oneBtn-bottom" :to="{name: 'index'}">
                完成
            </router-link>
        </div>
    </div>
</template>