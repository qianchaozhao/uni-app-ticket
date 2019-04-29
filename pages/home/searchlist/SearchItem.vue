<template>
    <view id="searchItem" style="background-color: white; margin-top: 3px" @click="goSearchItem()">
        <view id="sss" style="padding: 5px 10px">
            <view style="display: flex;">
                <view class="udCenter" style="width: 37%;">
                    <view style="font-size: 21px; color: #3d3d3d">12 : 40</view>
                </view>
                <view style="width: 36%">
                    <view class="udCenter">
                        <Progress style="font-size: 15px" :station="station"></Progress>
                    </view>
                    <view>
                        <Progress :is-customize-icon="true" :station="['大型高一级']" style="color: #999; font-size: 13px">
                            <img width="100%" height="100%" mode="widthFix" src="/static/bus.png"/>
                        </Progress>
                    </view>
                </view>
                <view class="udCenter" style="text-align: right; width: 27%">
                    <view style="width: 100%">
                        <view>
                            <span style="font-size: 10px; color: #ff5000; padding-right: 3px;">¥</span>
                            <span style="font-size: 20px; color: #ff5000;">88</span>
                        </view>
                        <view class="font-small-grey">47张</view>
                        <view class="font-small-grey">约3-4小时</view>
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

    .tujingdi {
        font-size: 15px;
        text-align: left;
        margin-left: 28px;
    }
    li {
        margin: 8px 0px 8px 0px;
    }

    .font-small-grey {
        margin-top: 5px;
        font-size: 13px;
        color: #999;
    }
    .car-model::before {
        content: '*';
        font-size: 15px
    }
    .udCenter{
        display: flex;
        align-items: center;
    }

</style>
