// 使用 Mock
import Mock from 'mockjs'
const Random = Mock.Random;
Mock.setup({
  timeout: '500-1500'
})
const shopList = Mock.mock('/api/shopList','post',{
    success: true,
    message: '@cparagraph',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
    }]
  })
const shopList2 = Mock.mock('/api/shopList2','post',{
    success: true,
    message: '@id',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        // 属性 userId 是一个5位的随机码
        'userId|5': '',
    }]
  })

//热门视频
const getHotVideo = Mock.mock('/api/getHotVideo','post',{
    success: true,
    message: 'success',
    'list|0-4': [{
        'sid|+1': 1,
        'title':'@cparagraph',
        'img': Random.image(),
        'url': Random.image('200x100', '#02adea', 'Hello'),
        'level|1-3': 1,
        "price|1-100.2": 1
    }]
  })
  //最新上线
const getNewVideo = Mock.mock('/api/getNewVideo','post',{
    success: true,
    message: 'success',
    'list|0-6': [{
        'sid|+1': 1,
        'title':'@cparagraph',
        'img': Random.image(),
        'url': Random.image('200x100', '#02adea', 'Hello'),
        'level|1-3': 1,
        "price|1-100.2": 1
    }]
  })
  //推荐视频
const getRecommend = Mock.mock('/api/getRecommend','post',{
    success: true,
    message: 'success',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|0-10': [{
        // 属性 sid 是一个自增数，起始值为 1，每次增 1
        'sid|+1': 1,
        'title':'@cparagraph',
        'img': Random.image(),
        'url': Random.image('200x100', '#02adea', 'Hello'),
        'level|1-3': 1,
        "price|1-100.2": 1
    }]
  })


export default {
    shopList, shopList2, getHotVideo, getNewVideo, getRecommend,
}