## gulpjs를 이용한 프론트앤드 패키지 매니지 먼트 샘플 입니다.

nodeJS를 설치합니다.

소스코드를 내려 받습니다.
```
git clone https://github.com/thomasJang/package-mng
```

도스창이나 터미널창을 열어 소스가 설치된 위치로 이동합니다.

```
npm install
```
npm install 명령을 도스나 터미널창에 입력합니다. (소스가 설치된 위치에 node_modules 폴더가 생기고 그 안에 플러그인들이 설치 됩니다.)

```
npm install --global gulp-cli
```

gulp task 를 실행합니다.
```
gulp
```

```
static
> js 폴더에 a.js, b.js (파일을 수정 하면서 터미널창을 확인하세요)
```
`dist` 폴더안에 빌드된 `app.js`파일이 만들어진 것을 확인 할 수 있습니다.

### SASS

`gulpfile-for-sass.js` 내용을 복사하여 `gulpfile.js` 로 붙여넣기 합니다.
작동중인 터미널을 종료하고 gulp task 를 실행합니다.
```
gulp
```

`scss` 폴더안에 `.scss`파일들은 수정해 봅니다. 그러면 `dist` 폴더안에 `app.css` 파일이 생성 된것을 확인 할 수 있습니다.

* gulp 사용법에 대해서는 구글에 검색해보시길 권장 드립니다.



