<template>
    <view class="scroll " ref="wrapper" id="wrapper" :style="{height: height? height + 'px': '500px'}">
        <view class="flex margin-top-xs">
            <view class="flex-twice margin-xs margin-lr bus-wrapper">
                <!--车头-->
                <view class="carHead">
                    车头
                </view>
                <!--车体-->
                <view id="body" ref="busBody">
                    <view id="seat-warpper" class="margin-top-sm">
                        <view v-for="(row, rIndex) in map" :key="rIndex" :id="rIndex"  class="flex justify-center">
                            <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
                            <view v-for="(col, cIndex) in row"
                                  :key="cIndex"
                                  class="flex justify-center"
                                  :style="{width: (100 / row.length) + '%',height: (100 / row.length) + '%'}">
                                <view class=""
                                      @click="handleChooseSeat(rIndex,cIndex)"
                                      v-if="col !== '_'"
                                      style="width: 80%; height: 80%; text-align: center">
                                    <image style="width: 100%;" mode="widthFix" :src="seats[col].image"></image>
                                </view>
                            </view>
                        </view>
                    </view>
                </view>
            </view>
            <!--座位描述导航-->
            <view class="flex-sub margin-xs margin-lr margin-top-sm" id="seatNav">
                <view >
                    <view v-for="(value, key) in seats" :key="key">
                        <view class="flex align-center">
                            <image style="max-width: 25px; min-width: 20px" mode="widthFix" :src="value.image"></image>
                            <view class="padding-lr-xs text-gray text-sm">{{value.category}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: 'SeatCharts',
        props: {
            'height': String
        },
        data () {
            return {
                // 这个组件顶端到根组件的距离
                seatChartsToTop: 0,
                //  影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位(绿色),2为已购座位(红色)
                seatArray: [],
                //  影院座位行数
                seatRow: 17,
                //  影院座位列数
                seatCol: 5,
                //  座位尺寸
                seatSize: '',
                //  推荐选座最大数量
                smartChooseMaxNum: 5,
                headerFixed: false,
                map: [
                    '-____',
                    'ee_e!',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee___',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'aaaaa',

                ],
                mapCopy: [
                    '-____',
                    'ee_e!',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee___',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'ee_ee',
                    'aaaaa',
                ],
                seats: {
                    '!': {
                        price: 0,
                        image: '../../../static/seatImg/seatRed.svg',
                        category: '不可选',
                    },
                    '?': {
                        price: 0,
                        image: '../../../static/seatImg/seatGreen.svg',
                        category: '已选'
                    },
                    e: {
                        price: 50,
                        image: '../../../static/seatImg/seatGrey.svg',
                        category: '普通座'
                    },
                    a: {
                        price: 50,
                        image: '../../../static/seatImg/seatYellow.svg',
                        category: '航空座'
                    },
                    '-': {
                        price: 0,
                        image: '../../../static/seatImg/driveSeat.svg',
                        category: '司机座'
                    },
                },
                top: 0
            }
        },
        computed: {

        },
        methods: {
            // 处理座位选择逻辑
            handleChooseSeat: function (row, col) {
                let map = this.map
                let seatValue = map[row][col]
                // let newArray = this.seatArray
                // // 如果是已购座位，直接返回
                if (seatValue === '!' || seatValue === '-') {
                    return
                }
                let newStr = map[row]
                if (seatValue === '?') {
                    newStr = this.changeStr(map[row], col, col + 1, this.mapCopy[row][col])
                } else {
                    newStr = this.changeStr(map[row], col, col + 1, '?')
                }
                map[row] = newStr
                this.map = new Array(...map)
            },
            // allstr:原始字符串，start,开始位置,end：结束位  置,str：要改变的字，changeStr:改变后的字
            changeStr (allstr, start, end, changeStr) {
                return allstr.substring(0, start) + changeStr + allstr.substring(end, allstr.length)
            }
        },

        mounted () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .scroll {
        overflow-y: auto;
        /*position: absolute;*/
        width: 100%;
    }
    .bus-wrapper{
        border:1px dotted #c5c5c5;
        overflow: hidden;
        border-radius: 30px 30px 10px 10px;
    }
    .carHead{
        /*margin: 0 auto;*/
        min-height:30px;
        width:100%;
        background-color: #e3e3e3;
        /*border-radius: 0 0 30px 30px;*/
        color: #585858;
        text-align: center;
    }


</style>
