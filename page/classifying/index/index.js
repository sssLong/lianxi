var app = getApp();

Page({
    data: {
        mainHeight: (app.globalData.winHeight - 45) * 2 + "rpx",
        now_index: 0,
        active: "active",
        dataOne: [{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        },{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        },{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        },{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        },{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        },{
            id: "132",
            type_name: "瓜果蔬菜"
        }, {
            id: "132",
            type_name: "瓜果蔬菜"
        }],
        dataTwo: [
            [{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            },{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            },{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            },{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            },{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/1434354240633.jpg",
                type_name: "茎叶类"
            }],
            [{
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/143805363671.jpg",
                type_name: "豆制品"
            }, {
                id: "133",
                image_path: "https://www.shicaionline.com/image/goods_type/143805363671.jpg",
                type_name: "豆制品"
            }]
        ]
    },
    addActive: function(e) {
        var now_index = e.target.dataset.index;
        this.setData({ now_index, now_index });
    },
    onLoad: function() {
    	console.log('load-index');
    },
    onShow: function() {
    	console.log('show-index');
    }
});
