# TEAM irumdoduk
🔔 서비스명 : 이름도둑

🔔 서비스 한줄소개 : 친구와 관련된 퀴즈를 푸며 닮은꼴로 이름 바꾸기(ex. 김동재 - 건강한 주우재)

🔔 서비스 가치제안 : 서로를 알아가는 장벽을 낮추고, 쉽게 재미를 추구하는 앱

🔔 서비스 문제정의 : 매번 뒤풀이나 모임을 할 때마다 자기소개를 해야하는 번거로움

🔔 서비스 타겟정의 : 서로를 더 알아가고 싶은 200명의 솝트인

<br/>

### ⚒️ Used Stacks
 ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
 ![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

<br/>

### 👥 Contributors
|김동재|임채영|


<br/>

### 💻 Roles
|기능명|엔드포인트|담당|구현 진척도|
| :---: | :---: | :---: | :---: |
|개인 소개 페이지 조회|[GET] /page/:userId|`임채영`| |
|홈 화면 조회|[GET] /page|`임채영`| |
|개인 퀴즈 조회|[GET] /page/quiz/:userId|`김동재`| |
|개인 닉네임 변경|[PUT] /page/:userId/edit|`김동재`| |


<br/>

### ERD
![drawSQL-export-2022-11-20_04_28](https://user-images.githubusercontent.com/102947253/202871790-f58e3fa4-23fa-441c-a3b8-657b3dcf9f74.png)




<br/>

### 🧑‍💻 Code Convention

<details>
<summary>변수명</summary>   
<div markdown="1">       

 1. Camel Case 사용
 2. 함수의 경우 동사+명사 사용 ( ex) getUser() )
 3. 약어는 되도록 사용하지 않음
 
</div>
</details>

<details>
<summary>주석</summary>   
<div markdown="1">       

 1. 한 줄 주석 사용 //
 2. 함수 주석
 ```
 /**
 * @route
 * @desc
 * @access
 **/
 getUser()
 ```
 
</div>
</details>

이 외 ESLint 라이브러리 문법을 따른다.

<br/>

### 🎋 Branch Convention
|Branch 이름|용도|
| :--: | :--: |
|main|초기 세팅|
|develop|배포 branch (api 로직 구현 완료)|
|feature/#이슈번호|이슈별 api 로직 구현|

- feature -> development : Pull Request (코드 리뷰 없이 merge 불가)

<br/>

### ⬆️ Commit Convention
```
[브랜치 이름] 기능 (또는 변경사항) 간략 설명 (70자)

- 보충 설명이 필요한 경우
- Head에 한칸을 띄어서 작성

issue tracker: 이슈 번호 (option)
```

<br/>

### 📂 Folder Constructor
```
3-Layer Architecture 기반

📁 src
|_ 📁 config
|_ 📁 controllers
|_ 📁 interfaces
|_ 📁 models
|_ 📁 modules
|_ 📁 routes
|_ 📁 services
|_ 📁 test
|_ index.ts
```
<details>
<summary> <h3> schema.prisma </h3></summary>   
<div markdown="1">   

```
{
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  userId    Int     @id @unique @default(autoincrement())
  name      String  @db.VarChar(10)
  nickName  String  @db.VarChar(10)
  part      String? @db.VarChar(10)
  ybob      String? @db.VarChar(10)
  age       Int?
  mbti      String? @db.VarChar(10)
  major     String? @db.VarChar(10)
  gender    String? @db.VarChar(10)
  photoUrl  String  @db.VarChar(100)
  samdae    Int?
}
```
</div>
</details>

<br/>

<details>
<summary> <h3> 🔶 package.json (dependencies module)</h3></summary>   
<div markdown="1">   

```
{
  "name": "Server",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/31th-SOPKATHON-7/Server.git",
  "author": "ehdwoKIM <kinbell19@gmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist",
    "db:pull": "npx prisma db pull",
    "db:push": "npx prisma db push",
    "generate": "npx prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^4.6.1",
    "bcryptjs": "^2.4.3",
    "express": "^4.18.2",
    "express-validator": "^6.14.2",
    "prisma": "^4.6.1",
    "typescript": "^4.9.3"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.14",
    "@types/express-validator": "^3.0.0",
    "@types/node": "^18.11.9",
    "nodemon": "^2.0.20",
    "ts-node": "^10.9.1"
  }    
}
```
</div>
</details>
 
<br/>

### 📌 Server Architecture
- 개발 환경 : Typescript, Express(Node.js)
- 데이터베이스 : PostgreSQL, AWS S3
- 서버 환경 : AWS EC2, PM2
