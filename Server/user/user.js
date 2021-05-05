var db = require('../pghelper');

/**
 * ユーザー一覧を取得します
 * @param req
 * @param res
 * @param next
 * @returns {*|ServerResponse}
 */
function getUsers() {
    return 'SELECT email FROM users where email = $1';
}


function getPriceItems() {
    return 'select price.shopid,price.productid,price.price,price.comment,price.title from users join owner on users.id = owner.userid join shop on owner.id = shop.ownerid join price on price.shopid = shop.id where users.email = $1';
}

function getShopInfo() {
    var sqlStr = 'select shop.id,shop.shopname,shop.address,shop.tel,shop.contactname,shop.phone'
    sqlStr += ' from users'
    sqlStr += ' join owner on users.id = owner.userid'
    sqlStr += ' join shop on owner.id = shop.ownerid'
    sqlStr += ' where users.email = $1'
    return sqlStr;
}

function addShopInfo() {
    var sqlStr = 'Insert into shop (ownerid, shopname,address,tel,contactname,phone)'
    sqlStr += ' values($1,$2,$3,$4,$5,$6);'
    return sqlStr;
}

function getProductInfo() {
    return 'select id,name, description, price from product';
}

function addPriceItems() {
    return 'Insert into price (shopid, productid,price,comment,title) values($1,$2,$3,$4,$5);';
}

function getOrderInfo() {
    var sqlStr = 'select orders.orderdate, shop.shopname,product.name,orders.deskno,orders.ordernum'
    sqlStr += ',orders.equipmentid,orders.processstatus,orders.processdate,price.price'
    sqlStr += ' from users'
    sqlStr += ' join owner on users.id = owner.userid'
    sqlStr += ' join shop on owner.id = shop.ownerid'
    sqlStr += ' join orders on orders.shopid = shop.id'
    sqlStr += ' JOIN PRODUCT ON PRODUCT.ID = ORDERS.PRODUCTID'
    sqlStr += ' JOIN price ON PRODUCT.ID = price.PRODUCTID'
    sqlStr += ' where users.email = $1 order by orders.orderdate desc'
    return sqlStr;
}

function getOwnerInfo() {
    var sqlStr = 'select owner.id,owner.companyname, owner.address,owner.setupdate,owner.tel'
    sqlStr += ',owner.president,owner.phone,owner.mail,owner.address2,owner.rank'
    sqlStr += ' from users'
    sqlStr += ' join owner on users.id = owner.userid'
    sqlStr += ' where users.email = $1'
    return sqlStr;
}

function upateOwnerInfo() {
    var sqlStr = 'Update owner'
    sqlStr += ' set'
    sqlStr += ' companyname = $1,'
    sqlStr += ' address = $2,'
    sqlStr += ' setupdate = $3,'
    sqlStr += ' tel = $4,'
    sqlStr += ' president = $5,'
    sqlStr += ' phone = $6,'
    sqlStr += ' mail = $7'
    sqlStr += ' where id = $8'
    return sqlStr;
}

function getEquipmentInfo() {
    var sqlStr = 'select equipment.id,equipment.equipmentname,shop.id,shop.shopname'
    sqlStr += ' from users'
    sqlStr += ' join owner on users.id = owner.userid'
    sqlStr += ' join shop on owner.id = shop.ownerid'
    sqlStr += ' join equipment on shop.id = equipment.shopid'
    sqlStr += ' where users.email = $1'
    return sqlStr;
}

function addEquipmentInfo() {
    var sqlStr = 'Insert into equipment (shopid, equipmentname)'
    sqlStr += ' values($1,$2);'
    return sqlStr;
}

function getDeskInfo() {
    var sqlStr = 'select desk.deskno,equipment.id as equipmentid,equipment.equipmentname,shop.id as shopid,shop.shopname'
    sqlStr += ' from users'
    sqlStr += ' join owner on users.id = owner.userid'
    sqlStr += ' join shop on owner.id = shop.ownerid'
    sqlStr += ' join equipment on shop.id = equipment.shopid'
    sqlStr += ' join desk on shop.id = desk.shopid'
    sqlStr += ' where users.email = $1'
    return sqlStr;
}

function addDeskInfo() {
    var sqlStr = 'Insert into desk (shopid, deskno,equipmentid)'
    sqlStr += ' values($1,$2,$3);'
    return sqlStr;
}

exports.addDeskInfo = addDeskInfo;
exports.addEquipmentInfo = addEquipmentInfo;
exports.addShopInfo = addShopInfo;
exports.getDeskInfo = getDeskInfo;
exports.getEquipmentInfo = getEquipmentInfo;
exports.upateOwnerInfo = upateOwnerInfo;
exports.getOwnerInfo = getOwnerInfo;
exports.getUsers = getUsers;
exports.getPriceItems = getPriceItems;
exports.getShopInfo = getShopInfo;
exports.getProductInfo = getProductInfo;
exports.addPriceItems = addPriceItems;
exports.getOrderInfo = getOrderInfo;