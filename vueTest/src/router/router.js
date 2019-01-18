import App from '../App'

// 首页
const home = r => require.ensure([],() => r(require('../pages/home/home')), 'home')
//品牌文化
const companyIntro = r => require.ensure([],() => r(require('../pages/company/companyIntro')), 'companyIntro')
const contactUs = r => require.ensure([],() => r(require('../pages/company/contactUs')), 'contactUs')
//产品中心
const productCenter = r => require.ensure([],() => r(require('../pages/productCenter/productCenter')), 'productCenter')
//g+资讯
const brandInfor = r => require.ensure([],() => r(require('../pages/information/brandInfor')), 'brandInfor')
const brandTemplate = r => require.ensure([],() => r(require('../pages/information/brandTemplate')), 'brandTemplate')
const activityInfor = r => require.ensure([],() => r(require('../pages/information/activityInfor')), 'activityInfor')
const activityTemplate = r => require.ensure([],() => r(require('../pages/information/activityTemplate')), 'activityTemplate')
//g+服务
const quality = r => require.ensure([],() => r(require('../pages/service/quality')), 'quality')
const qualityResult = r => require.ensure([],() => r(require('../pages/service/qualityResult')), 'qualityResult')
const operator = r => require.ensure([],() => r(require('../pages/service/operator')), 'operator')
// const operators = r => require.ensure([],() => r(require('../pages/service/operators')), 'operators')
const operatorTemplate = r => require.ensure([],() => r(require('../pages/service/operatorTemplate')), 'operatorTemplate')
const aimToCar = r => require.ensure([],() => r(require('../pages/service/aimToCar')), 'aimToCar')
//案例鉴赏
const imageTextNews = r => require.ensure([],() => r(require('../pages/news/imageTextNews')), 'imageTextNews')
const videoNews = r => require.ensure([],() => r(require('../pages/news/videoNews')), 'videoNews')
export default[
	{
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: home
            },
            {
                path: '/companyIntro',
                component: companyIntro
            },
            {
                path: '/contactUs',
                component: contactUs
            },
            {
                path: '/productCenter',
                component: productCenter
            },
            {
                path: '/quality',
                component: quality
            },
            {
                path: '/qualityResult',
                component: qualityResult
            },
            {
                path: '/operator',
                component: operator
            },
          
            {
                path: '/operatorTemplate',
                component: operatorTemplate
            },
            {
                path:'/aimToCar',
                component:aimToCar
            },
            {
                path:'/imageTextNews',
                component:imageTextNews
            },
            {
                path:'/videoNews',
                component:videoNews
            },
            {
                path:'/brandInfor',
                component:brandInfor
            },
            {
                path:'/brandTemplate',
                component:brandTemplate
            },
            {
                path:'/activityInfor',
                component:activityInfor
            },
            {
                path:'/activityTemplate',
                component:activityTemplate
            }
        ]
    }
]
