var app = getApp();
Page({
    data: {
        mainWidth:app.globalData.winWidth,
        imgUrl: ["https://gz.shicaionline.com/uploads/images/mobile/ad/20170118_1484732314_706243.jpg",
            "https://gz.shicaionline.com/uploads/images/mobile/ad/20170117_1484619713_836307.jpg"
        ],
        mainList: [{
            url: "../../image/often-buy.png",
            text: "我常买",
            toUrl:"activity-pages/often-buy/often-buy"
        }, {
            url: "../../image/my-order.png",
            text: "我的订单",
            toUrl:""
        }, {
            url: "../../image/special-mai.png",
            text: "限量特价",
            toUrl:""
        }, {
            url: "../../image/index-coll.png",
            text: "我的收藏",
            toUrl:""
        }],
        special: {
            specialFlag: false,
            specialImg: "https://gz.shicaionline.com/uploads/images/mobile/activity/95fd33f9853f812e3b7aba426fb570c1/1480563644_868789.jpg"
        },
        hotGoods: [{
            url: "https://gz.shicaionline.com/image/goods/148204670426_150.jpg",
            name: "莴笋（青皮...",
            price: "2.28"
        }, {
            url: "https://gz.shicaionline.com/image/goods/148204670426_150.jpg",
            name: "莴笋（青皮...",
            price: "2.28"
        }, {
            url: "https://gz.shicaionline.com/image/goods/148204670426_150.jpg",
            name: "莴笋（青皮...",
            price: "2.28"
        }, {
            url: "https://gz.shicaionline.com/image/goods/148204670426_150.jpg",
            name: "莴笋（青皮...",
            price: "2.28"
        }]
    },
    onLoad: function() {
        console.log('load-index');
    },
    onShow: function() {
        console.log('show-index');
    }
})
