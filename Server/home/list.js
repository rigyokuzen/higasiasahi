function getProducts(shopid) {
    return "SELECT * from price where shopid='" + shopid + "'";
}

function getequipment() {
    return "SELECT * FROM equipment where shopid=$1";
}

function addOrderItems() {
    return 'INSERT INTO orders(shopid, productid, deskno, equipmentid, orderdate, processstatus, processdate,ordernum) values($1,$2,$3,$4,$5,$6,$7,$8);';
}

exports.getProducts = getProducts;
exports.addOrderItems = addOrderItems;
exports.getequipment = getequipment;
















// var config=require("../config/config")
// module.exports = {
//     hasMore: true,
//     data: [
//         {
//             img: config.imgUrl+'/8.png',
//             title: '汉堡大大',
//             subTitle: '叫我汉堡大大，还你多彩口味',
//             price: '28',
//             distance: '120m',
//             number: '389',
//             id: Math.random().toString().slice(2)
//         },
//         {
//             img: config.imgUrl+'/9.png',
//             title: '北京开源饭店',
//             subTitle: '[望京]自助晚餐',
//             price: '98',
//             distance: '140m',
//             number: '689',
//             id: Math.random().toString().slice(2)
//         },
//         {
//             img: config.imgUrl+'/10.png',
//             title: '服装定制',
//             subTitle: '原价xx元，现价xx元，可修改一次',
//             price: '1980',
//             distance: '160',
//             number: '106',
//             id: Math.random().toString().slice(2)
//         },
//         {
//             img: config.imgUrl+'/11.png',
//             title: '婚纱摄影',
//             subTitle: '免费试穿，拍照留念',
//             price: '2899',
//             distance: '160',
//             number: '58',
//             id: Math.random().toString().slice(2)
//         },
//         {
//             img: config.imgUrl+'/12.png',
//             title: '麻辣串串烧',
//             subTitle: '双人免费套餐等你抢购',
//             price: '0',
//             distance: '160',
//             number: '1426',
//             id: Math.random().toString().slice(2)
//         }
//     ]
// }