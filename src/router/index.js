import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: './login',
            hidden: true,
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            component: resolve => require(['@/components/Login'], resolve)
        },
        {
            path: '/home',
            name: "学生管理",
            redirect: '/home/student',
            iconClass: 'fa fa-users',
            component: resolve => require(['@/components/Home'], resolve),
            children: [{
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () =>
                        import ('@/components/students/StudentList.vue')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () =>
                        import ('@/components/students/InfoList')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () =>
                        import ('@/components/students/InfoListMan')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-alt',
                    component: () =>
                        import ('@/components/students/WorkList')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-list',
                    component: () =>
                        import ('@/components/students/WorkMent')
                },
            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: resolve => require(['@/components/Home'], resolve),
            children: [{
                    path: '/home/dataView',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapView',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-list-ul',
                    component: () =>
                        import ('@/components/dataAnalysis/ScoreMap')
                },

            ]
        },
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: resolve => require(['@/components/Home'], resolve),
            children: [{
                    path: '/home/dataView',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/DataView')
                },
                {
                    path: '/home/mapView',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/MapView')
                },
                {
                    path: '/home/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/TravelMap')
                },
                {
                    path: '/home/score',
                    name: '分数地图',
                    iconClass: 'fa fa-list-ul',
                    component: () =>
                        import ('@/components/dataAnalysis/ScoreMap')
                }
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            component: resolve => require(['@/components/Home'], resolve),
            children: [{
                path: '/users/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () =>
                    import ('@/components/dataAnalysis/DataView')
            }]
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            // component: ()=> import('@/components/Home.vue') //懒加载
            component: resolve => require(['@/components/NotFound'], resolve)
        },
    ],
    mode: 'history'
})