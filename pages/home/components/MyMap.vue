<template>
    <view>
        <view class="page-body">
            <view class="page-section page-section-gap">
                <map :style="{width: '100%', height: screenHeight + 'px'}"
                     :latitude="latitude" :longitude="longitude" :markers="covers"  :polyline="polyline">
                    <cover-view class="circleBack" @click="back()"></cover-view>
                    <cover-image class="img"  src="../../../static/leftArrows.png"  @click="back()"></cover-image>
                </map>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "Map",
        data() {
            return {
                test: true,
                screenHeight: this.ScreenHeight,
                title: 'map',
                latitude: 39.909,
                longitude: 116.39742,
                covers: [
                    {
                        id: '1',
                        latitude: 39.909,
                        longitude: 116.39742,
                        height: '35',
                        width: '35',
                        iconPath: '../../../static/location.png',
                        callout: {
                            content: "起点",
                            color:'red',
                            fontSize: '14',
                            borderRadius: '15',
                            bgColor: 'yellow',
                            padding: '5',
                            display: 'ALWAYS',
                            textAlign: 'right'

                        }
                    },
                    {
                        id: "2",
                        latitude: 39.909,
                        longitude: 116.39842,
                        height: '35',
                        width: '35',
                        iconPath: '../../../static/location.png',
                        callout: {
                            content: "途径点A",
                            color:'red',
                            fontSize: '14',
                            borderRadius: '15',
                            bgColor: 'yellow',
                            padding: '5',
                            // display: 'ALWAYS',
                            textAlign: 'right'

                        }
                    },
                    {
                        id: "3",
                        latitude: 39.909,
                        longitude: 116.39942,
                        height: '35',
                        width: '35',
                        iconPath: '../../../static/location.png',
                        callout: {
                            content: "终点",
                            color:'red',
                            fontSize: '14',
                            borderRadius: '15',
                            bgColor: 'yellow',
                            padding: '5',
                            display: 'ALWAYS',
                            textAlign: 'right'

                        }
                    }
                ],
                polyline: [
                    {
                        points: [
                            {latitude: 39.909, longitude: 116.39742},
                            {latitude: 39.909, longitude: 116.39842},
                            {latitude: 39.909, longitude: 116.39942},
                        ],
                        color: '#f50',
                        width: 1,
                        dottedLine: false,
                        arrowLine: true,
                        arrowIconPath: "../../../static/location.png",
                        borderColor: '#0000AA',
                        borderWidth: 1

                    }
                ]
            }
        },
        methods: {
            back() {
                uni.navigateBack({
                    delta: 1
                });
            }
        }
    }
</script>

<style scoped>
    .img {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 31px;
        left: 22px;
        z-index: 10;

    }
    .circleBack {
        width: 34px;
        height: 34px;
        top: 24px;
        left: 15px;
        border-radius: 100%;
        background-color: rgba(0,0,0,.55);
        z-index: 10;
        position: absolute;
        background-repeat: no-repeat;

        display:-webkit-box;
        display:-ms-flexbox;
        display:flex-box;
        display:flex;
        -webkit-box-align:center;
        -ms-flex-align:center;
        align-items:center;
        -webkit-box-pack:center;
        -ms-flex-pack:center;
        justify-content:center;
        text-align:center;

        font-size: 20px;
    }

</style>
