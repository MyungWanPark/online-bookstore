
### 배포 링크 클릭(Vercel 호스팅 이용)
[온라인 서점](https://online-bookstore-six.vercel.app/) <br/>

### 상세 문서 클릭
[노션](https://simplistic-hippodraco-d28.notion.site/1a7a4f7f584080b49c3ec1d3bae51336) <br/>

## Ubuntu 18.04 실행 환경: **Node.js v16, Next.js v13** <br/>
(Node 16 이유: Ubuntu 18.04의 기본 `libc6` 라이브러리 버전(2.27)이 Node.js 18이 요구하는 2.28 이상보다 낮았기 때문입니다.)

윈도우를 사용하고 있기 때문에 Docker를 이용해서 Ubuntu 18.04 환경에서 실행되는지 테스트했습니다. 

실행 명령어는 다음과 같습니다. 

1. 도커 컨테이너 생성 및 실행(3000번 포트 사용, 도커 x => 바로 2번으로)
   
```bash
docker run -it --name set-container-name -p 3000:3000 ubuntu:18.04 /bin/bash
```

2. Node 16 버전이 설치되어 있지 않을 경우, 노드 설치

```bash
apt update && apt install -y curl
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt install -y nodejs
```

3. Node, NPM 설치 버전 확인 방법

```bash
node -v
npm -v
```

4. Github에서 코드를 복사합니다.

```bash
apt install -y git
git clone https://github.com/MyungWanPark/online-bookstore.git /app
```

5. 의존성 설치를 진행합니다.

```bash
cd /app
npm install
```

6. Next.js 어플리케이션을 실행합니다.(개발 모드 및 프로덕션 모드)

```bash
npm run dev // 개발 모드

npm run build // 프로덕션 모드
npm run start

```

7. 정상적으로 실행되는지 확인합니다.

```bash
curl -I http://localhost:3000
```

`HTTP/1.1 200 OK` 라는 응답을 받거나, 브라우저에 `http://localhost:3000` 주소를 검색하면 확인할 수 있습니다.
