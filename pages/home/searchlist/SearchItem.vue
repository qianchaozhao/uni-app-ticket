<template>
    <view id="searchItem" class="bg-white" style="margin-top: 3px" @click="goSearchItem()">
        <view id="sss" class="padding-lr-sm padding-tb-xs">
            <view class="flex justify-between">
                <view class="flex align-center" >
                    <view class="font-size21" style="color: #3d3d3d">12 : 40</view>
                </view>

                <view >
                    <view class="flex align-center">
                        <Progress class="font-size15" :station="station"></Progress>
                    </view>
                    <view>
                        <Progress :is-customize-icon="true" :station="['大型高一级']" class="text-gray font-size13">
                            <img width="100%" height="100%" mode="widthFix" src="/static/bus.png"/>
                        </Progress>
                    </view>
                </view>

                <view class="flex align-center text-right">
                    <view style="width: 100%">
                        <view>
                            <text class="text-orange2 font-size12 padding-lr-xs">¥</text>
                            <text class="font-size20 text-orange2">88</text>
                        </view>
                        <view class="font-size13 text-gray">47张</view>
                        <view class="font-size13 text-gray">约3-4小时</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import Progress from './Progress'
    export default {
        name: 'SearchItem',
        components: {Progress},
        props: {
            station: Array,
            carType: Array
        },
        data () {
            return {
                pickerValue: new Date(),

            }
        },
        methods: {
            goSearchItem() {
                uni.navigateTo({
                    url: "../itemDetail/ItemDetail"
                })
            }
        }
    }
</script>

<style scoped>
</style>
