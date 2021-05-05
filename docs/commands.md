テンプレでReact-Reduxアプリ作成
```
cd src
npx create-react-app lattice --template redux
```

ディレクトリ作成
```
cd lattice
cd src
mkdir game
cd game
mkdir img
mkdir style
mkdir components
mkdir containers
mkdir stores
mkdir modules
mkdir constants
cd modules
mkdir game
```

ファイルも入れるとこんな感じになる
```
src
+---index.js
+---App.js
+---game
    +---img
    +---style
    +---components
    |   +---userPanelComponent.js
    |   +---boardPanelComponent.js
    |   +---boardDesignComponent.js
    |   +---smallPieceDesignComponent.js
    |   +---bigPieceDesignComponent.js
    +---containers
    |   +---mainPanelContainer.js
    +---store
    |   +---gameStore.js
    +---constants
    |   +---gameConstant.js
    +---modules
        +---game
            +---reducer.js
            +---actions.js
```

実行するときのコマンド（Gitでクローンしたときのルート部分から）
```
cd src
cd lattice
yarn start
```