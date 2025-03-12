import UploadZone from "@/components/UploadZone";

function UploadPage() {
  return (
    <div className="container">
      <div className="mt-[82px]">
        <div className="h4 ">
          <span className="text-secondary-500">서울우유 대전 관저점</span>님
        </div>
        <div className="h4">안녕하세요!</div>
        <div className="b6 text-gray-600 mt-2">
          세금계산서를 간편하게 업로드 하세요.
        </div>
      </div>
      <UploadZone />
    </div>
  );
}
export default UploadPage;
