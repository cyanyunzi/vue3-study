import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/path/:name',
            name: 'router-path——name',
            component: () => import('../views/router/path匹配/Path路径匹配名称.vue')
        },
        {
            path: '/path/:id(\\d+)',
            name: 'router-path-number',
            component: () => import('../views/router/path匹配/Path路径匹配数字.vue')
        },
        {
            path: '/repeat/:repeat*',
            name: 'router-repeat-0',
            component: () => import('../views/router/多重路径/多重路径0或多个.vue')
        },
        {
            path: '/repeat/:repeat+',
            name: 'router-repeat-1',
            component: () => import('../views/router/多重路径/多重路径1或多个.vue')
        },
        {
            path: '/children',
            name: 'children',
            component: () => import('../views/router/嵌套路由/parent.vue'),
            children: [
                {path: 'child1', name: 'child1', component: () => import('../views/router/嵌套路由/child1.vue')},
                {path: 'child2', name: 'child2', component: () => import('../views/router/嵌套路由/child2.vue')},
                {path: 'child3', name: 'child3', component: () => import('../views/router/嵌套路由/child3.vue')}
            ],
        },
        {
            path: '/event',
            name: 'event',
            children: [
                {path: 'click', name: 'click', component: () => import('../views/event/click/点击事件.vue')},
                {path: 'funtion', name: 'funtion', component: () => import('../views/event/事件方法处理.vue')},
            ],
        },
        {
            path: '/res',
            name: 'res',
            children: [
                {path: 'reactive', name: 'reactive', component: () => import('../views/响应式/reactive.vue')},
                {path: 'ref', name: 'ref', component: () => import('../views/响应式/ref.vue')},
                {path: 'computed', name: 'computed', component: () => import('../views/响应式/computed.vue')},
                {path: 'watch', name: 'watch', component: () => import('../views/响应式/watch.vue')},
                {path: 'watchEffect', name: 'watchEffect', component: () => import('../views/响应式/watchEffect.vue')},
                {path: 'watchPostEffect', name: 'watchPostEffect', component: () => import('../views/响应式/watchPostEffect.vue')},
            ],
        },
        {
            path: '/class',
            name: 'class',
            children: [
                {path: 'style', name: 'style', component: () => import('../views/样式/style.vue')},
                {path: 'class', name: 'class', component: () => import('../views/样式/class.vue')},
                {path: 'parentChild', name: 'parentChild', component: () => import('../views/样式/父子样式/parent.vue')},
            ],
        },
        {
            path: '/form',
            name: 'form',
            children: [
                {path: '修饰符', name: '修饰符', component: () => import('../views/表单/修饰符.vue')},
            ],
        },
        {
            path: '/ref',
            name: 'ref',
            children: [
                {path: 'common', name: 'common', component: () => import('../views/引用/ref简单demo.vue')},
                {path: 'parentChild', name: 'parentChild', component: () => import('../views/引用/ref父子组件引用/parent.vue')},
            ],
        },

    ]
})

export default router
