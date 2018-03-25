const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello dali!'
  })
})

// pc版简历
router.get('/pc', async (ctx, next) => {
  await ctx.render('pc', {
    title: 'Hello pc'
  })
})

// pc版简历
router.get('/h5', async (ctx, next) => {
  await ctx.render('h5', {
    title: 'Hello h5'
  })
})

// 天猫
router.get('/tianmao', async (ctx, next) => {
  await ctx.render('tianmao', {
    title: 'Hello tianmao'
  })
})

// 小游戏
router.get('/game', async (ctx, next) => {
  await ctx.render('game', {
    title: 'Hello game'
  })
})

// react
router.get('/react', async (ctx, next) => {
  await ctx.render('react', {
    title: 'Hello react'
  })
})
module.exports = router
