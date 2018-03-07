import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/index'
import detailPage from '@/components/detailPage'
import analysisPage from '@/components/analysisPage'
import countPage from '@/components/countPage'
import forecastPage from '@/components/forecastPage'
import publishPage from '@/components/publishPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
		{
			path: '/detail',
			component: detailPage,
			redirect: '/detail/analysis',
			children: [
				{
					path: 'analysis',
					component: analysisPage 
				},
				{
					path: 'count',
					component: countPage
				},
				{
					path: 'forecast',
					component: forecastPage
				},
				{
					path: 'publish',
					component: publishPage
				}
			]
		}
  ]
  //mode:history,
})
