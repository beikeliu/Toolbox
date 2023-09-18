import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Toolbox'
  },
  history: {
    type: 'hash'
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '密码生成',
      path: '/password',
      component: './Password'
    }
  ],
  npmClient: 'pnpm',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputPath: 'docs',
});

