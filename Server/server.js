const Koa = require('koa');
const app = new Koa();
const { Pool } = require('pg');
app.pool = new Pool({
    user: 'dtyomypiqjajmu',
    host: 'ec2-174-129-233-123.compute-1.amazonaws.com',
    database: 'df68ogu3e03bnu',
    password: 'fc80ec7fac2c4c83b84befb4186df6bc0907f6ff6fb6afad5952ba11ce7701f7', // Password is empty be default
    port: 5432, // Default port
});
var router = require('koa-router')();
var koaBody = require('koa-body');
const moment = require('moment');
let send = require('koa-send');


//首页广告
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function(ctx, next) {
    ctx.body = homeAdData;
})

//列表
const { getProducts, addOrderItems, getequipment } = require('./home/list.js');
router.get('/api/homelist/:shopid', async function(ctx, next) {
    const shopid = ctx.params.shopid
    const returnValues = await ctx.app.pool.query(getProducts(shopid))
    ctx.body = { data: returnValues.rows }
});

//注文
router.post('/api/addOrderItems', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
    console.log('body  :' + JSON.stringify(body));
    console.log(body.productid);
    const returnValues = await ctx.app.pool.query(getequipment(), [body.shopid]);
    const equipmentid = returnValues.rows[0].id;
    const orderDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    // console.log('equipment  :' + JSON.stringify(returnValues.rows[0]));
    const returnValues2 = await ctx.app.pool.query(addOrderItems(), [body.shopid, body.productid, body.deskid, equipmentid, orderDate, false, null, body.counts]);
})

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function(ctx, next) {
        // 参数
        const paramsPage = ctx.params.page
        const paramsCity = ctx.params.city
        const paramsCategory = ctx.params.category
        const paramsKeyword = ctx.params.keyword

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)
        console.log('关键字：' + paramsKeyword)

        ctx.body = searchListData
    })
    // 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function(ctx, next) {
    // 参数
    const paramsPage = ctx.params.page
    const paramsCity = ctx.params.city
    const paramsCategory = ctx.params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    ctx.body = searchListData
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function(ctx, next) {
    console.log('详情页 - 商户信息')

    const id = ctx.params.id

    console.log('商户id: ' + id)

    ctx.body = detailInfo
})

// 用户
const {
    getDeskInfo,
    getUsers,
    getPriceItems,
    getShopInfo,
    getProductInfo,
    addPriceItems,
    getOrderInfo,
    getOwnerInfo,
    upateOwnerInfo,
    getEquipmentInfo,
    addShopInfo,
    addEquipmentInfo,
    addDeskInfo
} = require('./user/user.js')
router.get('/api/user/:email/:password', async function(ctx, next) {
    const email = ctx.params.email
    const password = ctx.params.password
    const returnValues = await ctx.app.pool.query(getUsers(), [email]);
    // console.log(returnValues.rows[0].email);
    ctx.body = { data: returnValues.rows }
})
router.get('/api/PriceItem/:email', async function(ctx, next) {
    const email = ctx.params.email
    const returnValues = await ctx.app.pool.query(getPriceItems(), [email]);
    // console.log(returnValues.rows[0].shopid);
    ctx.body = { data: returnValues.rows }
})
router.get('/api/ShopInfo/:email', async function(ctx, next) {
    const email = ctx.params.email
        // console.log('email  :' + getShopInfo());
    const returnValues = await ctx.app.pool.query(getShopInfo(), [email]);
    // console.log(returnValues.rows[0].id);
    ctx.body = { data: returnValues.rows }
})
router.get('/api/ProductInfo', async function(ctx, next) {
    const email = ctx.params.email
        // console.log('email  :' + getProductInfo());
    const returnValues = await ctx.app.pool.query(getProductInfo());
    // console.log(returnValues.rows[0].id);
    ctx.body = { data: returnValues.rows }
})
router.post('/api/addPriceItems', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
        // console.log('body  :' + JSON.stringify(body));
        // console.log('body1  :' + body.title);
    const returnValues = await ctx.app.pool.query(addPriceItems(), [body.shopid, body.productid, body.price, body.comment, body.title]);
    // console.log(returnValues);
    // ctx.body = {data:returnValues.rows}
})

//注文明細
router.get('/api/OrderInfo/:email', async function(ctx, next) {
    const email = ctx.params.email;
    // console.log('email  :' + email);
    const returnValues = await ctx.app.pool.query(getOrderInfo(), [email]);
    // console.log(returnValues.rows[0].orderdate);
    ctx.body = { data: returnValues.rows }
})

//オーナー情報
router.get('/api/OwnerInfo/:email', async function(ctx, next) {
    const email = ctx.params.email;
    // console.log('email  :' + email);
    const returnValues = await ctx.app.pool.query(getOwnerInfo(), [email]);
    // console.log(returnValues.rows[0]);
    ctx.body = { data: returnValues.rows }
})

//オーナー情報更新
router.post('/api/UpdateOwnerInfo', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
        // console.log('body  :' + JSON.stringify(body));
    const returnValues = await ctx.app.pool.query(upateOwnerInfo(), [body.companyname, body.address, body.setupdate, body.tel, body.president, body.phone, body.mail, body.id]);
    // console.log(returnValues);
    // ctx.body = {data:returnValues.rows}
})

//設備情報
router.get('/api/EquipmentInfo/:email', async function(ctx, next) {
    const email = ctx.params.email;
    // console.log('email  :' + email);
    const returnValues = await ctx.app.pool.query(getEquipmentInfo(), [email]);
    // console.log(returnValues.rows[0]);
    ctx.body = { data: returnValues.rows }
})

//テーブル情報
router.get('/api/DeskInfo/:email', async function(ctx, next) {
    const email = ctx.params.email;
    console.log('email  :' + email);
    const returnValues = await ctx.app.pool.query(getDeskInfo(), [email]);
    console.log(returnValues.rows[0]);
    ctx.body = { data: returnValues.rows }
})

//店舗追加
router.post('/api/addShopInfo', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
    console.log('body  :' + JSON.stringify(body));
    const returnValues = await ctx.app.pool.query(addShopInfo(), [body.ownerid,
        body.shopname, body.address, body.tel, body.contactname, body.phone
    ]);
})

//設備追加
router.post('/api/addEquipment', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
    console.log('body  :' + JSON.stringify(body));
    const returnValues = await ctx.app.pool.query(addEquipmentInfo(), [body.shopid,
        body.equipmentname
    ]);
})

//テーブル追加
router.post('/api/addDesk', koaBody(), async function(ctx, next) {
    const body = ctx.request.body
    console.log('body  :' + JSON.stringify(body));
    const returnValues = await ctx.app.pool.query(addDeskInfo(), [body.shopid,
        body.deskno, body.equipmentid
    ]);
})

router.get('/', async function(ctx) {
    console.log(121212)
    var fileName = 'index.html';
    await send(ctx, fileName, { root: '../build' });
});


//开启服务
const path = require('path');
const serve = require('koa-static');
app.use(serve(__dirname + '/images'));
app.use(serve('../build'));

app.use(router.routes())
    .use(router.allowedMethods())
    .use(koaBody());
var config = require("./config/config")
    // const port = process.env.PORT || 5000;
const port = config.port;
app.listen(port, () => {
        console.log(`listening on *:${port}`);
    })
    // app.listen(process.env.PORT || 3000);