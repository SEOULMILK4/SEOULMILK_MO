import { api } from "./index";
import { Role } from "@/stores/useUserStore";

/**
 * 대리점 로그인
 *
 * @param agencyId - 대리점 ID
 * @param password - 비밀번호
 * @param role - 로그인하는 유저의 역할
 * @returns 성공 시 유저 데이터 반환, 실패 시 null
 */
export const postAgencyLogin = async (
  agencyId: string,
  password: string,
  role: Role
) => {
  try {
    const response = await api.post("/api/agency/login", {
      agencyId,
      password,
      role: "delership"
    });

    if (response.data && response.data.success) {
      const { accessToken, refreshToken, memberId, name, email } =
        response.data.data;

      // 로컬 스토리지에 토큰 저장
      localStorage.setItem("email", email);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return { memberId, name, email, role };
    } else {
      console.error("로그인 실패:", response.data.message);
      return null;
    }
  } catch (error) {
    console.error("로그인 API 오류:", error);
    return null;
  }
};
