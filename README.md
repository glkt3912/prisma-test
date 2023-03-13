memo

参考URL
https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/ae5b9a

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

* ブラウザでDBの確認
  - npx prisma studio