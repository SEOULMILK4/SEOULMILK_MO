import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadZone from "@/components/UploadZone";
import { postNtsTaxUpload } from "@/api/ntsTaxUpload";
import { useNtsTaxStore } from "@/stores/ntsTax";

function UploadPage() {
  const name = localStorage.getItem("name");
  const { setTotalCnt } = useNtsTaxStore();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      uploadFiles(Array.from(event.target.files));
    }
  };

  const uploadFiles = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    setLoading(true);

    try {
      const response = await postNtsTaxUpload(formData);
      console.log("업로드 성공:", response);

      if (response && response.totalCnt !== undefined) {
        setTotalCnt(response.totalCnt);
      }

      navigate("/complete");
    } catch (error) {
      console.error("업로드 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-grayScale-300 bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-secondary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="mt-[82px]">
        <div className="h4">
          <span className="text-secondary-500">{name}</span>님
        </div>
        <div className="h4">안녕하세요!</div>
        <div className="b6 text-gray-600 mt-2">
          세금계산서를 간편하게 업로드 하세요.
        </div>
      </div>

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
