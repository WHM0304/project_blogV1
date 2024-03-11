## MySQL 연동하기

- 프로젝트와 prisma 환경 설정하기

```bash
npx prisma init --datasource-provider mysql

```

#### MySQL 연결 URL 설정하기

- 프로젝트 폴더에 `.env` 파일을 만들거나 이미 있으면 다음 내용을 추가하기 -`DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"`

- DB연결 초기화 하기 :

```bash
npx prisma generate
```

#### Table 없을때 하기

- Table 생성하기 :

```bash
npx prisma migrate dev --name init
```
