const filter = require("../../../util/filter.js");
const app = getApp();
Page({
    data: {
        winWidth:app.globalData.winWidth,
        goods: [{
            created: "1484103768",
            goods_id: "549",
            goods_name: "京包菜(去外叶)",
            id: "4641935",
            image_path: "https://www.shicaionline.com/image/goods/1468661446479.jpg",
            is_seckill_offer: "0",
            is_special_offer: "0",
            max_qty: "0.00",
            min_qty: "2.00",
            modi_time: "1484103768",
            on_sales: "1",
            price: "2.28",
            qty: "2",
            small_image_path: "https://www.shicaionline.com/image/goods/1468661446479_150.jpg",
            special_count: "588",
            special_limit: "0",
            special_offer_end: "1483718400",
            special_offer_price: "2.28",
            special_offer_start: "1483459200",
            type_id: "133",
            unit_name: "斤",
            user_id: "16082"
        },{
            created: "1484103768",
            goods_id: "539",
            goods_name: "包菜(去外叶)",
            id: "4641934",
            image_path: "https://www.shicaionline.com/image/goods/1468661446479.jpg",
            is_seckill_offer: "0",
            is_special_offer: "0",
            max_qty: "0.00",
            min_qty: "2.00",
            modi_time: "1484103768",
            on_sales: "1",
            price: "1.28",
            qty: "2",
            small_image_path: "https://www.shicaionline.com/image/goods/1468661446479_150.jpg",
            special_count: "588",
            special_limit: "0",
            special_offer_end: "1483718400",
            special_offer_price: "2.28",
            special_offer_start: "1483459200",
            type_id: "133",
            unit_name: "斤",
            user_id: "16082"
        }],
        flag: true,
        arrTotal: [],
        arrQty: [],
        arrPrice:[],
        isSelect:[],
        allSelect:false,
        allRemove:[],
        allNoRemove:[],
        noRemoveUrl:'../../../image/car-circle.png',
        removeUrl:'../../../image/pay-select.png'
    },
    addQty: function(e) {
        let qty = e.target.dataset.qty >= 999 ? 999 : Number(e.target.dataset.qty) + 1;
        this.changeQty(e,qty);
    },
    subQty:function(e) {
        let qty = e.target.dataset.qty <= 0 ? 0 : Number(e.target.dataset.qty) - 1;
        this.changeQty(e,qty);
    },
    changeQty:function(e,qty){
    	let index = e.target.dataset.index;
        let arrQty = this.data.arrQty;
        let arrTotal = this.data.arrTotal;
        arrQty[index] = qty;
        arrTotal[index] = filter.addzero(filter.accMul(this.data.arrPrice[index],qty));
        this.setData({ arrQty ,arrTotal});
    },
    edit: function() {
        this.setData({ flag: false });
    },
    finish: function() {
        this.setData({ flag: true });
    },
    removeSelf:function(e){
        let isRemove = !e.target.dataset.isRemove;
        let index = e.target.dataset.index;
        let isSelect = this.data.isSelect;
        isSelect[index] = isRemove;
        this.setData({ isSelect});
    },
    removeAll:function(e){
        let allSelect = !this.data.allSelect;
        let isSelect = this.data.allSelect?this.data.allRemove:this.data.allNoRemove;
        this.setData({isSelect,allSelect});
    },
    removeGoods:function(e){
        let allIndex = [];
        let goods = this.data.goods;
        let arrTotal = this.data.arrTotal;
        let arrQty = this.data.arrQty;
        let arrPrice = this.data.arrPrice;
        let isSelect = this.data.isSelect;
        let allRemove = this.data.allRemove;
        let allNoRemove = this.data.allNoRemove;
        let flag = true;
        this.data.isSelect.forEach((item,index)=>{item&&allIndex.push(index)});
        
        allIndex.forEach((item,index)=>{
            goods.splice(item-index,1);
            arrTotal.splice(item-index,1);
            arrQty.splice(item-index,1);
            arrPrice.splice(item-index,1);
            isSelect.splice(item-index,1);
            allRemove.splice(item-index,1);
            allNoRemove.splice(item-index,1);
            
        });
        console.log(goods);
        this.setData({goods,arrTotal,arrQty,arrPrice,isSelect,allRemove,allNoRemove,flag});
    },
    onLoad: function() {
        let arrTotal = [];
        let arrQty = [];
        let arrPrice = [];
        let isSelect = [];
        let allRemove = [];
        let allNoRemove = [];
        this.data.goods.forEach(function(item, index) { 
            
            arrTotal.push(filter.addzero(filter.accMul(item.price, item.qty)));
            arrQty.push(item.qty); 
            arrPrice.push(item.price);
            isSelect.push(false);
            allRemove.push(false);
            allNoRemove.push(true);
        });
        this.setData({ arrTotal,arrQty,arrPrice,isSelect ,allRemove,allNoRemove});
    },
    onShow: function() {
        
    }
});

