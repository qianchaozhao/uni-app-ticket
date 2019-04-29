<template>
    <view class="grad">
        <view class="cu-bar bg-yellow2">
            <view class="action">
                <navigator open-type="navigateBack" >
                    <text class="cuIcon-back text-gray"></text>
                </navigator>
            </view>
            <view class="content">
                填写订单
            </view>
        </view>
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar">
                <view class="padding-lr">
                    <view >04-26 周五 09:40发车</view>
                    <view class="text-sm text-gray">四惠 - 唐山</view>
                </view>
                <view class="padding-lr">
                    <text class="text-sm text-orange">途径站</text><text class="cuIcon-right"></text>
                </view>
            </view>
            <view class="cu-bar top-line min-height35">
                <view class="padding-lr">
                    <text class="cuIcon-edit"></text>
                    <text class="padding-lr-xs text-sm">
                        发车前30分钟<text class="text-green">可在线退票</text>
                    </text>
                </view>
                <view class="padding-lr">
                    <text class="text-sm text-orange">详情</text>
                    <text class="cuIcon-right"></text>
                </view>
            </view>
        </view>
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar min-height35">
                <view class="padding-lr">
                    <text>乘车人</text><text class="text-xs padding-lr-sm">最多3人</text>
                </view>
                <view class="padding-lr">
                    <button class="cu-btn bg-gradual-orange sm" @click="gotoBuy()">添加乘车人</button>
                </view>
            </view>
            <view class="cu-bar top-line" v-for="(pa, index) in passenger">
                <view class="padding-lr flex justify-center align-center">
                    <text class="cuIcon-roundclosefill text-orange"></text>
                    <view class="padding-lr text-sm">
                        <view>{{pa.name}}</view>
                        <view>{{pa.idNumber}}</view>
                    </view>
                </view>
                <view class="padding-lr">
                    <button class="cu-btn line-orange sm" :class="pa.isHolder ? '' : 'line-gray'">{{pa.isHolder ? '取票人' : '设为取票人'}}</button>
                </view>
            </view>
        </view>
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar min-height35">
                <view class="padding-lr">
                    <text class="text-gray padding-right-sm">取票电话</text> 185 1188 1222
                </view>
                <view class="padding-lr">
                    <text class="cuIcon-addressbook text-orange"></text>
                </view>
            </view>
        </view>
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar min-height35">
                <view class="padding-lr">
                    <text>出行意外保障</text>
                    <text class="cuIcon-info text-orange padding-lr-xs"></text>
                </view>
            </view>
            <view class="flex justify-around align-center top-line padding-xs">
                <view class="radius padding-lr-xs light bg-yellow" v-for="(obj, index) in insurance">
                    <view class="padding-xs flex justify-center align-center">
                        <text class="cuIcon-roundcheck text-gray"></text>
                        <view class="padding-lr-xs text-sm text-black">
                            <view>
                                {{obj.InsuranceAmount}}万保额
                            </view>
                            <view>
                                <text class="text-orange2 text-sm padding-lr-xs">¥{{obj.price}}</text> x 0份
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <view class="cu-form-group top-line min-height35 text-sm">
                <view class="title ">发票接收邮箱</view>
                <input placeholder="如需电子发票，请填写邮箱" name="input"/>
            </view>
        </view>
        <view class="padding-lr padding-tb-sm">
            <view class="flex ">
                <text class="cuIcon-info text-orange self-start" style="margin: 2px"></text>
                <view class="padding-lr-xs text-sm">点击去付款表示您已阅读并同意</view>
            </view>
            <view class="padding-lr text-sm text-orange">
                《汽车票预订协议》
            </view>
        </view>
        <view class="padding-lr">
            <view class="flex">
                <text class="cuIcon-info text-orange self-start" style="margin: 2px"></text>
                <view class="padding-lr-xs text-sm">
                    汽车票无法保证100%出票，如出票失败将短信通知，票款将原路退回到您的付款账户，请您谅解
                </view>
            </view>
        </view>


    </view>
</template>

<script>
    export default {
        name: "OrderDetail",
        data() {
            return {
                passenger: [
                    {
                        name: '赵乾超',
                        idNumber: 'xxxxxxxxxxxxxxxx',
                        isHolder: true
                    },
                    {
                        name: '曹慧',
                        idNumber: 'xxxxxxxxxxxxxxxx',
                        isHolder: false
                    }
                ],
                insurance: [
                    {
                        InsuranceAmount: '15',
                        price: '3'
                    },
                    {
                        InsuranceAmount: '25',
                        price: '5'
                    },
                    {
                        InsuranceAmount: '50',
                        price: '10'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .grad {
        background: linear-gradient(#ffdf40, #f4f4f4); /* 标准的语法（必须放在最后） */
    }
</style>
