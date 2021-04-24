# 🦹🏼‍♂️ Gatsby

Gatsby 사이트를 쉽게 생성하기 위해서 다음과 같은 명령어를 수행해주면 된다.
```
npm install -g gatsby-cli
```

Gatsby CLI를 통해 쉽고 다양한 기능들을 사용 해볼수있다.
```javascript
//개츠비 명령어 보기
gatsby --help
```

# 🏰 간단히 Hello World 스타터를 이용하여 Gatsby를 빌드해봅시다.
```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

개츠비 Hello World 스타터를 사용해보기 위해 다음 명령어를 해당 폴더에 쳐줍시다.

- new명령어는 새로운 개츠비 프로젝트를 생성하겠다는 의미이다.
- new 다음에 오는 hello-world는 생성된 폴더의 이름이고 바꿀수 있다.
- 마지막으로 지정된 GitHub URL은 사용하려는 시작 코드가있는 코드 저장소를 가리킨다.

생성한 폴더로 가서
```
cd hello-world
```

```
gatsby develop
```
개발모드로 시작해보자.

![image](https://user-images.githubusercontent.com/48292190/115961222-6d05de80-a550-11eb-8419-637d2b62a1ec.png)

이제 당신의 **로컬환경**에서 서버가 돌아갈것이다.

> 만약 빌드에 성공했다면, [링크](http://localhost:8000/)

해당 프로세스를 Kill할려면 `control + c`로 터미널을 종료한다.

정리 
- Gatsby CLI 도구를 사용하여 새 Gatsby 사이트 생성
- Gatsby 개발 서버를 실행하고 사이트를 로컬로 방문했습니다.


> HTML : 모든 웹 브라우저가 이해할 수있는 마크 업 언어입니다. HyperText Markup Language의 약자입니다. HTML은 웹 콘텐츠에 보편적 인 정보 구조를 제공하여 제목, 단락 등을 정의합니다.

> CSS : 웹 콘텐츠 (글꼴, 색상, 레이아웃 등)의 스타일을 지정하는 데 사용되는 표현 언어입니다. Cascading Style Sheets의 약자입니다.

> JavaScript : 웹을 역동적이고 인터랙티브하게 만드는 데 도움이되는 프로그래밍 언어입니다.

> React : 사용자 인터페이스 구축을위한 코드 라이브러리 (JavaScript로 구축). Gatsby가 페이지를 구축하고 콘텐츠를 구조화하는 데 사용하는 프레임 워크입니다.

> GraphQL : 웹 사이트로 데이터를 가져올 수있는 쿼리 언어입니다. Gatsby가 사이트 데이터를 관리하는 데 사용하는 인터페이스입니다.

# 🕵️‍♂️ 코드 자세히 살펴보기 

아까 `🏰 간단히 Hello World 스타터를 이용하여 Gatsby를 빌드해봅시다.`에서 빌드했던 hello-world스타터의 코드를 좀 더 자세히 살펴보도록 하자.
```
gatsby new [SITE_DIRECTORY_NAME]        [URL_OF_STARTER_GITHUB_REPO]
```
다음과 같은 형식으로 개츠비 프로젝트를 빌드할수 있다는 사실은 이제 다 아는 사실이다.

> 아까 스타터로 프로젝트를 빌드했다면 다음과 같은 구조를 가지고 있을것이다.
![image](https://user-images.githubusercontent.com/48292190/115961609-16999f80-a552-11eb-881b-94581debbc2d.png)

우리는 Gatsby코드에 조금 더 익숙해져야할 필요성이 있다.😋

`/src` 에 `src/pages/index.js`를 열어보도록 하자.

```javascript
import React from "react"

export default function Home() {
  return <div>Hello world!</div>
}
```

우리가 리액트를 조금이라도 해봤다면 이 코드가 뭐하는 아이인지 다 알것이다.
**그렇다면 우리는 리액트 프로젝트를 진행했던것처럼 Hello World를 Hello Gatsby로 변경해서 저장후 웹사이트에서 변화를 관찰해보자.**

> **저장후 바로 리로딩이 안돼요!**
> 제 생각에 이 문제는 gatsby의 오류라고 생각합니다. 버전을 다운드레이드 하거나, 불편하더라도 여러번(2~3번) 저장 후 보면 리로딩이 되어 있습니다. 

```javascript
import React from "react"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}

```
공식 문서처럼 다음과 같이 작성하고보면, 
![image](https://user-images.githubusercontent.com/48292190/115962551-e6a0cb00-a556-11eb-9f26-f1cf2efb61d7.png)
이렇게 예상했던것처럼 잘 나오는 것을 볼 수 있다.

