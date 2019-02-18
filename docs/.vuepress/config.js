/*
 * @Author: guangwei.bao
 * @Date: 2019-01-08 14:39:31
 * @Last Modified by: guangwei.bao
 * @Last Modified time: 2019-02-18 17:32:04
 * @Describe: vuepress 配置文件
 */
module.exports = {
	title: '前端开发规范手册@iSoftStone',
	description: '前端开发规范手册@iSoftStone',
	base: '/front-end-develop-standard/', // 将部署站点的基本URL
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
		lastUpdated: '上次更新',
		serviceWorker: {
			updatePopup: {
				message: '发现新内容可用',
				buttonText: '刷新'
			}
		},
		displayAllHeaders: true, // 展开所有标题
		// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
		repo: 'https://github.com/niceboybao/front-end-develop-standard',
		// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
		// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
		repoLabel: '查看源码',

		// 以下为可选的编辑链接选项
		// 假如你的文档仓库和项目本身不在一个仓库：
		// docsRepo: 'vuejs/vuepress',
		// 假如文档不是放在仓库的根目录下：
		docsDir: 'docs',
		// 假如文档放在一个特定的分支下：
		docsBranch: 'master',
		// 默认是 false, 设置为 true 来启用
		editLinks: true,
		// 默认为 "Edit this page"
		editLinkText: '在GitHub上编辑此页面',
		nav: [
			{
				text: '快速入门',
				link: '/'
			},
			{
				text: '命名规范',
				link: '/name/'
			},
			{
				text: '代码规范',
				items: [
					{
						text: 'HTML',
						link: '/code/html/'
					},
					{
						text: 'CSS',
						link: '/code/css/'
					},
					{
						text: 'JavaScript',
						link: '/code/javascript/'
					},
					{
						text: 'ECMAScript 6',
						link: '/code/es6/'
					},
					{
						text: 'react',
						link: '/code/react/'
					}
				]
			},
			{
				text: '项目应用',
				link: '/use/'
			},
			{
				text: '关于',
				link: '/about/'
			}
		],
		sidebar: {
			// 命名规范
			'/name/': [
				{
					title: '',
					collapsable: false,
					children: [ '/name/' ]
				}
			],
			// 代码规范 html
			'/code/html/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/html/' ]
				}
			],
			// 代码规范 css
			'/code/css/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/css/' ]
				}
			],
			// 代码规范 javascript
			'/code/javascript/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/javascript/' ]
				}
			],
			// 代码规范 es6
			'/code/es6/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/es6/' ]
				}
			],
			// 代码规范 react
			'/code/react/': [
				{
					title: '',
					collapsable: false,
					children: [ '/code/react/' ]
				}
			],
			// 关于
			'/about/': [
				{
					title: '',
					collapsable: false,
					children: [ '/about/' ]
				}
			],
			// 项目应用
			'/use/': [
				{
					title: '',
					collapsable: false,
					children: [ '/use/' ]
				}
			],
			// 快速入门
			'/': [
				{
					title: '',
					collapsable: false,
					children: [ '/' ]
				}
			]
		}
	}
};
