// 使用 Mock
import Mock from 'mockjs'
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


export default {
    shopList, shopList2
}