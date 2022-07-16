<div align="center">
    <img src="https://user-images.githubusercontent.com/89084713/179345333-ebf6a00f-62bb-450b-962c-bb11c5393e90.png" alt="Icon">
</div>

# UserTodoApp

ユーザーベースの Todo 管理アプリケーションです。  
Todo リストの作成/変更/削除＆ユーザー一覧＆ユーザー情報設定ができます。  
※サンプルアプリの為 API からのデータは[JSONPlaceholder](https://jsonplaceholder.typicode.com/)を取得するようにしています。

[アプリケーションはこちらで公開しています。](https://user-todo-app.vercel.app/)

## Demo

Todo グループと Todo を作成、順番の入れ替え、検索窓で Todo グループの絞り込みします。  
<img src="https://user-images.githubusercontent.com/89084713/179345385-c092f328-cbc0-43a7-8fb8-0a6d0dd6bd84.gif" width="360px">

## Installing

1. リポジトリクローン

```bash
$ git clone https://github.com/Takuty-a11y/UserTodoApp.git
```

2. リポジトリへ移動

```bash
$ cd UserTodoApp
```

3. パッケージインストール

```bash
$ yarn
```

4. アプリケーション起動

```bash
$ yarn start
```

## Usage

### Todo リスト

ログイン時に取得したユーザーと紐づく Todo を API から取得表示します。  
Todo グループ、Todo 共に新規追加、削除、さらにドラッグ&ドロップで順番を入れ替えることができます。  
検索窓で Todo グループの絞り込みができます。

<img src="https://user-images.githubusercontent.com/89084713/179347812-b62868b3-e8b4-40ec-8ac2-fb04fdf77257.png" width="800px" />

### ユーザー一覧

アプリケーション内のユーザー一覧が表示されます。  
モーダル画面にユーザーの詳細情報が表示され、管理ユーザーでログイン時はユーザー詳細を変更できます。  
検索窓でユーザー名の絞り込みができます。

<img src="https://user-images.githubusercontent.com/89084713/179347830-fcdf6925-702a-4bd6-ae10-65d06b5f7f6d.png" width="800px" />

### 設定

ログインユーザーの詳細情報を変更できます。

<img src="https://user-images.githubusercontent.com/89084713/179347842-308e0f38-ff1a-479a-95c7-eb922d414e6f.png" width="800px" />

## Requirement

- react
- typescript
- react-router-dom
- react-beautiful-dnd
- axios
- uuid
- chakra-ui

## License

This software is released under the MIT License, see LICENSE.txt.
