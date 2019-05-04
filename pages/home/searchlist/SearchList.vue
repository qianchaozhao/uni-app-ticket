<template>
    <view>
        <cu-custom bgColor="bg-white" :isBack="true">
            <block slot="content">
                北京  <text class=" myIcon-jiantou padding-lr-xs"></text>  唐山
            </block>
        </cu-custom>
        <!--前一天后一天-->
        <view class="cu-bar bg-white top-line min-height35">
            <view class="action">
                <text class="cuIcon-back text-gray"></text> 前一天
            </view>
            <view style=" background-color: #ffdf40; border-radius: 8upx;">
                <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange" style="padding-right: 0px">
                    <view class="flex align-center">
                        <view style="margin: 8upx">{{date}} 周日</view>
                        <view style="height: 22px; max-height: 22px border-left: 1px; border-right-style: solid; transform: scaleX(.333)"></view>
                        <view style="margin: 8upx" class="cuIcon-calendar"></view>
                    </view>
                </picker>
            </view>
            <view class="action">
                后一天 <text class="cuIcon-right text-gray"></text>
            </view>
        </view>
        <view >
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
        </view>

        <view class="bottom-fix bg-white top-line flex justify-around align-center" :class="showCond">
            <view class="cu-bar bg-white tabbar top-line width100">
                <view class="action" @click="showModal('priceModal')">
                    <view class="cuIcon-order">
                        <view class="cu-tag badge bg-yellow2"></view>
                    </view>
                    最早出发
                </view>
                <view class="action" @click="showModal('faCheModal')">
                    <view class="cuIcon-time"></view>
                    发车时段
                </view>
                <view class="action" @click="showModal('filterModal')">
                    <view class="cuIcon-filter">
                        <!--<view class="cu-tag badge"></view>-->
                    </view>
                    筛选
                </view>
            </view>
        </view>
        <!--价格,出发早晚,模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='priceModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" @tap.stop="">
                <view class="padding-lr-sm">
                    <view class="cu-bar top-line" v-for="(cond, index) in conds1" :key="index" :class="index==0 ? 'text-orange2' : ''">
                        <view>{{cond.name}}</view>
                        <view :class="index==0 ? 'cuIcon-check' : ''"></view>
                    </view>
                </view>
            </view>
        </view>
        <!--发车时段模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='faCheModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" @tap.stop="">
                <view class="cu-bar bg-gray">
                    <view class="action text-orange2">确定</view>
                    <view class="padding-lr-xl">
                        <button class="cu-btn bg-white padding-lr50 text-orange2">重置</button>
                    </view>
                    <view class="action text-orange2" @tap="hideModal">取消</view>
                </view>
                <view class="cu-bar bg-white top-line"  v-for="(cond, index) in conds2" :key="index">
                    <view class="action">{{cond.name}}</view>
                    <view class="action cuIcon-square font-size21 " :class="index==0 ? 'text-orange2 cuIcon-squarecheck' : ''"></view>
                </view>
            </view>
        </view>
        <!--筛选模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='filterModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" @tap.stop="">
                <view class="cu-bar">
                    <view class="action text-orange2">确定</view>
                    <view class="padding-lr-xl">
                        <button class="cu-btn bg-white padding-lr30 text-orange2">清空筛选</button>
                    </view>
                    <view class="action text-orange2" @tap="hideModal">取消</view>
                </view>
                <view class="flex top-line" :style="{height: condHeight + 'px'}">
                    <view class="flex-sub">
                        <view class="cu-bar bottom-line" v-for="(cond, index) in conds" :key="index" @click="selCondTab(index)"
                              :class="tabCur == index ? 'bg-white' : 'right-line'">
                            <view class="text-cut padding-lr-sm text-left" style="width:100px;">{{cond.title}}</view>
                            <view class=" self-start margin-xs dian" v-if="tabCur == index"></view>
                        </view>
                    </view>
                    <view class="flex-treble padding-lr-xs bg-white scroll">
                        <view  v-for="(cond, index) in conds" :key="index" v-if="tabCur==index">
                            <view class="cu-bar bottom-line">
                                <view class="padding-lr">不限</view>
                                <view class="padding-lr cuIcon-squarecheck font-size21 text-orange2"></view>
                            </view>
                            <view class="cu-bar bottom-line" v-for="(it, index) in cond.item" :key="index">
                                <view class="padding-lr">{{it.name}}</view>
                                <view class="padding-lr cuIcon-square font-size21"></view>
                            </view>
                        </view>
                    </view>
                </view>

            </view>
        </view>

    </view>
