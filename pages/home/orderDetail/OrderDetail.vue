<template>
    <view class="yellow-white">
        <cu-custom bgColor="bg-yellow2" :isBack="true">
            <block slot="content">填写订单</block>
        </cu-custom>

        <!--详情-->
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
                <view class="padding-lr" @click="showXiangQing()">
                    <text class="text-sm text-orange">详情</text>
                    <text class="cuIcon-right"></text>
                </view>
            </view>
        </view>
        <!--详情模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" style="" @tap.stop="">
                <scroll-view scroll-x class="bg-white nav">
                    <view class="flex text-center">
                        <view class="cu-item flex-sub" :class="0==TabCur?'text-orange cur':''" @tap="tabSelect(0)" >
                            <view>退票规则</view>
                        </view>
                        <view class="cu-item flex-sub" :class="1==TabCur?'text-orange cur':''" @tap="tabSelect(1)" >
                            <view>服务须知</view>
                        </view>
                    </view>
                </scroll-view>
                <view style="width: 100%; height: 500px; margin: 12px;">
                    <view v-if="0==TabCur">
                        <u-parse :content="article" @preview="preview" @navigate="navigate" ></u-parse>
                    </view>
                    <view v-if="1==TabCur">
                        <map  latitude='39.909' longitude="116.39742" style="width: 94%; border-radius: 6px; overflow: hidden"></map>
                        <u-parse :content="article2" @preview="preview" @navigate="navigate" ></u-parse>
                    </view>
                </view>
            </view>
        </view>

        <!--乘车人-->
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar min-height35">
                <view class="padding-lr">
                    <text>乘车人</text><text class="text-xs padding-lr-sm">最多3人</text>
                </view>
                <view class="padding-lr">
                    <button class="cu-btn bg-gradual-orange sm" @click="showAddPassenger()">添加乘车人</button>
                </view>
            </view>
            <view class="cu-bar top-line" v-for="(pa, index) in passenger" :key="index">
                <view class="padding-lr flex justify-center align-center">
                    <text class="cuIcon-roundclosefill text-orange" @click="delPassenger(pa, index)"></text>
                    <view class="padding-lr text-sm">
                        <view>{{pa.name}}</view>
                        <view>{{pa.idNumber}}</view>
                    </view>
                </view>
                <view class="padding-lr">
                    <button @click="setHolder(pa)" class="cu-btn line-orange sm" :class="pa.isHolder ? '' : 'line-gray'">{{pa.isHolder ? '取票人' : '设为取票人'}}</button>
                </view>
            </view>
        </view>
        <!--添加乘客模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='addPassengerModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" @tap.stop="">
                <view class="cu-bar bg-white">
                    <view class="action">确定</view>
                    <view class="action" @tap="hideModal">取消</view>
                </view>
                <view class="padding-sm" style="height: 400px">
                    <view class="cu-bar bg-white circle-corner justify-center text-orange min-height40" @click="goAddPassenger()">
                        <text class="cuIcon-roundadd padding-lr-xs"></text>新增乘车人
                    </view>
                    <view class="bg-white circle-corner margin-top-xs">
                        <view class="cu-bar top-line" v-for="(pa, index) in passenger" :key="index">
                            <view class="padding-lr flex justify-center align-center">
                                <text class="cuIcon-write text-gray"></text>
                                <view class="padding-lr text-sm text-left">
                                    <view>{{pa.name}}</view>
                                    <view>{{pa.idNumber}}</view>
                                </view>
                            </view>
                            <view class="padding-lr">
                                <text class="cuIcon-roundcheckfill text-lg " :class="index==0 ? 'text-orange': ''" style="font-size: 20px"></text>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!--取票电话-->
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
        <!--购买保险-->
        <view class="bg-white margin-xs circle-corner">
            <view class="cu-bar min-height35">
                <view class="padding-lr">
                    <text>出行意外保障</text>
                    <text class="cuIcon-info text-orange padding-lr-xs"></text>
                </view>
            </view>
            <view class="flex justify-around align-center top-line padding-xs">
                <view class="radius padding-lr-xs light bg-gray" :class="selectedInsurance ? selectedInsurance.id === obj.id ? 'bg-yellow': '' : ''"
                      v-for="(obj, index) in insurance" :key="obj.id" @click="selInsurance(obj)">
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
            <view class="cu-form-group top-line min-height35 text-sm" v-if="selectedInsurance">
                <view class="title ">发票接收邮箱</view>
                <input placeholder="如需电子发票，请填写邮箱" name="input"/>
            </view>
        </view>
        <!--协议-->
        <view class="padding-lr padding-tb-sm">
            <view class="flex ">
                <text class="cuIcon-info text-orange self-start" style="margin: 2px"></text>
                <view class="padding-lr-xs text-sm">点击去付款表示您已阅读并同意</view>
            </view>
            <view class="padding-lr text-sm text-orange" @click="goProtocol()">
                《汽车票预订协议》
            </view>
        </view>
        <!--提示-->
        <view class="padding-lr">
            <view class="flex">
                <text class="cuIcon-info text-orange self-start" style="margin: 2px"></text>
                <view class="padding-lr-xs text-sm">
                    汽车票无法保证100%出票，如出票失败将短信通知，票款将原路退回到您的付款账户，请您谅解
                </view>
            </view>
        </view>
        <!--费用明细模态框-->
        <view class="cu-modal bottom-modal z-index1100" :class="[modalName=='detailModal'?'show':'']" @tap="hideModal">
            <view class="cu-dialog" @tap.stop="">
                <view class="bg-white">
                    <view class="padding">费用明细</view>
                    <view class="cu-bar padding-lr-sm top-line">
                        <view>最高票面价</view>
                        <view class="text-orange2">¥52 x 1人</view>
                    </view>
                    <view class="cu-bar padding-lr-sm top-line">
                        <view>汽车乘意险</view>
                        <view class="text-orange2">¥5 x 1人</view>
                    </view>
                </view>
                <view class="cu-bar"></view>
            </view>
        </view>
        <!--最底下按钮-->
        <view class="flex bottom-fix z-index1101">
            <view class="cu-bar bg-white half-width" @click="detail()">
                <view class="padding-lr-sm">
                    <view>
                        <text class="text-sm text-orange2">¥</text>
                        <text class="text-lg text-orange2">55</text>
                        <text class="text-sm text-gray padding-lr-xs">共1人</text>
                    </view>
                    <view class="text-sm text-gray">订单总价</view>
                </view>
                <view class="padding-lr-sm flex justify-center align-center">
                    <text class="text-sm text-gray">明细</text>
                    <view class="padding-lr-xs cuIcon-fold rotate" :class="detailAnimation? 'rotate2': ''"></view>
                </view>
            </view>
            <view class="cu-bar bg-gradual-orange half-width justify-center" @click="goPay()" >去付款</view>
        </view>
    </view>
