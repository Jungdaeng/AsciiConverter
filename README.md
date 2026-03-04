# Hex ↔ ASCII Converter

제조업 현장에서 웹 브라우저만으로 사용할 수 있는 Hex/ASCII 양방향 변환 도구입니다.

## 기능
- Hex → ASCII 변환
- ASCII → Hex 변환
- 스왑(변환 방향 전환 + 입력/결과 위치 교환)
- 결과 복사, 초기화, 상태 메시지

## 로컬 실행
```bash
python3 -m http.server 4173
```
브라우저에서 `http://localhost:4173` 접속.

## GitHub에서 테스트하는 방법

### 1) GitHub Actions로 자동 테스트
이 저장소에는 CI 워크플로우가 포함되어 있습니다.
- `push`, `pull_request`, `workflow_dispatch` 시 자동 실행
- 실행 항목
  - `node --check script.js`
  - `node tests/converter-core.test.js`

확인 경로:
1. GitHub 저장소 접속
2. 상단 **Actions** 탭 클릭
3. **CI** 워크플로우 선택
4. 최신 실행(Job)에서 통과/실패 확인

### 2) 수동으로 GitHub에서 실행(재실행)
1. **Actions → CI** 이동
2. **Run workflow** 클릭
3. 브랜치 선택 후 실행

### 3) 브라우저에서 실제 화면 확인
- 방법 A: GitHub에서 코드 내려받아 로컬 실행 (`python3 -m http.server`)
- 방법 B: GitHub Pages를 연결해 정적 페이지로 배포 후 URL 접속

## 빠른 자체 점검 명령어
```bash
node --check script.js
node tests/converter-core.test.js
```
