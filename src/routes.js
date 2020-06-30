import NotFound from './views/404.vue'
import Index from './views/index/index'

let routes = [
  { path: '/', redirect: '/index', hidden: true },
  { path: '/company', redirect: '/company/profile', hidden: true },
  { path: '/news', redirect: '/news/company', hidden: true },
  { path: '/product', redirect: '/product/gaokongqixiangtance', hidden: true },

  {
    path: '/index',
    name: 'Index',
    title: '首页',
    component: Index,
  },
  {
    path: '/company',
    title: '公司概况',
    children: [{
        path: '/company/profile',
        name: 'Profile',
        title: '公司简介',
        component: Index,
      },
      {
        path: '/company/organization',
        name: 'Organization',
        title: '组织架构',
        component: Index,
      },
      {
        path: '/company/honor',
        name: 'Honor',
        title: '资质荣誉',
        component: Index,
      },
    ]
  },
  {
    path: '/news',
    title: '新闻中心',
    children: [{
        path: '/news/company',
        name: 'CompanyNews',
        title: '公司新闻',
        component: Index,
      },
      {
        path: '/news/industry',
        name: 'IndustryNews',
        title: '行业新闻',
        component: Index,
      }
    ]
  },
  {
    path: '/product',
    title: '产品与服务',
    children: [{
        path: '/product/gaokongqixiangtance',
        name: 'gaokongqixiangtance',
        title: '高空气象探测类产品',
        component: Index,
      },
      {
        path: '/product/qixiangyubao',
        name: 'qixiangyubao',
        title: '气象预报保障类产品',
        component: Index,
      },
      {
        path: '/product/weixingyuntu',
        name: 'weixingyuntu',
        title: '卫星云图接收类产品',
        component: Index,
      },
      {
        path: '/product/tanceyi',
        name: 'tanceyi',
        title: '探空仪类产品',
        component: Index,
      },
      {
        path: '/product/tianqileida',
        name: 'tianqileida',
        title: '天气雷达类产品',
        component: Index,
      },
      {
        path: '/product/other_products',
        name: 'OtherProducts',
        title: '其他类产品',
        component: Index,
      },
      {
        path: '/product/service',
        name: 'Service',
        title: '售后服务',
        component: Index,
      }
    ]
  },
  {
    path: '/party',
    title: '党的建设',
    children: [{
        path: '/party/overview',
        name: 'PartyOverview',
        title: '党建概况',
        component: Index,
      },
      {
        path: '/party/dynamic',
        name: 'PartyDynamic',
        title: '党建动态',
        component: Index,
      },
      {
        path: '/party/group_work',
        name: 'PartyGroupWork',
        title: '群团工作',
        component: Index,
      }
    ]
  },
  {
    path: '/human_resources',
    title: '人力资源',
    children: [{
        path: '/human_resources/recruitment',
        name: 'Recruitment',
        title: '人才招聘',
        component: Index,
      },
      {
        path: '/human_resources/training',
        name: 'Training',
        title: '教育培训',
        component: Index,
      },
    ]
  },
  {
    path: '/announcement',
    name: 'Announcement',
    title: '信息公告',
  },
  {
    path: '/contact_us',
    name: 'ContactUs',
    title: '联系我们',
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
];

export default routes;