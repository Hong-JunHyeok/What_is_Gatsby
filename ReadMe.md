# ๐ฆน๐ผโโ๏ธ Gatsby

Gatsby ์ฌ์ดํธ๋ฅผ ์ฝ๊ฒ ์์ฑํ๊ธฐ ์ํด์ ๋ค์๊ณผ ๊ฐ์ ๋ช๋ น์ด๋ฅผ ์ํํด์ฃผ๋ฉด ๋๋ค.

```
npm install -g gatsby-cli
```

Gatsby CLI๋ฅผ ํตํด ์ฝ๊ณ  ๋ค์ํ ๊ธฐ๋ฅ๋ค์ ์ฌ์ฉ ํด๋ณผ์์๋ค.

```javascript
//๊ฐ์ธ ๋น ๋ช๋ น์ด ๋ณด๊ธฐ
gatsby --help
```

# ๐ฐ ๊ฐ๋จํ Hello World ์คํํฐ๋ฅผ ์ด์ฉํ์ฌ Gatsby๋ฅผ ๋น๋ํด๋ด์๋ค.

```
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
```

๊ฐ์ธ ๋น Hello World ์คํํฐ๋ฅผ ์ฌ์ฉํด๋ณด๊ธฐ ์ํด ๋ค์ ๋ช๋ น์ด๋ฅผ ํด๋น ํด๋์ ์ณ์ค์๋ค.

- new๋ช๋ น์ด๋ ์๋ก์ด ๊ฐ์ธ ๋น ํ๋ก์ ํธ๋ฅผ ์์ฑํ๊ฒ ๋ค๋ ์๋ฏธ์ด๋ค.
- new ๋ค์์ ์ค๋ hello-world๋ ์์ฑ๋ ํด๋์ ์ด๋ฆ์ด๊ณ  ๋ฐ๊ฟ์ ์๋ค.
- ๋ง์ง๋ง์ผ๋ก ์ง์ ๋ GitHub URL์ ์ฌ์ฉํ๋ ค๋ ์์ ์ฝ๋๊ฐ์๋ ์ฝ๋ ์ ์ฅ์๋ฅผ ๊ฐ๋ฆฌํจ๋ค.

์์ฑํ ํด๋๋ก ๊ฐ์

```
cd hello-world
```

```
gatsby develop
```

๊ฐ๋ฐ๋ชจ๋๋ก ์์ํด๋ณด์.

