import Login from '@/pages/Login'



import Home from '@/pages/Home'
import Learch from '@/pages/Learch'
import Video from '@/pages/Video'
import My from '@/pages/My'

//不带菜单的页面、login、404等单页
const otherRouter = [
    {path:"/Login", component: Login, },
]

//主体页面，带有公共头、尾、左侧菜单
const mainRouter = [
    {path:"/", component: Home,  name:"首页"},
    {path:"/Learch", component: Learch, name:"我的学习"},
    {path:"/Video", component: Video, name:"视频列表"},
    {path:"/My", component: My, name:"个人中心"},
]
export {
    otherRouter,
    mainRouter
}