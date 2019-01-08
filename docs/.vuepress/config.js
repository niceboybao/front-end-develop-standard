/*
 * @Author: guangwei.bao 
 * @Date: 2019-01-08 14:39:31 
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2019-01-08 14:40:03
 * @Describe: vuepress 配置文件
 */

module.exports = {
	title: '前端开发规范手册',
	description: '前端开发规范手册',
	base: '/wiki/front-end-develop-standard/', // 将部署站点的基本URL
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: 'https://niceboybao.com/static_res/images/favicon.ico'
			}
		]
	],
	DEST: '.vuepress/dist', // 指定输出目录
	themeConfig: {
		lastUpdated: 'Last Updated', // 最后更新时间
		displayAllHeaders: true, // 展开所有标题
		nav: [
			{
				text: '快速入门',
				link: '/'
			},
			{
				text: '工程规范',
				link: '/html'
			},
			{
				text: '代码规范',
				items: [
					{
						text: 'html',
						link: '/language/chinese'
					},
					{
						text: 'css',
						link: '/language/japanese'
					},
					{
						text: 'javascript',
						link: '/language/japanese'
					}
				]
			},
			{
				text: '关于',
				link: '/about/'
			}
		],
		sidebar: {
			// 关于
			'/about/': [
				{
					title: 'test',
					collapsable: false,
					children: [ '/about/' ]
				}
			],
			// 首页
			'/': [
				{
					title: '快速入门 1',
					collapsable: false,
					children: [ '/' ]
				},
				{
					title: '快速入门 2',
					collapsable: false,
					children: [ '/page-a' ]
				}
			]
		}
		// sidebar: {
		//     '/foo/': [
		//       '',     /* /foo/ */
		//       'one',  /* /foo/one.html */
		//       'two'   /* /foo/two.html */
		//     ],

		//     '/bar/': [
		//       '',      /* /bar/ */
		//       'three', /* /bar/three.html */
		//       'four'   /* /bar/four.html */
		//     ],

		//     // fallback
		//     '/': [
		//       '',        /* / */
		//       'contact', /* /contact.html */
		//       'about'    /* /about.html */
		//     ]
		//   }
	}
};
