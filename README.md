# rails-class-table-v2

## What's this?

[Rails API](https://api.rubyonrails.org)にあるクラスをドキュメンテーションコメントが多い順に表示させます。

## Demo

  * <https://healthypackrat.github.io/rails-class-table-v2/>

## Usage

  * クラス名でフィルタリングできます
  * ヘッダをクリックしてソートできます
  * 組み込みライブラリのみを表示するには、[`Abstract|Action|Active|Rails`を入力して、**正規表現で検索**と**索結果を反転**をチェックします](https://healthypackrat.github.io/rails-class-table-v2/#/search?filterKey=Abstract%7CAction%7CActive%7CRails&hideNoDoc=true&invertResult=true&useRegExp=true)

## The Stack Used

  * [create-react-app](https://create-react-app.dev/)
  * [React](https://reactjs.org/)
  * [Redux](https://redux.js.org/)
  * [react-router](https://reacttraining.com/react-router/)

## Development

開発用サーバを起動:

```
$ yarn start
```

GitHub Pagesにデプロイ:

```
$ npm run deploy
```

## Misc

  * [`src/data/entries.json`](src/data/entries.json)は[rails-class-table-data](https://github.com/healthypackrat/rails-class-table-data)で生成します
