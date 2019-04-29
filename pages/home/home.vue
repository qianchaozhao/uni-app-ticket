<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item v-for="(img, index) in bannerImgs" :key="index">
                            <img style="width: 100%; height: 100%;" :src="img"/>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
        <scroll-view scroll-x class="bg-white nav">
            <view class="flex text-center">
                <view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in ticket" :key="index" @tap="tabSelect" :data-id="index">
                    {{item}}
                </view>
            </view>
        </scroll-view>
        <start-end-point class="top-line"></start-end-point>

        <view class="cu-form-group top-line">
            <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange" style="padding-right: 0px">
                <view style="display: flex; justify-content: space-between;">
                    <view>
                        4 月 28 日 <text class="text-gray text-sm" style="margin-left: 8px">周日</text>
                    </view>
                    <view class="cuIcon-right"></view>
                </view>
            </picker>
        </view>
        <view style="padding: 15upx;" class="bg-white top-line">
            <button class="cu-btn bg-grey lg" style="width: 100%;" @click="goSearchList()">开始搜索</button>
            <view style="padding: 5upx; display: flex; justify-content: space-between">
                <view>历史1 历史2</view>
                <view>清空历史</view>
            </view>
        </view>
    </view>
</template>

<script>
    import StartEndPoint from './components/StartEndPoint'
    export default {
        name: 'home',
        components: {StartEndPoint},
        data() {
            return {
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
                bannerImgs: [
                    "https://gw.alicdn.com/tfs/TB1g5p0SgHqK1RjSZFkXXX.WFXa-1125-352.jpg_790x10000Q75.jpg_.webp",
                    "https://gw.alicdn.com/tfs/TB1FgL4RwDqK1RjSZSyXXaxEVXa-1125-352.png_790x10000.jpg_.webp",
                    "https://gw.alicdn.com/tfs/TB193I3QkvoK1RjSZPfXXXPKFXa-1125-352.jpg_790x10000Q75.jpg_.webp"
                ],
                ticket: [
                    "汽车票",
                    "专车票"
                ],
                TabCur: 0,
                scrollLeft: 0,
                date: '2018-12-25',
            }
        },
        methods: {
            tabSelect(e) {
                this.TabCur = e.currentTarget.dataset.id;
                this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
            },
            DateChange(e) {
                this.date = e.detail.value
            },
            goSearchList() {
                uni.navigateTo({
                    url: "../home/searchlist/SearchList"
                })
            }
        }
    }
</script>

<style>
</style>
