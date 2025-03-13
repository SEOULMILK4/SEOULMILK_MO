import { api } from "./index";

const accessToken = localStorage.getItem("accessToken");

export const postNtsTaxUpload = async (files: FormData) => {
  try {
    const response = await api.post("/agency/nts-tax/upload", files, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data.data;
    }
  } catch (error) {
    console.error("파일 업로드 실패", error);
    throw error;
  }
};
