# Jungle Board

## 프로젝트 소개
Jungle Board는 최소한의 외부 라이브러리를 사용하여 구현된 게시판 프로젝트입니다. 이 프로젝트의 주요 목표는 React 개발 시 흔히 사용되는 라이브러리들의 기능을 직접 구현해봄으로써, 그 필요성과 작동 원리를 깊이 이해하는 것입니다.

## 기술 스택
- React
- TypeScript
- Tailwind CSS
- JSON Server (백엔드 모킹)

## 주요 기능
- 회원가입 및 로그인/로그아웃
- 회원 탈퇴
- 게시물 작성 및 조회 (전체/상세)
- 댓글 작성
- 페이지네이션
- 반응형 디자인

## 구현 세부사항
- 사용자 인증 정보 로컬 스토리지 관리
- 게시글 및 댓글 작성 시 엔터키 지원
- 최신순 게시글 정렬
- 회원가입 시 아이디 중복 검사
- 빈 내용 제출 방지 로직

## 프로젝트 구조
```
jungle-board/
│
├── src/
│   ├── api/
│   ├── components/
│   │   ├── common/
│   │   └── ...
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── .eslintrc
├── .prettierrc
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### API 명세
![스크린샷 2024-10-10 오후 12 09 15](https://github.com/user-attachments/assets/ab10d026-332d-4325-a3c2-007eb2507111)
### 피그마 디자인
![스크린샷 2024-10-10 오후 12 08 42](https://github.com/user-attachments/assets/730d69db-c76e-409e-8c88-2e914963f861)
### 발표자료
[실력다지기 1주차.pptx](https://github.com/user-attachments/files/17321198/1.pptx)

## 설치 및 실행
```bash
# 저장소 클론
git clone [repository-url]

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# JSON Server 실행
npm run json-server
```

## 향후 개선 사항
- 전역 상태 관리 도구 도입 검토
- React Query를 활용한 데이터 페칭 최적화
- 단위 테스트 및 통합 테스트 추가
- 접근성 개선
- 성능 최적화 (코드 스플리팅, 레이지 로딩 등)

## 기여 방법
1. 이 저장소를 포크합니다.
2. 새 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`).
3. 변경 사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`).
4. 브랜치에 푸시합니다 (`git push origin feature/AmazingFeature`).
5. Pull Request를 생성합니다.
