# gameDuo

## 사용 기술스택

### Nods.js

### Express

### mysqlDB

### Sequelize

## 실행방법

### 1.해당 레포지토리를 clone합니다.

```shell
git clone https://github.com/Choi-jeonghoon/gameDuo
```

### 2. 다운 받으신 폴더로 들어갑니다

```shell
cd game_duo
```

### 3. 의존성들을 설치합니다.

```shell
npm i
```

### 4. 실행시킵니다!

```shell
npm start
```

- DB 모델링
<img width="576" alt="스크린샷 2022-09-24 오전 3 34 05" src="https://user-images.githubusercontent.com/68211978/192034390-18cd653e-be8a-4513-8663-7ca18a3823d4.png">



## 개발요구사항

1. 유저생성 
중복되지 않는 userId를 생성합니다.

2. 유저조회 
해당 유저의 보스레이드 총 점수와 보스레이드 참여기록을 알 수 있습니다.

3. 보스레이드 상태조회 
보스 레이드 현재 상태(입장가능여부 및 레이드 진행중인 유저의 userId)를 알 수 있습니다.

4. 보스레이드 시작 
보스레이드 시작 가능하다면 중복되지 않는 raidId를 생성합니다.

5. 보스레이드 종료( 구현 중 )
저장된 userId와 raidId 가 일치하는지 체크합니다.
status 값을 제한시간 초과 시 "실패", 성공 시 "성공"으로 저장합니다.
REDIS 랭킹 데이터에 점수를 업데이트 해줍니다.

6. 보스레이드 랭킹 조회 READ( 구현 예정 )
보스레이드 랭킹정보와 해당 유저의 랭킹 및 점수를 알 수 있습니다.
랭킹 기능은 REDIS를 이용하여 구현하였습니다.

## 개발된 기능설명
### 유저를 생성했을때의 postman의 모습입니다.
<img width="644" alt="유저생성" src="https://user-images.githubusercontent.com/68211978/192035168-e397a822-722f-4faa-9b11-71c617039b0b.png">

### 유저의 정보를 postMan 의 모습입니다.
<img width="567" alt="유저의 정보" src="https://user-images.githubusercontent.com/68211978/192035185-4f0a17f4-37e7-498d-ad7f-b5565322d5cd.png">

### 레이드의 상태를 조회했을때 postMan의 모습입니다.
<img width="452" alt="레이드 상태 조회" src="https://user-images.githubusercontent.com/68211978/192035196-fbc03a69-dfa3-44e5-ae63-c9cc2e29d1ec.png">

### 레이드에 입장시 postMan의 모습입니다.
<img width="557" alt="레이드 입장" src="https://user-images.githubusercontent.com/68211978/192035206-4bcf5a15-c048-4c73-91b3-f49a5b4ecdfe.png">


 
