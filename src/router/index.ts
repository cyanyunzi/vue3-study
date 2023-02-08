import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/path/:name',
            name: 'router-path——name',
            component: () => import('../views/router/动态路由匹配/path匹配/Path路径匹配名称.vue')
        },
        {
            path: '/path/:id(\\d+)',
            name: 'router-path-number',
            component: () => import('../views/router/动态路由匹配/path匹配/Path路径匹配数字.vue')
        },
        {
            path: '/repeat/:repeat*',
            name: 'router-repeat-0',
            component: () => import('../views/router/动态路由匹配/多重路径/多重路径0或多个.vue')
        },
        {
            path: '/repeat/:repeat+',
            name: 'router-repeat-1',
            component: () => import('../views/router/动态路由匹配/多重路径/多重路径1或多个.vue')
        },
        {
            path: '/children',
            name: 'children',
            component: () => import('../views/router/动态路由匹配/嵌套路由/parent.vue'),
            children: [
                {path: 'child1', name: 'child1', component: () => import('../views/router/动态路由匹配/嵌套路由/child1.vue')},
                {path: 'child2', name: 'child2', component: () => import('../views/router/动态路由匹配/嵌套路由/child2.vue')},
                {path: 'child3', name: 'child3', component: () => import('../views/router/动态路由匹配/嵌套路由/child3.vue')}
            ],
        },
        {
            path: '/event',
            name: 'event',
            children: [
                {path: 'click', name: 'click', component: () => import('../views/router/事件/click/点击事件.vue')},
            ],
        }
    ]
})

export default router
