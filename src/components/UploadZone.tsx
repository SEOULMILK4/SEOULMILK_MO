interface UploadZoneProps {
  onUploadClick: () => void;
}

function UploadZone({ onUploadClick }: UploadZoneProps) {
  return (
    <div
      className="bg-grayScale-25 border-solid border border-grayScale-100 rounded-lg px-4 py-9 mt-5 h-[60vh] center flex-col cursor-pointer"
      onClick={onUploadClick} // 클릭하면 파일 선택 창 열기
    >
      <img src="/folder.svg" alt="파일" className="mb-4" />
      <div className="b2 text-grayScale-700">계산서 업로드하기</div>
      <div className="b3 text-grayScale-400">
        여러 개의 파일을 업로드할 수 있습니다.
      </div>
    </div>
  );
}

export default UploadZone;
