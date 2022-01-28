# React + TypeScript + Webpack5 + React Router + React Redux + Chakra UI

## プロジェクト前提

- できるだけ `ts` ファイルで構成する
- `dev` は `webpack` の `devServer` で立ち上げる
- `create-react-app` ではなく、 `webpack` でビルドする

---

## 構成

|||
|:---:|:---:|
|Node.js|16.9.0|
|npm|7.21.1|
|React|17.0.2|
|TypeScript|4.5.5|
|webpack|5.66.0|
|webpack-cli|4.9.1|
|webpack-dev-server|4.7.3|
|react-router-dom|6.2.1|
|react-redux|7.2.6|
|@reduxjs/toolkit|1.7.1|
|@chakra-ui/react|1.7.4|
|@emotion/react|11.7.1|
|@emotion/styled|11.6.0|
|framer-motion|5.6.0|

---

## コマンド

### ローカルでdev実行

```bash
npm run dev
```

- `dist` を削除する
- `dev` 用にビルドする
- `webpack` の `devServer` で立ち上げる

### ローカルでprod実行

```bash
npm start
```

- `dist` を削除する
- `prod` 用にビルドする
- `http-server` でローカルのHTTPサーバーをで立ち上げる

### prod用のビルドをする

```bash
npm run build
```

- `dist` を削除する
- `prod` 用にビルドする
