# 全球部署指南

本项目已配置多种部署方案，支持全球任意浏览器访问。

## 🚀 推荐部署方案

### 方案1：Vercel（最推荐）
**优点：** 免费、快速、自动部署、全球CDN

1. 访问 [vercel.com](https://vercel.com) 注册账号
2. 点击 "New Project"
3. 导入您的GitHub仓库或直接上传代码
4. 自动部署完成，获得全球可访问的URL

### 方案2：Netlify（推荐）
**优点：** 免费、简单、自动部署

1. 访问 [netlify.com](https://netlify.com) 注册账号
2. 点击 "New site from Git"
3. 连接您的GitHub仓库
4. 构建命令：`npm run build`
5. 发布目录：`dist`
6. 部署完成，获得全球可访问的URL

### 方案3：GitHub Pages（已配置）
**优点：** 免费、与GitHub集成

1. 将代码推送到GitHub仓库
2. 运行命令：
   ```bash
   npm run deploy
   ```
3. 访问：https://xiaoc254.github.io/ceshi

### 方案4：Firebase Hosting
**优点：** Google提供、免费、快速

1. 安装Firebase CLI：
   ```bash
   npm install -g firebase-tools
   ```

2. 登录Firebase：
   ```bash
   firebase login
   ```

3. 初始化项目：
   ```bash
   firebase init hosting
   ```

4. 部署：
   ```bash
   firebase deploy
   ```

## 📦 本地构建测试

在部署前，您可以在本地测试构建：

```bash
# 安装依赖
npm install

# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🌐 部署后的访问

部署完成后，您将获得一个全球可访问的URL，例如：
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://your-project.netlify.app`
- GitHub Pages: `https://xiaoc254.github.io/ceshi`
- Firebase: `https://your-project.web.app`

## 🔧 自定义域名

所有平台都支持自定义域名：
1. 购买域名（如阿里云、腾讯云等）
2. 在部署平台配置自定义域名
3. 更新DNS记录

## 📱 移动端适配

项目已配置移动端适配：
- 使用 `amfe-flexible` 进行屏幕适配
- 使用 `postcss-pxtorem` 进行单位转换
- 支持各种移动设备

## 🚀 快速部署命令

```bash
# 构建项目
npm run build

# 部署到GitHub Pages
npm run deploy

# 预览构建结果
npm run preview
```

## 📞 技术支持

如果遇到部署问题，可以：
1. 检查构建日志
2. 确认配置文件正确
3. 查看平台文档
4. 联系技术支持

---

**注意：** 所有平台都提供免费套餐，足够个人项目使用。选择最适合您的方案即可！ 