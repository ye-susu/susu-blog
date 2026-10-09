# susu-blog

## 本地开发

推荐使用 Node.js 24 LTS；最低要求为 Node.js 22.18.0。
使用 nvm 时可以执行 `nvm install` 和 `nvm use`，读取项目的 `.nvmrc`。

```bash
npm ci
npm run docs:dev
```

开发服务默认仅监听 `127.0.0.1:8080`，请通过 `http://127.0.0.1:8080/` 访问。
不要在不可信网络中通过 `--host 0.0.0.0` 暴露开发服务。

## 生产构建

```bash
npm run docs:build
```

GitHub Actions 使用 Node.js 24 构建并部署静态文件。
