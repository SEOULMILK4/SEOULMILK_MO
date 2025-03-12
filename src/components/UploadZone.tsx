function UploadZone() {
  return (
    <div className="bg-grayScale-25 border-solid border border-grayScale-100 rounded-lg px-4 py-9 mt-5 h-[60vh] center flex-col">
      <img src="/folder.svg" alt="파일"  className="mb-4"/>
      <div className="b2 text-grayScale-700">계산서 업로드하기</div>
      <div className="b3 text-grayScale-400">ooMB 이하</div>
    </div>
  );
}

export default UploadZone;