</template>

<script>
    import uParse from '../../common/u-parse/u-parse.vue'
    export default {
        name: "OrderDetail",
        components: { uParse},
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
                        id: 'aaa',
                        InsuranceAmount: '15',
                        price: '3'
                    },
                    {
                        id: 'bbb',
                        InsuranceAmount: '25',
                        price: '5'
                    },
                    {
                        id: 'ccc',
                        InsuranceAmount: '50',
                        price: '10'
                    }
                ],
                // 是否开启明细按钮的动画
                detailAnimation: false,
                selectedInsurance: null,
                modalName: '',
                xiangqing: true,
                TabCur: 0,
                article: '<div style="text-align: left; color: #000; font-family: -apple-system,Helvetica,\'Hiragino Sans GB W3\',arial,sans-serif"><div style="margin-bottom: 12px;"><div style="font-size: 13px;">退票方式</div><div style="font-size: 12px; margin-top: 6px; color: grey">发车前30分钟可在线退票</div></div><div><div style="font-size: 13px;">退票费率计算规则</div><div style="font-size: 12px; margin-top: 6px; color: grey"><div>（1）发车前2小时之前办理退票，按票面10%计收退票费，不足1元按1元计算;</div><div>（2）距离发车时间2小时以内办理退票，按票面额20%计收退票费，不足1元按1元计算;</div><div>（3）发车后不支持退票</div></div></div></div>',
                article2: '<div style="text-align: left; color: #000; font-family: -apple-system,Helvetica,\'Hiragino Sans GB W3\',arial,sans-serif"><div style="margin:12px 0px;"><div style="font-size: 13px;">取票、乘车地址</div><div style="font-size: 12px; margin-top: 6px; color: grey">京通快速路与四惠桥交叉口南100米</div></div><div style="margin:12px 0px;"><div style="font-size: 13px;">取票须知</div><div style="font-size: 12px; margin-top: 6px; color: grey"><div>取票方式：可凭出票短信和身份证至车站窗口或自助取票机取票</div><div>乘车方式：本站须取票后检票乘车，建议提前至车站</div><div>儿童票/携童票：暂不支持线上售票，建议至车站咨询购买</div></div></div><div style="margin:12px 0px;"><div style="font-size: 13px;">温馨提示</div><div style="font-size: 12px; margin-top: 6px; color: grey"><div>1.汽车票无法保证100%成功出票，如出票失败票款将原路退回至原支付账户</div><div>2.车型、运行时长、车站地图仅供参考，受车站临时更换车型，司机驾驶习惯，车站搬迁等因素影响，以客运站实际为准</div><div>3.在线退票不保证100%退票成功，可能受站务系统稳定性等多种因素影响。如在线退票失败，请在发车前至发车站取票后办理退票</div></div></div></div>',
            }
        },
        methods: {
            // 明细
            detail() {
                this.detailAnimation = !this.detailAnimation
                if (this.detailAnimation) {
                    this.modalName = 'detailModal'
                } else {
                    this.modalName = null
                }
            },
            // 选择保险
            selInsurance(obj) {
                if (this.selectedInsurance == obj) {
                    this.selectedInsurance = null
                    return
                }
                this.selectedInsurance = obj;
            },
            // 设置取票人
            setHolder(pa) {
                if (pa.isHolder) {
                    return
                }
                this.passenger.forEach(p => {
                    p.isHolder = false;
                })
                pa.isHolder = true;
            },
            // 显示详情模态框
            showXiangQing() {
                this.modalName = 'bottomModal'
            },
            // 隐藏modal
            hideModal(e) {
                this.modalName = null
            },
            tabSelect(e) {
                this.TabCur = e
                // this.TabCur = e.currentTarget.dataset.id;
                // this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
            },
            // 显示添加乘客模态框
            showAddPassenger() {
                this.modalName = 'addPassengerModal'
            },
            showTuJingZhan() {
                this.modalName = 'tuJingZhanModal'
            },
            delPassenger(pa, index) {
                this.passenger.splice(index, 1)
            },
            goProtocol() {
                uni.navigateTo({url: '/pages/richText/RichText'})
            },
            goPay() {
            },
            // 去添加乘客页面
            goAddPassenger() {
                uni.navigateTo({url: '/pages/home/orderDetail/AddPassenger'})
            }
        }
    }
</script>

<style scoped>
    @import url("../../common/u-parse/u-parse.css");

    .yellow-white {
        background: linear-gradient(#ffdf40, #f4f4f4); /* 标准的语法（必须放在最后） */
    }
    .yellow-white2 {
        /*color: linear-gradient(#ffdf40, orange); !* 标准的语法（必须放在最后） *!*/
    }
    .half-width {
        width: 50%;
    }
    .rotate2 {
        transform:rotate(180deg);
        -moz-transform:rotate(180deg); /* Firefox 4 */
        -webkit-transform:rotate(180deg); /* Safari and Chrome */
        -o-transform:rotate(180deg); /* Opera */
    }

    .rotate {
        transition:width 0.2s, height 0.2s;
        -moz-transition:width 0.2s, height 0.2s, -moz-transform 0.2s; /* Firefox 4 */
        -webkit-transition:width 0.2s, height 0.2s, -webkit-transform 0.2s; /* Safari and Chrome */
        -o-transition:width 0.2s, height 0.2s, -o-transform 0.2s; /* Opera */
    }
    .z-index1100 {
        z-index: 1100;
    }
    .z-index1101 {
        z-index: 1101;
    }
</style>
