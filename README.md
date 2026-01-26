# 概率学习小助手（初三版）

这是一个完全基于Web技术构建的智能教学应用，无需依赖任何第三方AI平台（如Coze/Dify）。它完美复刻了您要求的“概率学习教练”的所有功能。

## 🎯 功能特点

1.  **智能对话界面**：仿聊天应用的用户体验，沉浸式学习。
2.  **完整题库**：内置了您提供的 P001-P008 8道概率题目，涵盖骰子、硬币、抽球等知识点。
3.  **自适应难度**：
    *   **升级**：连对2题，难度自动+1。
    *   **降级**：答错题目，难度自动-1（最低为1）。
4.  **分层提示系统**：
    *   答错时自动给出“提示1”。
    *   再次答错或请求提示时，依次给出提示2、3、4。
    *   最后提供完整解析。
5.  **智能判分**：支持识别分数（如 `1/2`）和小数（如 `0.5`），自动处理误差。
6.  **学习总结**：练习结束后自动生成数据报告，分析易错知识点。

## 🚀 如何开始

1.  点击 **Publish** (发布) 按钮，即可获得在线使用的网址。
2.  在输入框中输入“**开始**”即可默认开始练习（默认：骰子，难度1）。
3.  或者输入指令，如：“**练抽球，难度2**”。

## 📂 文件结构

*   `index.html`: 主页面结构。
*   `css/style.css`: 聊天界面样式。
*   `js/app.js`: 核心逻辑（状态机、难度算法、交互逻辑）。
*   `js/questions.js`: 题库数据文件（方便后续添加更多题目）。

## 💡 使用技巧

*   **输入答案**：直接输入数字或分数，如 `7/8`。
*   **求助**：遇到不会的题，输入 `提示` 或 `再给个提示`。
*   **看解析**：输入 `解析` 或 `答案` 直接查看详解。
*   **结束**：输入 `结束` 或 `不练了` 查看学习小结。

## Deployment Info (Cloudflare Pages)

This project has been configured for Cloudflare Pages deployment with Hono backend.

- **Frontend**: Static HTML/CSS/JS (served via Vite in dev, Cloudflare Pages in prod)
- **Backend**: Hono (API routes at `/api/*`)
- **Development**: `npm run dev` (Vite)
- **Production**: `npm run deploy` (Wrangler)
- **Public URL**: https://webapp.pages.dev (after deployment)

### How to Deploy

1. Setup Cloudflare API Key: `setup_cloudflare_api_key`
2. Deploy: `npm run deploy`
