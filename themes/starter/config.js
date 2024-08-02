/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Open Source and Free Notion-Based Website Builder', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Effortlessly build websites from your notes and amplify your value', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Get Started', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://blog.amoze.cc/?theme=starter', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Follow on Github', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://github.com/tangly1024/NotionNext', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/signin',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/signup',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'Amazing Feature 1', // 特性
  STARTER_FEATURE_TEXT_2: 'Amazing Feature 2', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Feature One', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Detailed description of feature one.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn More', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Feature Two', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'Detailed description of feature two.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn More', // 特性2
  STARTER_FEATURE_2_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Feature Three', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Built with NextJS for faster response times and better SEO.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn More', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Convenient Writing Experience', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'Edit in Notion, sync automatically to your website.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn More', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'A Lightweight and Practical Site Building Solution',
  STARTER_ABOUT_TEXT: 'Use NotionNext to build your website effortlessly.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn More',
  STARTER_ABOUT_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '7000+',
  STARTER_ABOUT_TIPS_2: 'Blog Sites',
  STARTER_ABOUT_TIPS_3: 'Currently Online',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: 'Pricing Plans',
  STARTER_PRICING_TEXT_1: 'Great Pricing Options',
  STARTER_PRICING_TEXT_2: 'Flexible payment plans tailored to your needs. (NotionNext is free and open source. This is a demo of the product subscription feature, please do not make purchases!)',

  STARTER_PRICING_1_TITLE: 'Starter Plan',
  STARTER_PRICING_1_PRICE: '19.9',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: 'per month',
  STARTER_PRICING_1_HEADER: 'Features',
  STARTER_PRICING_1_FEATURES: 'All themes, Free updates, User manual', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_1_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter',

  STARTER_PRICING_2_TAG: 'Recommended',
  STARTER_PRICING_2_TITLE: 'Basic Plan',
  STARTER_PRICING_2_PRICE: '39.9',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'per month',
  STARTER_PRICING_2_HEADER: 'Features',
  STARTER_PRICING_2_FEATURES: 'Includes Starter Plan, Source code, Community access, Technical support, SEO optimization', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_2_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter',

  STARTER_PRICING_3_TITLE: 'Premium Plan',
  STARTER_PRICING_3_PRICE: '59.9',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'per month',
  STARTER_PRICING_3_HEADER: 'Features',
  STARTER_PRICING_3_FEATURES: 'Includes Basic Plan, Custom feature development', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Buy Now',
  STARTER_PRICING_3_BUTTON_URL: 'https://blog.amoze.cc/?theme=starter',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'User Feedback',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Users Say',
  STARTER_TESTIMONIALS_TEXT_2: 'Thousands of site owners have chosen NotionNext to build their websites. With user manuals, community discussions, and technical support, they have successfully launched their sites.',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Thank you for the great method. I had tried other platforms like Super and Potion, but this method is far more customizable. Already using it!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan\'s Blog Owner',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Love this theme. I set up my site during a three-day storm break. Thanks for the guide and coffee!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Asenkits\' Treasure Box Owner',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Finally deployed my blog after an afternoon of work. Thanks to Tangly1024 for the best blog framework I have ever used. Now I can babble on my own blog!',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Listen to the Wind Owner',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Thanks for providing such a good project. Other projects were too difficult and complicated to deploy. This one is very simple and beginner-friendly.',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Disheng',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI Resource Sharing Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Thank you for the amazing blog project. Combining blogs with Notion has always been my desired blog mode.',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon\'s Blog Owner',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: 'Using it for a long time, very grateful.',
      STARTER_TESTIMONIALS_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN Exam Preparation Owner',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.amoze.cc/?theme=starter'
    }
  ],

  // FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'Frequently Asked Questions',
  STARTER_FAQ_TEXT_1: 'Got any questions? Look here',
  STARTER_FAQ_TEXT_2: 'We have collected common user inquiries',

  STARTER_FAQ_1_QUESTION: 'Does NotionNext have documentation?',
  STARTER_FAQ_1_ANSWER: 'NotionNext provides <a href="https://blog.amoze.cc/?theme=starter" className="underline">documentation</a>, <a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">demo videos</a>, and <a href="https://blog.amoze.cc/?theme=starter" className="underline">community support</a> to help you build and deploy your website.',

  STARTER_FAQ_2_QUESTION: 'How do I write articles after deployment?',
  STARTER_FAQ_2_ANSWER: 'You can add or modify pages of type "Post" directly in Notion. The content will be synced to the site in real time. For more details, refer to <a className="underline" href="https://blog.amoze.cc/?theme=starter">the documentation</a>.',

  STARTER_FAQ_3_QUESTION: 'Deployment or update failed?',
  STARTER_FAQ_3_ANSWER: 'This is usually due to configuration errors. Please check the configuration or retry the steps. Alternatively, find error logs in the Deployments section of Vercel and ask the community for help.',

  STARTER_FAQ_4_QUESTION: 'Articles not syncing in real-time?',
  STARTER_FAQ_4_ANSWER: 'First, check if the Notion_Page_ID is configured correctly. If each page has independent cache, refresh the page to resolve the issue.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Team Members',
  STARTER_TEAM_TEXT_1: 'Our Development Team',
  STARTER_TEAM_TEXT_2: 'NotionNext is developed by a community of open-source enthusiasts. Thanks to every <a className="underline" href="https://github.com/tangly1024/NotionNext/graphs/contributors">contributor</a>.',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our Blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Recent News',
  STARTER_BLOG_TEXT_2: 'Latest updates, future plans, and new feature announcements for NotionNext.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: 'Let us know if you have any issues.',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'Fujian, China',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we help?',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@tangly1024.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/yfctc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: 'Send Us a Message',
  //   STARTER_CONTACT_MSG_NAME: 'Name',
  //   STARTER_CONTACT_MSG_EMAIL: 'Email Address',
  //   STARTER_CONTACT_MSG_PHONE: 'Phone Number',
  //   STARTER_CONTACT_MSG_TEXT: 'Message',
  //   STARTER_CONTACT_MSG_SEND: 'Send Message',
  //   STARTER_CONTACT_MSG_THANKS: 'Thank you for your message!',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://blog.amoze.cc/?theme=starter',
      TITLE: 'GrayGrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://blog.amoze.cc/?theme=starter',
      TITLE: 'LineIcons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://blog.amoze.cc/?theme=starter',
      TITLE: 'UIdeck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://blog.amoze.cc/?theme=starter',
      TITLE: 'AyroUI'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: 'https://blog.amoze.cc/?theme=starter',
      TITLE: 'TailGrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'We create digital experiences for brands and companies through technology.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Home', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Documentation', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Support', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Partnership', URL: 'https://blog.amoze.cc/?theme=starter' }
      ]
    },
    {
      TITLE: 'Features',
      LINK_GROUP: [
        { TITLE: 'Deployment Guide', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Upgrade Guide', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Latest Version', URL: 'https://blog.amoze.cc/?theme=starter' }
      ]
    },
    {
      TITLE: 'Notion Writing',
      LINK_GROUP: [
        { TITLE: 'Getting Started with Notion', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Shortcuts for Efficiency', URL: 'https://blog.amoze.cc/?theme=starter' },
        { TITLE: 'Using Notion in Mainland China', URL: 'https://blog.amoze.cc/?theme=starter' }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Articles',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: 'https://blog.amoze.cc/?theme=starter',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Notice',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: 'https://blog.amoze.cc/?theme=starter',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: 'https://blog.amoze.cc/?theme=starter',

  // 404页面的提示语
  STARTER_404_TITLE: 'We can\'t seem to find the page you\'re looking for.',
  STARTER_404_TEXT: 'Sorry! The page you\'re looking for doesn\'t exist. It might have been moved or deleted.',
  STARTER_404_BACK: 'Back to Home',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.amoze.cc/?theme=starter', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}

export default CONFIG
