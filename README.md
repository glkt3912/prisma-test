memo

#### 参考URL
* prismaチュートリアル
https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/ae5b9a

* prismaチートシート
https://qiita.com/koffee0522/items/92be1826f1a150bfe62e

* prismaリレーション
https://zenn.dev/tsucchiiinoko/articles/f222dbbfa23325

#### コマンド(頻出)

* Dockerの立ち上げ（データベースの起動）
  - docker compose up -d

* SQLログの確認
  - docker logs -f postgres

* マイグレーション
  - npx prisma migrate dev --name [マイグレーションコメント]

* データの投入
  - npx prisma db seed --preview-feature
    - pakeage.jsonにseedの設定が必要

* ファイルの実行(TS)
  - npx ts-node [ファイルパス]
  - 例：npx ts-node prisma/index.ts

* ブラウザでDBの確認
  - npx prisma studio