import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from "react-router-dom";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main>
      <h1>{title}</h1>
      <p>라우팅 확인용 임시 화면입니다.</p>
    </main>
  );
}

function LibraryPlaceholder() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");

  const title =
    tab === "saved" ? "내가 저장한 기록" : "내가 작성한 기록·복제한 기록";

  return <PlaceholderPage title={title} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlaceholderPage title="랜딩페이지" />} />
        <Route path="/login" element={<PlaceholderPage title="로그인" />} />
        <Route path="/signup" element={<PlaceholderPage title="회원가입" />} />
        <Route path="/home" element={<PlaceholderPage title="홈" />} />

        <Route path="/library" element={<LibraryPlaceholder />} />
        <Route path="/explore" element={<PlaceholderPage title="탐색" />} />

        <Route path="/records/new" element={<PlaceholderPage title="기록 작성" />} />
        <Route
          path="/records/:recordId/edit"
          element={<PlaceholderPage title="기록 수정" />}
        />
        <Route
          path="/records/:recordId"
          element={<PlaceholderPage title="기록 상세" />}
        />
        <Route
          path="/share/:shareId"
          element={<PlaceholderPage title="외부 공유 기록 상세" />}
        />

        <Route
          path="/creators/:creatorId"
          element={<PlaceholderPage title="제작자 프로필" />}
        />

        <Route path="/mypage" element={<PlaceholderPage title="마이페이지" />} />
        <Route
          path="/mypage/edit"
          element={<PlaceholderPage title="프로필 수정" />}
        />
        <Route
          path="/mypage/preview"
          element={<PlaceholderPage title="프로필 미리보기" />}
        />
        <Route
          path="/mypage/privacy"
          element={<PlaceholderPage title="프로필 공개 설정" />}
        />

        <Route
          path="/settings/login-info"
          element={<PlaceholderPage title="로그인 정보" />}
        />
        <Route
          path="/settings/login-info/withdrawal"
          element={<PlaceholderPage title="회원탈퇴" />}
        />
        <Route
          path="/settings/policies"
          element={<PlaceholderPage title="약관·정책" />}
        />
        <Route
          path="/settings/policies/:policyId"
          element={<PlaceholderPage title="약관·정책 상세" />}
        />

        <Route
          path="*"
          element={<PlaceholderPage title="페이지를 찾을 수 없습니다" />}
        />
      </Routes>
    </BrowserRouter>
  );
}