![image](https://user-images.githubusercontent.com/48292190/115961222-6d05de80-a550-11eb-8419-637d2b62a1ec.png)

์ด์  ๋น์ ์ **๋ก์ปฌํ๊ฒฝ**์์ ์๋ฒ๊ฐ ๋์๊ฐ๊ฒ์ด๋ค.

> ๋ง์ฝ ๋น๋์ ์ฑ๊ณตํ๋ค๋ฉด, [๋งํฌ](http://localhost:8000/)

ํด๋น ํ๋ก์ธ์ค๋ฅผ Killํ ๋ ค๋ฉด `control + c`๋ก ํฐ๋ฏธ๋์ ์ข๋ฃํ๋ค.

์ ๋ฆฌ

- Gatsby CLI ๋๊ตฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ Gatsby ์ฌ์ดํธ ์์ฑ
- Gatsby ๊ฐ๋ฐ ์๋ฒ๋ฅผ ์คํํ๊ณ  ์ฌ์ดํธ๋ฅผ ๋ก์ปฌ๋ก ๋ฐฉ๋ฌธํ์ต๋๋ค.

> HTML : ๋ชจ๋  ์น ๋ธ๋ผ์ฐ์ ๊ฐ ์ดํดํ  ์์๋ ๋งํฌ ์ ์ธ์ด์๋๋ค. HyperText Markup Language์ ์ฝ์์๋๋ค. HTML์ ์น ์ฝํ์ธ ์ ๋ณดํธ์  ์ธ ์ ๋ณด ๊ตฌ์กฐ๋ฅผ ์ ๊ณตํ์ฌ ์ ๋ชฉ, ๋จ๋ฝ ๋ฑ์ ์ ์ํฉ๋๋ค.

> CSS : ์น ์ฝํ์ธ  (๊ธ๊ผด, ์์, ๋ ์ด์์ ๋ฑ)์ ์คํ์ผ์ ์ง์ ํ๋ ๋ฐ ์ฌ์ฉ๋๋ ํํ ์ธ์ด์๋๋ค. Cascading Style Sheets์ ์ฝ์์๋๋ค.

> JavaScript : ์น์ ์ญ๋์ ์ด๊ณ  ์ธํฐ๋ํฐ๋ธํ๊ฒ ๋ง๋๋ ๋ฐ ๋์์ด๋๋ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์๋๋ค.

> React : ์ฌ์ฉ์ ์ธํฐํ์ด์ค ๊ตฌ์ถ์์ํ ์ฝ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ (JavaScript๋ก ๊ตฌ์ถ). Gatsby๊ฐ ํ์ด์ง๋ฅผ ๊ตฌ์ถํ๊ณ  ์ฝํ์ธ ๋ฅผ ๊ตฌ์กฐํํ๋ ๋ฐ ์ฌ์ฉํ๋ ํ๋ ์ ์ํฌ์๋๋ค.

> GraphQL : ์น ์ฌ์ดํธ๋ก ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์์๋ ์ฟผ๋ฆฌ ์ธ์ด์๋๋ค. Gatsby๊ฐ ์ฌ์ดํธ ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌํ๋ ๋ฐ ์ฌ์ฉํ๋ ์ธํฐํ์ด์ค์๋๋ค.

# ๐ต๏ธโโ๏ธ ์ฝ๋ ์์ธํ ์ดํด๋ณด๊ธฐ

์๊น `๐ฐ ๊ฐ๋จํ Hello World ์คํํฐ๋ฅผ ์ด์ฉํ์ฌ Gatsby๋ฅผ ๋น๋ํด๋ด์๋ค.`์์ ๋น๋ํ๋ hello-world์คํํฐ์ ์ฝ๋๋ฅผ ์ข ๋ ์์ธํ ์ดํด๋ณด๋๋ก ํ์.

```
gatsby new [SITE_DIRECTORY_NAME]        [URL_OF_STARTER_GITHUB_REPO]
```

๋ค์๊ณผ ๊ฐ์ ํ์์ผ๋ก ๊ฐ์ธ ๋น ํ๋ก์ ํธ๋ฅผ ๋น๋ํ ์ ์๋ค๋ ์ฌ์ค์ ์ด์  ๋ค ์๋ ์ฌ์ค์ด๋ค.

> ์๊น ์คํํฐ๋ก ํ๋ก์ ํธ๋ฅผ ๋น๋ํ๋ค๋ฉด ๋ค์๊ณผ ๊ฐ์ ๊ตฌ์กฐ๋ฅผ ๊ฐ์ง๊ณ  ์์๊ฒ์ด๋ค.
> ![image](https://user-images.githubusercontent.com/48292190/115961609-16999f80-a552-11eb-881b-94581debbc2d.png)

์ฐ๋ฆฌ๋ Gatsby์ฝ๋์ ์กฐ๊ธ ๋ ์ต์ํด์ ธ์ผํ  ํ์์ฑ์ด ์๋ค.๐

`/src` ์ `src/pages/index.js`๋ฅผ ์ด์ด๋ณด๋๋ก ํ์.

```javascript
import React from "react";

export default function Home() {
  return <div>Hello world!</div>;
}
```

์ฐ๋ฆฌ๊ฐ ๋ฆฌ์กํธ๋ฅผ ์กฐ๊ธ์ด๋ผ๋ ํด๋ดค๋ค๋ฉด ์ด ์ฝ๋๊ฐ ๋ญํ๋ ์์ด์ธ์ง ๋ค ์๊ฒ์ด๋ค.
**๊ทธ๋ ๋ค๋ฉด ์ฐ๋ฆฌ๋ ๋ฆฌ์กํธ ํ๋ก์ ํธ๋ฅผ ์งํํ๋๊ฒ์ฒ๋ผ Hello World๋ฅผ Hello Gatsby๋ก ๋ณ๊ฒฝํด์ ์ ์ฅํ ์น์ฌ์ดํธ์์ ๋ณํ๋ฅผ ๊ด์ฐฐํด๋ณด์.**

<del>
์ ์ฅํ ๋ฐ๋ก ๋ฆฌ๋ก๋ฉ์ด ์๋ผ์!
์  ์๊ฐ์ ์ด ๋ฌธ์ ๋ gatsby์ ์ค๋ฅ๋ผ๊ณ  ์๊ฐํฉ๋๋ค. ๋ฒ์ ์ ๋ค์ด๋๋ ์ด๋ ํ๊ฑฐ๋, ๋ถํธํ๋๋ผ๋ ์ฌ๋ฌ๋ฒ(2~3๋ฒ) ์ ์ฅ ํ ๋ณด๋ฉด ๋ฆฌ๋ก๋ฉ์ด ๋์ด ์์ต๋๋ค. 
</del>

# ํซ๋ก๋ฉ ๋ฌธ์  ํด๊ฒฐ

webpack dev server๊ฐ ํซ ๋ชจ๋ ๊ต์ฒด๋ฅผ ์ํด 0.0.0.0์ localhost๋ก ์ธ์ํ์ง ๋ชปํ๋ ๋ฌธ์ 

```
gatsby develop --host localhost --port 8000
```

์์ ๊ฐ์ด ์คํํ๋ฉด ๋ฌธ์  ํด๊ฒฐ

```javascript
import React from "react";

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
```

๊ณต์ ๋ฌธ์์ฒ๋ผ ๋ค์๊ณผ ๊ฐ์ด ์์ฑํ๊ณ ๋ณด๋ฉด,
![image](https://user-images.githubusercontent.com/48292190/115962551-e6a0cb00-a556-11eb-9f26-f1cf2efb61d7.png)
์ด๋ ๊ฒ ์์ํ๋๊ฒ์ฒ๋ผ ์ ๋์ค๋ ๊ฒ์ ๋ณผ ์ ์๋ค.

์๊น๋ ๋งํ์ง๋ง ์ด๋์ ๋ ๋ฆฌ์กํธ๋ฅผ ํด๋ณธ ์ฌ๋์ด๋ผ๋ฉด ๋์น๋ฅผ ์ฑ์๊ฒ์ด๋ค.
**Gatsby๋ ๋ฆฌ์กํธ๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋์๊ฐ๋ค.**

`src/pages/*.js`์์ ๋ด์ฉ๋ค์ ์ ๋ถ ํ์ด์ง๊ฐ ๋๋ค.
์ด์  ์ค์ ๋ก ๋๋ ๊ฒ์ธ์ง ํ๋ฒ ํ์ธํด๋ณด๋๋ก ํ์.

![image](https://user-images.githubusercontent.com/48292190/115963458-4d73b380-a55a-11eb-8a85-67495f65726b.png)
์ด๋ ๊ฒ about์ด๋ผ๋ ํ์ผ์ ๋ง๋ค๊ณ  ๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ฃผ์.

```javascript
import React from "react";

export default function About() {
  return <div>์ด๊ฒ์ About์ ๋ํ about์๋๋ค.</div>;
}
```

์ด๋ ๊ฒ ํ๊ณ 
http://localhost:8000/about ์ ์ ์ํด๋ณด๋๋ก ํ์.

## ๐๊ฐ์ธ ๋น ๊ณต์ํํ์ด์ง์์ ์ค๋ชํ๋ ์น์0 ~ 3์ ๋๋ ๋ฆฌ์กํธ์ ๋ํ ์ค๋ช์ด๋ฏ๋ก ์ค๋ช์ด ํ์ํ ์ฌ๋์ ๋ณด๋๋ก ํ์.

# ๐ Link๋ก ๋ผ์ฐํํ๊ธฐ

```javascript
import { Link } from "gatsby";
```

๋ค์๊ณผ ๊ฐ์ ์ฝ๋๋ก Link๋ผ๋ ์์ด๋ฅผ ๊ฐ์ ธ์ค๋๋ก ํ์.

์ด์  index.js์ about์ผ๋ก ๊ฐ๋ ์ฝ๋๋ฅผ ์์ฑํด๋ณด๋๋ก ํ์.

```javascript
import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <>
      <Link to="/about">About์ผ๋ก ์ด๋ํฉ๋๋ค!</Link>
    </>
  );
}
```

`Link`๋ฅผ ์ฌ์ฉํ๊ฒ ๋๋ฉด Gatsbyํ๋ก์ ํธ ๋ด์์ ๋ผ์ฐํ์ ํ ๋ ํ์ด์ง๋ฅผ ๋ฆฌ๋ก๋ฉํ์ง ์๊ณ  ์ด๋ํ๊ฒ ๋๋ค.

> # aํ๊ทธ๋ ๊ทธ๋ผ ์ธ๋ชจ๊ฐ ์๋์?
>
> ์๋๋๋ค! ์ธ๋ถ๋งํฌ๋ก ์ด๋ํ ๋ aํ๊ทธ๋ฅผ ์ฌ์ฉํฉ๋๋ค.

# ๐จ Gatsby ์คํ์ผ๋ง

tutorial-part-two๋ผ๋ ํด๋์ gatsbyํ๋ก์ ํธ๋ฅผ ํ๋ ๋ ๋ง๋ค์ด๋ณด์.

```
gatsby new tutorial-part-two https://github.com/gatsbyjs/gatsby-starter-hello-world
```

src์์ `styles`๋ผ๋ ํด๋๋ฅผ ๋ง๋ค๊ณ  ๊ทธ ์์ `global.css`๋ผ๋ ํ์ผ์ ๋ง๋ค์ด๋ณด์.

๊ธ๋ก๋ฒ ์คํ์ผ๋ง์ ํด๋ณผ๊ฑด๋ฐ, ์ด๋ ํ๋ก์ ํธ์ ์ ์ฒด์ ์ผ๋ก ์ฌ์ฉํ  ์คํ์ผ์ ์ง์ ํ๋ ๊ฒ์ด๋ค. ์๋ฅผ๋ค์ด ํ์ดํฌ๊ทธ๋ํผ๋ผ๋ ์ง ์๊น์ด๋ ๊ทธ๋ฐ๊ฒ๋ค ๋ง์ด๋ค.

```css
html {
  background-color: lavenderblush;
}
```

๋ค์ ์์ฑ์ `global.css`์ ์ถ๊ฐํด๋ณด์.

์ด์  `gatsby-browser.js`๋ผ๋ ํ์ผ์ ๋ง๋ค์ด๋ณด์.

์ด ํ์ผ์ ๋ฃจํธํด๋์ ์กด์ฌํด์ผ ํ๋ค.

**์ด์  ์ต๊ทผ์ ๋ง๋  global.css๋ฅผ gatsby-browser.js์ importํด์ฃผ์.**

> server์ ๊ป๋ค๊ฐ ๋ค์ ์ผ๋ณด์.

![image](https://user-images.githubusercontent.com/48292190/115964147-f5d74700-a55d-11eb-9259-9ce6c44597f3.png)

๊ทธ๋ฌ๋ฉด ์ด๋ ๊ฒ ์ ์ญ์ ์ผ๋ก background-color๊ฐ lavenderblush๊ฐ ๋๊ฒ์ ํ์ธํ  ์ ์๋ค.

> ์ด๋ ๊ฒ gatsby-browser.js๋ฅผ ์ฌ์ฉํด์ ์ ์ญ ์คํ์ผ์ ์ ์ฉํ๋ ๋ฐฉ๋ฒ๋ ์์ง๋ง ๊ณต์  ๋ ์ด์์์ ์คํ์ผ์ ์ ์ฉํ๋ ๋ฐฉ๋ฒ๋ ์๋ค.

# ๐คทโโ๏ธ CSS ๋ชจ๋

CSS๋ฅผ ๋ชจ๋ํํด์ ๊ตฌ์ฑ ์์ ์งํฅ ๋ฐฉ์์ผ๋ก ์คํ์ผ์ ์ฒ๋ฆฌํ๋ ๋ค์ํ ๋ฐฉ๋ฒ์ ๋ํด ์์๋ณด์.

> CSS ๋ชจ๋ ์ ๋ชจ๋  ํด๋์ค ์ด๋ฆ ๋ฐ ์ ๋๋ฉ์ด์ ์ด๋ฆ์ ๊ธฐ๋ณธ์ ์ผ๋ก ๋ก์ปฌ ๋ฒ์๊ฐ๋์ด์๋ CSS ํ์ผ์๋๋ค.

CSS๋ชจ๋์ CSS๋ฅผ ์ ์์ ์ผ๋ก ์์ฑํ  ์ ์์ง๋ง ํจ์ฌ ์์ ํ๊ธฐ ๋๋ฌธ์ ์ธ๊ธฐ๊ฐ ๋ง๋ค.

### ๐จ ์ง์  ํด๋ด์๋ค.

1.src/components๋ฅผ ๋ง๋  ๋ค์์, ์ ๋๋ ํฐ๋ฆฌ `container.js`์ `container.module.css`๋ฅผ ๋ง๋ค์.

![image](https://user-images.githubusercontent.com/48292190/115990923-e6f5a080-a600-11eb-9cb8-701f1c76e542.png)

์ด์  container.js์์ ๋ค์๊ณผ ๊ฐ์ด ์ฝ๋ฉํด์ฃผ์.

```javascript
import React from "react";
import * as containerStyles from "./container.module.css";

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>;
}
```

๋ค์์ css์ด๋ค.

```css
.container {
  margin: 3rem auto;
  max-width: 600px;
}
```

์ด๋ ๊ฒ ์์์ ํด์ค ๋ค์์ pages์ ๋ง๋  ์ปดํฌ๋ํธ๋ฅผ ์ฐ๊ฒฐํด์ฃผ์.

```javascript
import React from "react";
import Container from "../components/container";
export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
}
```

์ด๋ ๊ฒ ํด์ฃผ๊ณ  http://localhost:8000/about ์ ์ ์ํด๋ณด๋ฉด,
![image](https://user-images.githubusercontent.com/48292190/115991018-4489ed00-a601-11eb-8cc9-5878c26627b2.png)

์ ์์ ์ผ๋ก ์คํ์ผ์ด ์ ์ฉ๋ ๋ชจ์ต์ ๋ณผ ์ ์๋ค.

## ๐ CSS ๋ชจ๋์ ์ฌ์ฉํ์ฌ ๊ตฌ์ฑ ์์ ์คํ์ผ ์ง์ 

`pages`์ `about.module.css`๋ฅผ ๋ง๋ค์ด๋ณด์.

```css
.user {
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
}
.user:last-child {
  margin-bottom: 0;
}
.avatar {
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
}
.description {
  flex: 1;
  margin-left: 18px;
  padding: 12px;
}
.username {
  margin: 0 0 12px 0;
  padding: 0;
}
.excerpt {
  margin: 0;
}
```

๊ทธ ๋ค์ aboutํ์ด์ง์ import๋ฅผ ํด์ฃผ๋๋ก ํ์.

```javascript
import React from "react";
import Container from "../components/containers";
import * as styles from "./about.module.css";

export default function About() {
  console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  );
}
```

#### ๊ทธ๋ฌ๋ฉด ์ฝ์์ฐฝ์ ๋ค์๊ณผ ๊ฐ์ด ์ฐํ๊ฒ์ด๋ค.

![image](https://user-images.githubusercontent.com/48292190/116013555-c282de00-a66b-11eb-9a61-b8f7ebc55f41.png)

> ๋งํฌ์ข ๋ฐ๊ฟ๊ฒ์...๐ค

## Module์ด ์ ์ฉ์ด ์๋์!

๊ทธ๋ฐ ๊ฒฝ์ฐ์๋ ํ์ผ์ ํ์ฅ์๋ฅผ ํ์ธํด๋ณด์ธ์!
`.module.css`์ฌ์ผ๋ง ํฉ๋๋ค. `.css`๋ CSS ๋ชจ๋์ด ์ ์ฉ๋์ง ์์ต๋๋ค.

`import * as styles from './about.css';`

## ๊ทธ๋ผ ํ๋ฒ ์ ๋๋ก ์ฌ์ฉํด๋ณผ๊น์?

```javascript
import React from "react";
import Container from "../components/containers";
import * as styles from "./about.module.css";

const User = (props) => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
);

export default function About() {
  console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Daniela Dewitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  );
}
```

๋ค์๊ณผ ๊ฐ์ด about.js์ ์๋ ฅํด์ฃผ์ธ์.

๊ทธ๋ฌ๋ฉด /about์๋ ๋ค์๊ณผ ๊ฐ์ ํ๋ฉด์ด ๋ณด์ผ๊ฒ๋๋ค.
![image](https://user-images.githubusercontent.com/48292190/116028226-a5610600-a691-11eb-96c6-b23d333dbeac.png)

์ด๋์ ๋ ๊ฐ์ ์ก์์ง์?

## CSS in JS๋?

> CSS-in-JS๋ ์ปดํฌ๋ํธ ์งํฅ ์คํ์ผ๋ง ์ ๊ทผ ๋ฐฉ์์ด๋ค.

๊ฐ์ฅ ์ผ๋ฐ์ ์ผ๋ก JavaScript๋ฅผ ์ฌ์ฉํ์ฌ CSS๋ฅผ ์ธ๋ผ์ธ์ผ๋ก ๊ตฌ์ฑ ํ๋ ํจํด ์ด๋ค.
`Emotion`์ด๋ `Styled-components`๋ฑ์ด ์์ต๋๋ค.

## ์ค์ฒฉ๋ ๋ ์ด์์ ๊ตฌ์ฑ ์์ ๋ง๋ค๊ธฐ

> Gatsby ํ๋ฌ๊ทธ์ธ๊ณผ "๋ ์ด์์"๊ตฌ์ฑ ์์ ์์ฑ์ ๋ํด ์์๋ด์๋ค.

> ## Gatsby ํ๋ฌ๊ทธ์ธ์ด๋?
>
> Gatsby ์ฌ์ดํธ์ ๊ธฐ๋ฅ์ ์ถ๊ฐํ๋ ๋ฐ ๋์์ด๋๋ JavaScript ํจํค์ง์๋๋ค.

์๋ก์ด ์์ ๋ฅผ ์ํด์ ์๋ก์ด ํ๋ก์ ํธ๋ฅผ ๋น๋ํด๋ด์๋ค.

```
gatsby new tutorial-part-three https://github.com/gatsbyjs/gatsby-starter-hello-world

cd tutorial-part-three
```

์ ์์์ ์๋ฃํ ๋ค์์ ์ฐ๋ฆฌ๊ฐ ์ค์นํ  ํ๋ฌ๊ทธ์ธ์ `Typography.js`์ด๋ค.
`Typography.js`๋ ์ฌ์ดํธ์ ํ์ดํฌ๊ทธ๋ํผ์ ๋ํ ๊ธ๋ก๋ฒ ๊ธฐ๋ณธ ์คํ์ผ์ ์์ฑํ๋ JavaScript ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

๐ ์ ํ๋ฌ๊ทธ์ธ์ ๋ค์ด๋ฐ์ ๋ด์๋ค.

```
yarn add gatsby-plugin-typography react-typography typography typography-theme-fairy-gates
```

๋ค์ด๋ฐ์๊ฒ ์๊ฐ๋ณด๋ค ๋ง๋ค์;; ๐คจ

์์์ด ์๋ฃ๋์์ผ๋ฉด gatsby-config.js์ ๋ค์๊ณผ ๊ฐ์ด ์์ฑํด๋ด์๋ค.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

**gatsby-config.js๋ผ๋ ํ์ผ์ ๊ฐ์ธ ๋น๊ฐ ์๋์ผ๋ก ์ธ์ํ  ์ ์๋ ๋ ๋ค๋ฅธ ํน์ ํ์ผ์๋๋ค.**

์์ธํ ์ค๋ช์ ์ฝ๋ฉ ํ ์ค๋ชํด๋๋ฆฌ๊ฒ ์ต๋๋ค.

src/utils์ typography.js๋ผ๋ ํ์ผ์ ๋ง๋ค์ด๋ด์๋ค.

๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ฃผ์ธ์!

```javascript
import Typography from "typography";
import fairyGateTheme from "typography-theme-fairy-gates";

const typography = new Typography(fairyGateTheme);
export const { scale, rhythm, options } = typography;
export default typography;
```

๊ทธ ๋ค์ ๊ฐ๋ฐ์๋ฒ๋ฅผ ์ด๊ณ  ํ๋ฒ Elements๋ฅผ ๋ด์๋ค
![image](https://user-images.githubusercontent.com/48292190/116029475-6a140680-a694-11eb-8ddd-a14ad34741e0.png)

๋ค์๊ณผ ๊ฐ์ด ๋จ๋๊ฒ์ ๋ณผ ์ ์์ฃ ?

์ด๊ฒ ์ ์ ์ฉ๋์๋์ง ํ์ธํด๋ด์๋ค.
![image](https://user-images.githubusercontent.com/48292190/116029605-a6476700-a694-11eb-8c6c-b44b0b4824d3.png)

์ ์ ์ฉ์ด ๋์๋ค์!

์ด์  page๋ฅผ ๋ช๊ฐ ๋ ๋ง๋ค ์์ ์๋๋ค.
`about.js`,`contact.js`๋ฅผ ๋ง๋ค์ด์ฃผ์ธ์. **๊ทธ๋ฐ ๋ค์ ์ฝ๋๋ฅผ ์์ฑํด์ฃผ์ธ์**

```javascript
//about.js
import React from "react";

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <p>
        Iโm good enough, Iโm smart enough, and gosh darn it, people like me!
      </p>
    </div>
  );
}
```

```javascript
//contact.js
import React from "react";

export default function Contact() {
  return (
    <div>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  );
}
```

์ด์  ๋ง๋ค์๋ ํ์ด์ง๋ฅผ ํ๋ฒ ๋ณผ๊น์?
![image](https://user-images.githubusercontent.com/48292190/116030340-4d78ce00-a696-11eb-921d-93e767437abc.png)
์... ์ ๋์์ง๋ง Layout์ด index.js๋ ํต์ผ๋์์ผ๋ฉด ์ข๊ฒ ์ต๋๋ค.
๊ทธ๋์ ์ปดํฌ๋ํธ๋ฅผ ํ๋ ๋ง๋ค์ด์ ๋ ์ด์์์ ํต์ผํ๋ ๋ฐฉ๋ฒ์ ์์๋ด์๋ค.

`src/components`๋ผ๋ ํด๋์ `layout.js`๋ฅผ ๋ง๋ค์ด์ค์๋ค.

```javascript
import React from "react";
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  );
}
```

๊ทธ ๋ค์์ ๋ง๋  ๋ ์ด์์์ ์ ์ฉํด๋ด์๋ค.

```javascript
import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <h1>About me</h1>
      <p>
        Iโm good enough, Iโm smart enough, and gosh darn it, people like me!
      </p>
    </Layout>
  );
}
```

```javascript
import React from "react";
import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </Layout>
  );
}
```

์ด์  ํ์ด์ง๋ฅผ ๋ณผ๊น์?

![image](https://user-images.githubusercontent.com/48292190/116030501-a5afd000-a696-11eb-8d12-1a7f37d13b9f.png)

์๊น `index.js`๋ ๋์์ธ์ด ํต์ผ๋ ๋๋์ด ํจ์ฌ ์ข์์ก์ต๋๋ค.

## ๐ ๋ ์ด์์์ ์ ๋ชฉ ์ถ๊ฐํ๋ ๋ฐฉ๋ฒ?

```javascript
import React from "react";
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <h1>MySweetSite</h1>
      {children}
    </div>
  );
}
```

๊ทธ๋ฅ ๋ ์ด์์ ์ปดํฌ๋ํธ์ `<h1>`์์ ์ ์ฉ๋ง ํด๋ ๋ชจ๋  ํ์ด์ง์ ๋ค ์ ์ฉ๋๋ ๊ฒ์ ๋ณผ ์ ์์ต๋๋ค.

## โ ํ์ด์ง ๊ฐ NavLink์ถ๊ฐ

`gatsby`์์ ์ง์ํ๋ ๊ธฐ๋ฅ์ค ํ๋์ธ `Link`๋ผ๋ ๊ธฐ๋ฅ์ ์ฌ์ฉํด๋ณด๊ฒ ์ต๋๋ค.

Layout์ปดํฌ๋ํธ์ ๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ฃผ์ธ์

```javascript
import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  );
}
```

์ด์  ์นํ์ด์ง์ ํํ๋ฅผ ์ ์  ๊ฐ์ถฐ๊ฐ๊ณ  ์์ต๋๋ค!

![image](https://user-images.githubusercontent.com/48292190/116031270-4a7edd00-a698-11eb-809f-a8657ec01d7b.png)

# Gatsby์์์ ๋ฐ์ดํฐ

์ฌ๊ธฐ๊น์ง ์ค์จ๋ค๋ฉด Gatsby์ ์ ๋ฐ์ ์์ต๋๋ค. ์กฐ๊ธ๋ง ๋ ํ๋ด์ฃผ์ธ์!
์ฌ์ค, ์ง๊ธ๊น์ง ์ฌ๋ฌ๋ถ์ด ๋ฐฐ์ด ๋ด์ฉ์ `React.js`๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ์ ๋ฐฐ์ด๊ฒ์๋๋ค.

**์ด์ ๋ถํฐ๋ ๋ณธ๊ฒฉ์ ์ผ๋ก Gatsby๋ฅผ ์ฌ์ฉํด๋ด์๋ค.**

> ๋ฐ์ดํฐ ๋ ์ด์ด๋ Markdown, WordPress, ํค๋๋ฆฌ์ค CMS ๋ฐ ๊ธฐํ ๋ฐ์ดํฐ ์์ค์์ ์ฌ์ดํธ๋ฅผ ๊ตฌ์ถ ํ  ์์๋ Gatsby์ ๊ฐ๋ ฅํ ๊ธฐ๋ฅ์ด๋ค.

Gatsby์ ๋ฐ์ดํฐ๋ ์ด์ด๋ graphQL๋ก ๊ตฌ๋๋ฉ๋๋ค.

๋ฌด์จ๋ง์ธ์ง ๋ชจ๋ฅด์๊ฒ ๋ค๊ตฌ์? **์์ธํ ์ดํด๋ด์๋ค.**

์น ์ฌ์ดํธ๋ HTML, CSS, JS ๋ฐ ๋ฐ์ดํฐ์ ๋ค ๋ถ๋ถ์ผ๋ก ๊ตฌ์ฑ๋์ฃ ! ์ด ์ค, ๋ฐ์ดํฐ๋ฅผ ํ๋ฒ ์์ธํ ์ดํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

์ฐ๋ฆฌ๊ฐ ์ง๊ธ๊น์ง HTML,CSS,JS๋ฅผ ์์๋ดค์๋๋ฐ ๋ฐ์ดํฐ๋ฅผ ์์ํด๋ณด๋๊ฒ๋๋ค!

Gatsby์์ ๋ฐ์ดํฐ๋

### "React ๊ตฌ์ฑ ์์ ์ธ๋ถ์์๋ ๋ชจ๋  ๊ฒ"์๋๋ค.

๋ฌด์จ ๋๋์ธ์ง ์์๊ฒ ๋์?

์ฐ๋ฆฌ๋ ์ง๊ธ๊น์ง ํ์ผ์์ ์ง์  ์ด๋ฏธ์ง,ํ์คํธ๋ฅผ ์ถ๊ฐํ๊ณ  ์นํ์ด์ง๋ฅผ ๋ง๋ค์์ต๋๋ค. ๋ฌผ๋ก , ์ข์ ๋ฐฉ๋ฒ์ด์ฃ ! ํ์ง๋ง ์ข์ข ์ธ๋ถ์ ๋ฐ์ดํฐ๋ฅผ ํ์๋ก ํ  ๋๊ฐ ์์ต๋๋ค. ์๋ฅผ ๋ค์ด์ `์ฝ๋ก๋19`์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ณ  ์ถ๋ค๋ฉด์?
๊ทธ๋ด๋ ์ธ๋ถ ๋ฐ์ดํฐ๋ฅผ ํ์๋ก ํ๋๊ฑฐ๋๋๋ค.

## Gatsby์ ๋ฐ์ดํฐ ๊ณ์ธต์ด GraphQL์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ตฌ์ฑ ์์๋ก ๊ฐ์ ธ ์ค๋ ๋ฐฉ๋ฒ

React ์ปดํฌ๋ํธ์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ๋, ์์ฆ ์ธ๊ธฐ์๋ ๊ธฐ์ ์ธ `graphQL`์ ์ฌ์ฉํ๋ ๊ฒ์๋๋ค.

> GraphQL์ ์ ํ ์์ง๋์ด๊ฐ ํ์ํ ๋ฐ์ดํฐ๋ฅผ ๊ตฌ์ฑ ์์๋ก ๊ฐ์ ธ์ฌ ์ ์๋๋ก Facebook์์ ๊ฐ๋ฐ๋์์ต๋๋ค .

Gatsby๋ GraphQL์ ์ฌ์ฉํ์ฌ ๊ตฌ์ฑ ์์๊ฐ ํ์ํ ๋ฐ์ดํฐ๋ฅผ ์ ์ธ ํ  ์ ์๋๋กํฉ๋๋ค.

์, ์ด์  ์๋ก์ด ๋ด์ฉ์ ๋ฐฐ์ฐ๋๊น ์ ์์  ์ฌ์ดํธ๋ฅผ ๋ง๋ค์ด๋ณผ๊น์?

```
gatsby new tutorial-part-four https://github.com/gatsbyjs/gatsby-starter-hello-world
cd tutorial-part-four
```

์์ ์์์ ์๋ฃํ ํ, `typography.js`์ `Emotion`์ ์ฌ์ฉํด๋ณด๊ฒ ์ต๋๋ค.

```
npm install gatsby-plugin-typography typography react-typography typography-theme-kirkham gatsby-plugin-emotion @emotion/react
```

์ค์น๋ฅผ ์๋ฃํ๋ค๋ฉด, ์ ๋ฒ์ `tutorial-part-three`์์ ๋ง๋ค์๋ ๋ ์ด์์์ ๋ง๋ค์ด์ฃผ์ธ์!

```javascript
import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          Pandas Eating Lots
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
}
```

```javascript
import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
      </div>
    </Layout>
  );
}
```

```javascript
import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

const typography = new Typography(kirkhamTheme);
export default typography;
export const rhythm = typography.rhythm;
```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

![image](https://user-images.githubusercontent.com/48292190/116035523-190a0f80-a6a0-11eb-8839-3f6def6fc0d5.png)

์ ์์ ์ผ๋ก ๋ ์ด์์์ด ๋ฌ๋ค๋ฉด ์ฑ๊ณต์๋๋ค. (์ ํํ ์ฝ๋๋ `tutorial-part-four`์์ ์ฐธ์กฐํด์ฃผ์ธ์!)

์ด์  `GraphQL`์ ์ฌ์ฉํด๋ณผ ์ฐจ๋ก์๋๋ค.

# ๐พ ์ฒซ ๋ฒ์งธ GraphQL ์ฟผ๋ฆฌ

์ฌ์ดํธ๋ฅผ ๊ตฌ์ถ ํ  ๋ ์ฌ์ดํธ ์ ๋ชฉ๊ณผ ๊ฐ์ ๊ณตํต ๋ฐ์ดํฐ๋ฅผ ์ฌ์ฌ์ฉํ๊ณ  ์ถ์ ๊ฐ ์์๊ฑฐ์์. ๊ทธ๋ฐ ๊ฒฝ์ฐ์๋ ํ ์์น์ ์ ๋ชฉ์ ์ ์ฅํ๊ณ  ๋ค๋ฅธ ํ์ผ์์ ํด๋น ์์น๋ฅผ ์ฐธ์กฐํ  ์ ์๋ค๋ฉด, ๋์ค์ ์ ๋ชฉ์ ๋ฐ๊ฟ ์ผ์ด ์์ผ๋ฉด ํ ์์น์ ๊ฐ๋ง ๋ฐ๊พธ๋ฉด ๋ชจ๋  ์ฐธ์กฐํ๋ ๊ฐ์ด ๋ณ๊ฒฝ๋๊ฒ ๋์ฃ .

`gatsby-config.js`์์ ์ฌ์ดํธ ์ ๋ชฉ์ ๊ฐ์ ์ถ๊ฐํด๋ณด๋๋ก ํฉ์๋ค.

```javascript
module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

๊ทธ๋ฐ ๋ค์ ๊ฐ๋ฐ์๋ฒ๋ฅผ ๊ป๋ค๊ฐ ๋ค์ ์ผ๋ณด์ธ์!

## ๐ต๏ธโโ๏ธ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์๋ด์๋ค.

์ด์  siteMetadata๋ผ๋ ์์ฑ์ title์ด๋ผ๋ ๊ฐ์ด ์์ผ๋๊น ์ฐธ์กฐ๋ฅผ ํ  ์ ์์ต๋๋ค!
ํ์ด์ง์ฟผ๋ฆฌ๋ฅผ `aboutํ์ด์ง`์์ ์ฌ์ฉํด๋ด์๋ค.

```javascript
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function About({ data }) {
  console.log(data.site.siteMetadata.title);
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```

๋ค์๊ณผ ๊ฐ์ด ์์ฑ์ ํด์ `/about`์ ๊ฒฐ๊ณผ๋ฌผ์ ํ์ธํด๋ณด์ธ์!
![image](https://user-images.githubusercontent.com/48292190/116040160-a05a8180-a6a6-11eb-898e-d7e0c9dd41af.png)

์ ๊ฐ์ ธ์์ง ๋ชจ์ต์ ๋ณผ ์ ์์ต๋๋ค.
์ฌ๊ธฐ์ **GrapghQL์ ์ฒ์ ์ ํ๋ ์ฌ๋๋ค์ ์์ํด๊ณ  ์ดํด๊ฐ ์ ๊ฐ์ง ์์๊ฒ์๋๋ค.**

์ถํ์ ์ฌ๋์๊ฒ ๋ค๋ฃฐํ๋ ์ด๋ฐ์์ผ๋ก ํ๋ฌ๊ฐ๋๊ตฌ๋~ ์ ๋๋ง ์์๋์๊ธธ ๋ฐ๋๋๋ค.

## ๐ StaticQuery ์ฌ์ฉ

static์ฟผ๋ฆฌ๋ฅผ ์ฌ์ฉํ๊ฒ ๋๋ฉด ํ์ด์ง๊ฐ ์๋ ๊ตฌ์ฑ์์๊ฐ ์ฟผ๋ฆฌ๋ฅผ ํตํด ๋ฐ์ดํฐ๋ฅผ ๊ฒ์ํ  ์ ์์ต๋๋ค.

> # ๊ตฌ์ฑ์์๋?
>
> ๊ตฌ์ฑ์์๋ ํ๋์ ์ปดํฌ๋ํธ๋ผ๊ณ  ์๊ฐํ์๋ฉด ๋ฉ๋๋ค.

StaticQuery๋ hooks๋ ์ง์ํฉ๋๋ค.
๊ทธ๋ผ ์ด๋ค์์ผ๋ก ์ฌ์ฉ๋๋์ง ๋ณด๋๋กํ์ฃ !

```javascript
import React from "react";
import { css } from "@emotion/react";
import { useStaticQuery, Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  );
}
```

์ด๋ ๊ฒ ๊ตฌ์ฑ์์์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๊ณ  ์ฌ์ฉํ  ์ ์์ต๋๋ค.

> ๋~์ถฉ ์ฌ์ฉ๋ฒ์ ์์๋ดค์ผ๋ ๋ค์์ฑํฐ์์ ์์ค ํ๋ฌ๊ทธ์ธ๊ณผ ํจ๊ป GraphQL์ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ๋ฅผ Gatsby ์ฌ์ดํธ๋ก ๊ฐ์ ธ ์ค๋ ๋ฐฉ๋ฒ์ ๋ํด ์์๋ด์๋ค.

## GraphiQL ์๊ฐ

> GraphiQL์ GraphQL ํตํฉ ๊ฐ๋ฐ ํ๊ฒฝ (IDE)์๋๋ค. Gatsby ์น ์ฌ์ดํธ๋ฅผ ๊ตฌ์ถํ๋ ๋์ ์์ฃผ ์ฌ์ฉํ๊ฒ ๋  ๊ฐ๋ ฅํ ๋๊ตฌ์๋๋ค.

์ฌ์ดํธ์ ๊ฐ๋ฐ ์๋ฒ๊ฐ ์คํ ์ค์ผ๋ ๋ค์ ์ฃผ์๋ก ์ ์ํ๋ฉด ๋ฉ๋๋ค.
`http://localhost:8000/___graphql`

![image](https://user-images.githubusercontent.com/48292190/116164449-a4cd7b80-a734-11eb-8cb6-a37d21ef5d23.png)

๋ค์๊ณผ ๊ฐ์ด ์คํํ๊ณ  โถ๏ธ ๋ฅผ ๋๋ฅด๋ฉด ์ฟผ๋ฆฌ๋ฌธ์ด ์คํ๋ฉ๋๋ค.

๊ทธ๋ฌ๋ฉด ์ฐ๋ฆฌ๊ฐ siteMetadata์ title์ ๊ฐ์ ๊ฐ์ ธ์๋ด์๋ค.

**์ฟผ๋ฆฌ๋ฌธ**

```
query MyQuery {
  site{
		siteMetadata{
			title
    }
  }
}

```

**๊ฒฐ๊ณผ**

```json
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "Pandas Eating Lots"
      }
    }
  },
  "extensions": {}
}
```

์ ๋์ค๋์?

## GraphiQL Explorer ์ฌ์ฉ

`GraphiQL Explorer`๋ฅผ ์ฌ์ฉํ๋ฉด ์ฟผ๋ฆฌ๋ฅผ ์๋ ฅํ๋ ๊ท์ฐฎ์ ์์์ ์ฝ๊ฒ ์ํํ  ์ ์์ต๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116164826-713f2100-a735-11eb-81dd-b957f65757fc.png)

Explorer๋ถ๋ถ์์ finder์์ ๋ฌธ์๋ฅผ ์ฐพ๋๊ฑฐ์ฒ๋ผ ํด๋ฆญ๋ง ํ๋ฉด ์๋์ผ๋ก ์ฟผ๋ฆฌ๋ฌธ์ด ๋์ํ๋ ๊ฒ์ ๋ณผ ์ ์์ฃ ! ๊ต์ฅํ ํธ์ํ ๊ฒ๋๋ค.

## ์์ค ํ๋ฌ๊ทธ์ธ

Gatsby ์ฌ์ดํธ์ ๋ฐ์ดํฐ๋ API, ๋ฐ์ดํฐ๋ฒ ์ด์ค, CMS, ๋ก์ปฌ ํ์ผ ๋ฑ ์ด๋์์๋ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค!

ํ์ผ ์์คํ์ ํ์ผ์ ๊ฐ์ ธ์ค๋ ํ๋ฌ๊ทธ์ธ์ ํ๋ฒ ์ค์นํด๋ณผ๊น์?
`gatsby-source-filesystem`์ ์ค์นํด์ผ ํฉ๋๋ค!

ํ๋ก์ ํธ ๋ฃจํธ์ ๋ค์๊ณผ ๊ฐ์ ๋ช๋ น์ด๋ฅผ ์ํํด์ฃผ์ธ์

```
npm install gatsby-source-filesystem
```

๋ ๊ทธ๋ฌ๋ฏ, ํ๋ฌ๊ทธ์ธ์ ์ค์นํ๋ฉด `gatsby-config`์ ์ถ๊ฐํด์ฃผ์ด์ผ ํฉ๋๋ค.

```js
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

๊ทธ๋ฆฌ๊ณ  ๊ฐ๋ฐ ์๋ฒ๋ฅผ ๋ค์ ์์ํด๋ณผ๊น์?

**์, ์ด์  GraphiQL๋ฅผ ํ๋ฒ ๋ณผ๊น์?**

๊ทธ๋ฌ๋ฉด ํ์๊ธฐ ์ฐฝ์ ๋ค์ allFile๊ณผ file๊ฐ์ ์ ํ ํญ๋ชฉ์ด ํ์ ๋๊ณ  ์ฌ์ฉํ  ์ ์์ต๋๋ค.

์ด์  ์ฐ๋ฆฌ๋ ๋งค์ฐ ๋ฉ์ง ์์์ ์ํํ  ์ ์์ต๋๋ค ๐ง๐ปโโ๏ธ

```
query MyQuery {
  allFile {
    edges {
      node {
        id
        birthTime
        base
        accessTime
        size
        name
      }
    }
  }
}
```

๋ค์๊ณผ ๊ฐ์ ์ฟผ๋ฆฌ๋ฅผ ์์ฑํด๋ณด๊ณ  ์คํ์์ผ๋ณด๋ฉด...

```json
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "id": "b584a331-64ae-511b-b49e-d1304c0edcab",
            "birthTime": "2021-04-26T05:30:47.727Z",
            "base": "index.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 411,
            "name": "index"
          }
        },
        {
          "node": {
            "id": "8f022b89-b764-5a5b-acea-b93b791db3b1",
            "birthTime": "2021-04-26T05:49:49.274Z",
            "base": "typography.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 203,
            "name": "typography"
          }
        },
        {
          "node": {
            "id": "8259af0a-6322-538d-8904-98266c5b9add",
            "birthTime": "2021-04-26T05:49:03.366Z",
            "base": "about.js",
            "accessTime": "2021-04-26T06:48:38.997Z",
            "size": 555,
            "name": "about"
          }
        },
        {
          "node": {
            "id": "25143b29-0290-5936-b875-4a86e96ee1d7",
            "birthTime": "2021-04-26T05:48:47.157Z",
            "base": "layout.js",
            "accessTime": "2021-04-26T07:11:35.732Z",
            "size": 944,
            "name": "layout"
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

์ด๋ ๊ฒ, src๋ด์ ์๋ ํ์ผ๋ค์ ๋ชฉ๋ก์ด ์ซ ๋จ๊ฒ๋ฉ๋๋ค!

### ๐ ์ผ๋ง๋ ๋ฉ์ง๊ฐ์!

์ด์  ํ์ด์ง๋ฅผ ํ๋ ๋ ๋ง๋ค์ด๋ด์๋ค.

`src/pages/my-files.js`๋ฅผ ๋ง๋ค์ด์ค์๋ค.

๊ทธ๋ค์ ์์ค์ฝ๋๋ฅผ ๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ค์๋ค.

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({ data }) {
  console.log(data);
  return <Layout>Hello World</Layout>;
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          id
          birthTime(fromNow: true)
          base
          accessTime
          size
          name
        }
      }
    }
  }
`;
```

![image](https://user-images.githubusercontent.com/48292190/116166564-422aae80-a739-11eb-8db4-44d7ecc9b53e.png)

์ ์ฝ์์ด ์ฐํ๋์?

์ฌ์ค, ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ณผ์ ์ ๋๋ฌ๋๋ฐ, ์ฌ๊ธฐ์ ๋๋๋ฉด ์ญํ๋๊น ๋ฐ์ดํฐ๋ฅผ HTML์ ์ถ๋ ฅํด๋ณด๋ ์์์ ์ํํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.prettySize}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          birthTime(fromNow: true)
          relativePath
          prettySize
          extension
        }
      }
    }
  }
`;
```

์, ๋๋ผ์ง ๋ง์ธ์
![image](https://user-images.githubusercontent.com/48292190/116166844-d268f380-a739-11eb-94b6-818a9a1b7192.png)

### ๐ค ํ์ผ ์์คํ์ผ๋ก ์ด๋ ๊ฒ ๋ฉ์ง ๊ธฐ๋ฅ์ ๊ตฌํํ  ์ ์์ต๋๋ค.

์ด์  ์ฌ๋ฌ๋ถ์ ์์ค ํ๋ฌ๊ทธ์ธ์ด ๊ฐ์ธ ๋น์ ๋ฐ์ดํฐ ์์คํ์ ์ด๋ป๊ฒ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋์ง๋ฅผ ๋ฐฐ์ ์ต๋๋ค.

# ๐ค Transformer ํ๋ฌ๊ทธ์ธ

์ด ๋ถ๋ถ์ ์ ๋ง ์ค์ํ ๋ถ๋ถ์๋๋ค. ๋ง์ฝ Gatsby๋ก ์ ์  ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค ์์ ์ ์๋ค๋ฉด ์ด ๋ถ๋ถ์ ์ ๋ง ์ ์ฌํ ๋ด์ผํ ๊ฒ์๋๋ค.
<em>์ฐธ๊ณ ๋ก ์ ๋ ๊ธฐ์ ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค๊ธฐ ์ํด Gatsby๋ฅผ ๋ฐฐ์ฐ๋ ๊ฒ์๋๋ค.</em>

Transformer ํ๋ฌ๊ทธ์ธ์ ์์ค ํ๋ฌ๊ทธ์ธ์ด ๊ฐ์ ธ์จ ์์ ์ฝํ์ธ ๋ฅผ ๋ณํํ๋ ํ๋ฌ๊ทธ์ธ์๋๋ค. ๋ฌด์จ ๋ง์ธ์ง ์ ๋ชจ๋ฅด์๊ฒ ๋ค๊ตฌ์? ํ๋ฒ ์ฒ์ฒํ ์ดํด๋ณด์๊ตฌ์.

`src/pages/sweet-pandas-eating-sweets.md`์ ๋ง๋ค์ด์ค์๋ค.
๊ทธ ๋ค์ `/my-files`ํ์ด์ง๋ฅผ ํ์ธํด๋ณผ๊น์?

![image](https://user-images.githubusercontent.com/48292190/116168562-a7809e80-a73d-11eb-8bd5-0152261df96e.png)

`gatsby-source-filesystem`์ ํญ์ ์ถ๊ฐ ํ  ์ ํ์ผ์ ๊ฒ์ํ๊ณ  ์ถ๊ฐ ํ  ๋ ์ฟผ๋ฆฌ๋ฅผ ๋ค์ ์คํํฉ๋๋ค.

> ๋งค์ฐ ๊ฐ๋ ฅํ๋ค๊ตฌ์!

Transformer ํ๋ฌ๊ทธ์ธ?

## ๐คจ ๋ญ์ง ๋ชฐ๋ผ๋ ์ผ๋จ ๋ฐ๋ผํด๋ณด๋ฉด์ ๋ฐฐ์์๋ค!

`gatsby-transformer-remark`๋ฅผ ๋ค์ด๋ฐ์๋ด์๋ค.

```
yarn add gatsby-transformer-remark
```

๊ทธ ๋ค์ `gatsby-config`์ ๋ญ ํด์ฃผ์ด์ผํ๋์ง ์๊ฒ ์ฃ ?

```js
module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
```

์ด ์์์ ์๋ฃํด์คฌ๋ค๋ฉด ๊ฐ๋ฐ์๋ฒ๋ฅผ ๋ค์ ์ผ๋ด์๋ค.
![image](https://user-images.githubusercontent.com/48292190/116168827-4ad1b380-a73e-11eb-8e9d-4ab8119daec6.png)

๊ทธ๋ฌ๋ฉด `http://localhost:8000/___graphql`
ํ๋ฒ ํ์ธ์ ํด๋ณด๋ฉด `allMarkdownRemark`๊ฐ ์ถ๊ฐ๋ฉ๋๋ค.

```
{
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          date
        }
        html
        excerpt
        timeToRead
      }
    }
  }
}
```

๋ค์ ์์์ ์ํํ ํ ํ๋ฒ ๋ณด์ธ์!

```json
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "frontmatter": {
              "title": "Sweet Pandas Eating Sweets",
              "date": "2017-08-10"
            },
            "html": "<p>Pandas are really sweet.</p>\n<p>Here's a video of a panda eating sweets.</p>\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4n0xNbfJLR8\" frameborder=\"0\" allowfullscreen></iframe>",
            "excerpt": "Pandas are really sweet. Here's a video of a panda eating sweets.",
            "timeToRead": 1
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

์ ๋ง ๋ฉ์์ง ์๋์? ๋งํฌ๋ค์ด์ผ๋ก ์์ํ ๋ด์ฉ์ด html์ผ๋ก `Transform`๋์์ต๋๋ค!

> ์์ค ํ๋ฌ๊ทธ์ธ์ ๋ฐ์ดํฐ ๋ฅผ Gatsby์ ๋ฐ์ดํฐ ์์คํ์ผ๋ก ๊ฐ์ ธ์ค๊ณ  ๋ณํ๊ธฐ ํ๋ฌ๊ทธ์ธ์ ์์ค ํ๋ฌ๊ทธ์ธ์์ ๊ฐ์ ธ์จ ์์ ์ฝํ์ธ ๋ฅผ ๋ณํํฉ๋๋ค

`pages/index.js`์์ graphql์์์ ํด๋ด์๋ค.
์ด๋ ต์ง ์์์!

```js
import React from "react";
import { graphql } from "gatsby";
import { css } from "@emotion/react";
import { rhythm } from "../utils/typography";
import Layout from "../components/layout";

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                โ {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
```

![image](https://user-images.githubusercontent.com/48292190/116169258-4d80d880-a73f-11eb-9e36-1ce3e62a5725.png)

์... ํฌ์คํธ๊ฐ ํ๋๋ผ์ ์กฐ๊ธ ์์ด๋ณด์ด๋ค์! ํฌ์คํธ๋ฅผ ๋ ์ถ๊ฐํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116169350-828d2b00-a73f-11eb-9c1b-ac953c8077cf.png)

#### ์ ์ฅํ๋ฉด ๋ฐ๋ก ์ ์ฉ๋๋ ๋ชจ์ต์ด ์ ๋ง ๋งค๋ ฅ์ ์๋๋ค.

ํ์ง๋ง ์ ๋ ํฌ์คํธ์ ์์๋ฅผ ์กฐ๊ธ ๋ฐ๊พธ๊ณ ์ถ์ต๋๋ค...

**๋คํํ! ์ด๋ ค์ด ์์์ ์๋์ฃ !**

```
{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        excerpt
      }
    }
  }
}

```

์ฟผ๋ฆฌ๋ฅผ ๋ค์๊ณผ ๊ฐ์ด ๋ฐ๊ฟ์ฃผ๋ฉด desc์ ๋ ฌ์ ํด์ค๋๋ค!

### ์ฌ๋ฌ๋ถ์ ์ฌ๋ฌ๋ถ๋ง์ ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค ์ค๋น๊ฐ ๋ค ๋์์ต๋๋ค!

ํ์ง๋ง ์กฐ๊ธ๋ง ๋ ํ๋ณผ๊น์? ๊ทธ๋ฌ๋ฉด **๋ฉ์ง ๋ธ๋ก๊ทธ**๊ฐ ๋ง๋ค์ด์ง๊ฒ ๊ฐ์ต๋๋ค!

## ๐ฅ ๋ฐ์ดํฐ๋ก๋ถํฐ ํ์ด์ง ์์ฑ

์ด์ ์๋ ๋งํฌ ๋ค์ด ํ์ผ์ ์ฟผ๋ฆฌํ๊ณ  ๋ธ๋ก๊ทธ ๊ฒ์๋ฌผ ์ ๋ชฉ ๋ฐ ๋ฐ์ท ๋ชฉ๋ก์ ์์ฑํ๋ ๋ฉ์ง ์ธ๋ฑ์ค ํ์ด์ง๋ฅผ ๋ง๋ค์์ต๋๋ค.

ํ์ง๋ง ๋ฐ์ทํ ๋ถ๋ถ๊ณผ ํฌ์คํธ๋ฅผ ๋๋ฅด๋ฉด ๋งํฌ๋ค์ด์ ์ค์  ํ์ด์ง๋ฅผ ๋ง๋ค๊ณ ์ถ์๋๋ ์ด๋ป๊ฒ ํด์ผํ ๊น์?

### ํ์ด์ง์ฉ ์ฌ๋ฌ๊ทธ ๋ง๋ค๊ธฐ

`์ฌ๋ฌ๊ทธ`๋ผ๋ ๊ฐ๋, ์ข ์์ํ์์ฃ ? ํ๋ฒ ์์๋ด์๋ค.
๊ณต์ ๋ฌธ์์์ `https://www.gatsbyjs.com/docs/tutorial/part-seven/`๋ผ๋ ์ฃผ์๊ฐ ์๋ค๊ณ  ํด๋ด์๋ค.
๊ทธ๋ฌ๋ฉด ์ฌ๊ธฐ์ `์ฌ๋ฌ๊ทธ`๋ **/docs/tutorial/part-seven/**
์ด ๋ถ๋ถ์๋๋ค.

๋ฌด์จ ๋๋์ธ์ง ์์๊ฒ ์ฃ ? **์น ์ฃผ์์ ๊ณ ์ ํ ์๋ณ ๋ถ๋ถ์๋๋ค**

๊ทธ๋ฌ๋ฉด ์ ํ์ด์ง๋ฅผ ๋ง๋๋๋ฐ์๋ ๋๋จ๊ณ์ ๋ฐฉ๋ฒ์ด ์์ต๋๋ค.

> 1. ํ์ด์ง์ ๋ํ "๊ฒฝ๋ก"๋๋ "์ฌ๋ฌ๊ทธ"๋ฅผ ์์ฑํฉ๋๋ค.
> 2. ํ์ด์ง๋ฅผ ๋ง๋ญ๋๋ค.

`gatsby-node.js`๋ผ๋ ํ์ผ์ ๋ฃจํธ์ ๋ง๋ค์ด๋ณผ๊น์?
๊ทธ ๋ค์ ์ฝ๋๋ฅผ ์์ฑํด์ฃผ์ธ์.

```js
exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`);
};
```

์ด onCreateNode๋ ์ ๋ธ๋๊ฐ ์์ฑ (๋๋ ์๋ฐ์ดํธ) ๋  ๋๋ง๋ค Gatsby์ ์ํด ํธ์ถ๋ฉ๋๋ค.

**์ด์  ๊ฐ๋ฐ ์๋ฒ๋ฅผ ์ข๋ฃํ ํ, ๋ค์ ์์ํด๋ณด์ธ์.**

![image](https://user-images.githubusercontent.com/48292190/116171414-b0746e80-a743-11eb-87c3-fe37c0bb674b.png)

์ ์ฝ์์ฐฝ์ Node created๋จธ์๊ธฐ๊ฐ ๋จ์ฃ ?
์ฌ๊ธฐ์ ์ฐ๋ฆฌ๋ `MarkdownRemark`๋ธ๋๋ง ๊ธฐ๋กํ๊ณ  ์ถ์ต๋๋ค.

๊ทธ๋ฌ๋ฉด ์กฐ๊ฑด๋ฌธ์ ๋ค์๊ณผ ๊ฐ์ด ์์ฑํด์ฃผ์์ผ ํฉ๋๋ค.
![image](https://user-images.githubusercontent.com/48292190/116171563-f7fafa80-a743-11eb-9176-0c8e52ef32c1.png)

MarkdownRemark๊ฐ ๋๋ฒ ์์ฑ๋์๋ค๋๊ฑธ ์ ์ ์์ต๋๋ค.

์ด์  ๋งํฌ๋ค์ด์ ํ์ผ์ด๋ฆ์ ์ฌ์ฉํ์ฌ ํ์ด์ง ์ฌ๋ฌ๊ทธ๋ฅผ ๋ง๋ค์ด๋ณด๋ ์์์ ์ํํด๋ณด๋๋ก ํ๊ฒ ์ต๋๋ค.

```js
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    console.log(`\n`, fileNode.relativePath);
  }
};
```

![image](https://user-images.githubusercontent.com/48292190/116178336-54fcad80-a750-11eb-8bcd-5086f9870018.png)

์ด๋ ๊ฒ ํ๋ฉด ํ์ผ์ ์ด๋ฆ์ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค.
`gatsby-source-filesystem`ํ๋ฌ๊ทธ์ธ์๋ ์ฌ๋ฌ๊ทธ๋ฅผ ๋ง๋๋ ๊ธฐ๋ฅ์ด ํจ๊ป ์ ๊ณต๋ฉ๋๋ค

์ด๋ ต์ง ์์ผ๋ ํ๋ฒ ํด๋ณผ๊น์?

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(createFilePath({ node, getNode, basePath: `pages` }));
  }
};
```

์ด๋ ๊ฒ ์์ฑํ๋ฉด ์ฌ๋ฌ๊ทธ๊ฐ ์๋์ผ๋ก ์์ฑ๋ ๊ฒ์ ๋ณผ ์ ์์ฃ ?
**์ด์  ์ ์ฌ๋ฌ๊ทธ๋ฅผ MarkdownRemark๋ธ๋์ ์ง์  ์ถ๊ฐ ํ  ์ ์์ต๋๋ค .**

![image](https://user-images.githubusercontent.com/48292190/116334772-bc7a3200-a810-11eb-9297-b2d85df5c0b4.png)

`createNodeField`๋ฅผ ์ฌ์ฉํ๋ฉด ์ด๋ฅผ ๋์ฑ ์ฝ๊ฒ ๊ตฌํํ  ์ ์์ต๋๋ค.

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
```

![image](https://user-images.githubusercontent.com/48292190/116335242-7a9dbb80-a811-11eb-9bd6-42453fdad513.png)

๊ทธ๋ฌ๋ฉด ๋ธ๋ํ๋์ slug๋ผ๋ ์ด๋ฆ์ ํ๋๋ฅผ ๋ง๋ค์ด์ค๋๋ค.

์ด์  ๋ค์๊ณผ ๊ฐ์ ์์์ ์ํํด์ค์๋ค.

```js
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** graphql์ Promise๋ฅผ ๋ฆฌํดํฉ๋๋ค.
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  console.log(JSON.stringify(result, null, 4));
};
```

๊ทธ๋ฌ๋ฉด ์ฝ์์ฐฝ์

![image](https://user-images.githubusercontent.com/48292190/116335527-fc8de480-a811-11eb-9cab-1730b460cdea.png)

์ ์์ ์ผ๋ก ์ ๋์ค๋๊ฒ์ ํ์ธํ  ์ ์์ฃ ?

**์๊น๋ ์ค๋ชํ์ง๋ง, ํ์ด์ง๋ฅผ ๋ง๋๋ ๋จ๊ณ๋**

1. GraphQL๋ก ๋ฐ์ดํฐ ์ฟผ๋ฆฌ
2. ์ฟผ๋ฆฌ ๊ฒฐ๊ณผ๋ฅผ ํ์ด์ง์ ๋งคํ

**์๋๋ค**

์, ๋ฐ๋ผํด๋ณด์ธ์
`src/templates`๋ฅผ ๋ง๋ค๊ณ  `blog-post.js` ํ์ผ์ ์ถ๊ฐํฉ์๋ค.

๋ค์๊ณผ ๊ฐ์ด ์์ฑํฉ๋๋ค.

```js
import React from "react";
import Layout from "../components/layout";

export default function BlogPost() {
  return (
    <Layout>
      <div>Hello Blog Post</div>
    </Layout>
  );
}
```

๊ทธ ๋ค์ `gatsby-node.js`๋ฅผ ์๋ฐ์ดํธ ํด์ค๋๋ค.

```js
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
```

### ๐คจ์... ๋ง์ด ์ง๋ฃจํ์จ์ฃ ?

์ด์  gatsby์ 404ํ์ด์ง๋ก ํ๋ฒ ๊ฐ๋ด์๋ค.

> ## 404ํ์ด์ง๋ฅผ ์ด๋ป๊ฒ๊ฐ์?
>
> ์ฃผ์์ฐฝ์ `http://localhost:8000/sdf`์ฒ๋ผ ๊ทธ๋ฅ ์๋ฌด๋ฐ ์ฌ๋ฌ๊ทธ๊ฐ ์๋ ์ฃผ์๋ก ๋ค์ด๊ฐ์๋ฉด gatsby์์ ์๋์ผ๋ก 404ํ์ด์ง๋ก ์ด๋์์ผ์ค๋๋ค.

๋ค์ด๊ฐ๋ณด๋ฉด ์ด๋คํ๋ฉด์ด ๋ณด์ด์๋์?

![image](https://user-images.githubusercontent.com/48292190/116336812-28aa6500-a814-11eb-90c4-9b93014ae4a9.png)

๋ค...! ์ฐ๋ฆฌ๊ฐ ์๊น ๋ง๋ค์๋ .mdํ์ผ๋ค์ด ์ ๋ถ page๋ก ๋ฐ๋๋ชจ์ต์ ๋ณผ ์ ์์ฃ ?

ํ์ง๋ง ํ์ด์ง์ ๋ค์ด๊ฐ๋ณด๋ฉด ์์ง ์ฐ๋ฆฌ๊ฐ ์ํ๋ ๋ด์ฉ์ ์๋๋๋ค! ์๋ํ๋ฉด...

![image](https://user-images.githubusercontent.com/48292190/116336911-4d9ed800-a814-11eb-8875-f1da75c06bbf.png)

์์ง ์ ๋ชฉ,๋ด์ฉ์ ์ ์ง ์์๊ฑฐ๋ ์!

์ฐ๋ฆฌ๊ฐ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ๋ ๋ฌด์์ ์ฌ์ฉํ๋ค๊ณ  ํ์ฃ ?

### ๊ทธ๋ ์ฃ ! ๋ฐ๋ก `GraphQL`์๋๋ค ๐ค

```js
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
```

์ด์  ํ์ด์ง์ ๋ค์ด๊ฐ๋ณด๋ฉด

### ๐ ์์ฐ!! ๋๋์ด ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค์!

![image](https://user-images.githubusercontent.com/48292190/116337427-0b29cb00-a815-11eb-9040-7caf850920b5.png)


# ๐์ถํํด์! Gatsby๋ก ์ ์ ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋๋๋ฐ์ ์ฑ๊ณตํ์ด์!

**๋น์ ์ด ๋ฐฐ์ด ๊ฒ๋ค**
- ์๋ก์ด Gatsby ์ฌ์ดํธ ์์ฑ
- ํ์ด์ง ๋ฐ ๊ตฌ์ฑ ์์ ๋ง๋ค๊ธฐ
- ์คํ์ผ ๊ตฌ์ฑ ์์
- ์ฌ์ดํธ์ ํ๋ฌ๊ทธ์ธ ์ถ๊ฐ
- ๋ฐ์ดํฐ ์์ค ๋ฐ ๋ณํ
- GraphQL์ ์ฌ์ฉํ์ฌ ํ์ด์ง ๋ฐ์ดํฐ ์ฟผ๋ฆฌ
- ํ๋ก๊ทธ๋๋ฐ ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ์์ ํ์ด์ง ๋ง๋ค๊ธฐ

์ด์  ๋ช๋ช๊ฐ ์๋ฉด ์ข์๊ฒ๋ค์ ์๊ฐํด๋๋ฆด๊ฒ์.

- **Lighthouse**

> ๊ฐ์ธ ๋น ๊ฐ๋ฐ ์๋ฒ๋ ๊ฐ๋ฐ ์๋๋ฅผ ๋์ด๋๋ก ์ต์ ํ๋์ด ์์ง๋ง ์ฌ์ดํธ์ ํ๋ก๋์ ๋ฒ์ ๊ณผ ๋งค์ฐ ์ ์ฌํ์ง๋ง ์์ฑํ๋ ์ฌ์ดํธ๋ ์ต์ ํ๋์ด ์์ง ์์ต๋๋ค.

1. ๋ง์ฝ ์์ง ์คํ์ค์ธ ๊ฒฝ์ฐ ๊ฐ๋ฐ์๋ฒ๋ฅผ ์ข๋ฃํ๊ณ  `gatsby build`๋ฅผ ํฉ๋๋ค.
2. `gatsby serve`๋ก ํ๋ก๋์ ์ฌ์ดํธ๋ฅผ ๋ก์ปฌ์๋ฒ๋ก ๋ด๋๋ค.

`http://localhost:9000/`์ ์๋ฒ๊ฐ ์ด๋ฆฝ๊ฒ๋๋ค.

**์ด์  ์ฒซ ๋ฒ์งธ Lighthouse ํ์คํธ๋ฅผ ์คํํด๋ด์๋ค.**


๋จผ์  chrome์น์คํ ์ด์์ LightHouse๋ฅผ ๋ค์ด๋ฐ์ต๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116339666-cc960f80-a818-11eb-900e-9297b6ca3eae.png)

์ด์  ๊ฐ๋ฐ์๋๊ตฌ๋ฅผ ์ฌ์ฉํด์ LightHouseํญ์ ์ผญ๋๋ค.

๊ทธ ๋ค์ `Generate report`๋ฅผ ๋๋ฅธ๋ค์ ๊ฒ์ฌ๋ฅผ ์งํํฉ๋๋ค.

![image](https://user-images.githubusercontent.com/48292190/116340046-71b0e800-a819-11eb-85a7-b8e41028a7e0.png)

์ด๋ ๊ฒ, ๊ฒฐ๊ณผ๊ฐ ์ ๋จ๋์?

# ๐๐์, ์ด์  ์ฌ๋ฌ๋ถ๋ค์ ์ฐจ๋ก์๋๋ค!

์ฌ๊ธฐ๊น์ง ๋ณด์ ๋ถ๋ค, ์๊ณ ํ์จ์ต๋๋ค...

์ด์  gatsby๋ ์ฌ๋ฌ๋ถ๋ค์ ๊ฒ์ด๋๊น ์ฌ๋ฌ๋ถ์ด ๋ง๋ค๊ณ  ์ถ์ ์น์ฌ์ดํธ๋ฅผ ์ ์ํด๋ณด์ธ์! 

๊ทธ๋ผ ์ด๋ง...

2021-04-28(์) 

Hong-JunHyeok