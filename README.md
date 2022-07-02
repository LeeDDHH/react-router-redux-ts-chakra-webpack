# React + TypeScript + Webpack5 + React Router + React Redux + Chakra UI

## プロジェクト前提

- できるだけ `ts` ファイルで構成する
- `dev` は `webpack` の `devServer` で立ち上げる
- `create-react-app` ではなく、 `webpack` でビルドする
- `public` 配下に `mock service worker` を立ち上げるためのコードを配置
  - `webpack-dev-server` が `webpack` 以外で提供されるリソースを `public` から取得する
  - `npx msw init public/ --save` でコードを配置できる

---

## 構成

|                    |        |
| :----------------: | :----: |
|      Node.js       | 18.0.0 |
|        npm         | 8.6.0  |
|       React        | 18.2.0 |
|     TypeScript     | 4.7.4  |
|      webpack       | 5.73.0 |
|    webpack-cli     | 4.10.0 |
| webpack-dev-server | 4.9.2  |
|  react-router-dom  | 6.3.0  |
|    react-redux     | 8.0.2  |
|  @reduxjs/toolkit  | 1.8.2  |
|  @chakra-ui/react  | 2.2.1  |
|   @emotion/react   | 11.9.3 |
|  @emotion/styled   | 11.9.3 |
|   framer-motion    | 6.3.13 |
|        msw         | 0.42.3 |

---

## コマンド

### プロジェクト初期化

```bash
npm install
npx msw init public/ --save
```

### ローカルで dev 実行

```bash
npm run dev
```

- `dist` を削除する
- `dev` 用にビルドする
- `webpack` の `devServer` で立ち上げる

### ローカルで prod 実行

```bash
npm start
```

- `dist` を削除する
- `prod` 用にビルドする
- `http-server` でローカルの HTTP サーバーをで立ち上げる

### prod 用のビルドをする

```bash
npm run build
```

- `dist` を削除する
- `prod` 用にビルドする