</template>

<script>
    import SearchItem from "./SearchItem"
    export default {
        name: "SearchList",
        components: {SearchItem},
        data() {
            return {
                date: '2018-12-25',
                station2: ['北京', '唐山'],
                scrollTopFlag: 0,
                showCond: '',
                modalName: '',
                // 筛选的tab
                tabCur: 0,
                conds1: [
                    {
                        name: '最早出发'
                    },
                    {
                        name: '最晚出发'
                    },
                    {
                        name: '价格低到高'
                    },
                    {
                        name: '价格高到低'
                    }
                ],
                conds2: [
                    {
                        name: '上午 6:00-11:59'
                    },
                    {
                        name: '下午 12:00-17:59'
                    },
                    {
                        name: '晚上 18:00-23:59'
                    },
                    {
                        name: '凌晨 00:00-05:59'
                    }
                ],
                cond2Checkbox: [{
                    value: 'A',
                    checked: true
                }, {
                    value: 'B',
                    checked: true
                }, {
                    value: 'C',
                    checked: false
                }],
                // 筛选条件
                conds: [
                    {
                        title: '上车站点',
                        item: [
                            {
                                name: '八王坟长途客运站'
                            }
                        ]
                    },
                    {
                        title: '下车站点',
                        item: [
                            {
                                name: '唐山'
                            }
                        ]
                    },
                    {
                        title: '车型',
                        item: [
                            {
                                name: '中型中级'
                            },
                            {
                                name: '大型高一级'
                            },
                            {
                                name: '大型高一级(坐席)'
                            },
                            {
                                name: '中型高一级(坐席)'
                            }
                        ]
                    },
                    {
                        title: '票种',
                        item: [
                        ]
                    }
                ],

            }
        },
        computed: {
            // 计算筛选的高度
            condHeight() {
                if (!this.conds || this.conds.length < 1) {
                    return 55
                }
                let height = 0
                this.conds.forEach(cond => {
                    height = (cond.item.length * 55) > height ? (cond.item.length * 55) : height
                })
                return height + 55
            }
        },
        methods: {
            DateChange(e) {
                this.date = e.detail.value
            },
            // 隐藏modal
            hideModal(e) {
                console.log(999)
                this.modalName = null
            },
            // 显示某个modal
            showModal(modalName) {
                this.modalName = modalName
            },
            selCondTab(index) {
                this.tabCur = index
            },
            CheckboxChange(e) {
                var items = this.cond2Checkbox,
                    values = e.detail.value;
                for (var i = 0, lenI = items.length; i < lenI; ++i) {
                    items[i].checked = false;
                    for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                        if (items[i].value == values[j]) {
                            items[i].checked = true;
                            break
                        }
                    }
                }
            },
        },
        // 监听页面滚动
        onPageScroll(obj) {
            if (this.scrollTopFlag > obj.scrollTop) {
                this.showCond = 'show-cond'
            } else {
                this.showCond = 'hide-cond'
            }
            this.scrollTopFlag = obj.scrollTop
        },
    }
</script>

<style scoped>
    .hide-cond {
        transition-duration: 0.5s;
        bottom: -1000px;
    }
    .show-cond {
        transition-duration: 0.5s;
        bottom: 0px;
    }

    .scroll {
        overflow-y: auto;
        /*position: absolute;*/
        width: 100%;
    }
    .dian {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #ffdf40;
    }
</style>
