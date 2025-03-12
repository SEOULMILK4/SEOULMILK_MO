import { useState } from "react";
import UploadZone from "@/components/UploadZone";
import axios from "axios";

function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const name = localStorage.getItem("name");
  // 파일 변경 핸들러
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles); // 파일 상태 업데이트
      uploadFiles(selectedFiles); // 파일 업로드 실행
    }
  };

  // 파일 업로드 API 요청
  const uploadFiles = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/upload", // API URL 설정
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("업로드 성공:", response.data);
    } catch (error) {
      console.error("업로드 실패:", error);
    }
  };

  return (
    <div className="container">
      <div className="mt-[82px]">
        <div className="h4">
          <span className="text-secondary-500">{name}</span>님
        </div>
        <div className="h4">안녕하세요!</div>
        <div className="b6 text-gray-600 mt-2">
          세금계산서를 간편하게 업로드 하세요.
        </div>
      </div>
      {/* 업로드 존 클릭 시 파일 업로드 */}
      <UploadZone
        onUploadClick={() => document.getElementById("fileInput")?.click()}
      />
      <input
        id="fileInput"
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default UploadPage;
