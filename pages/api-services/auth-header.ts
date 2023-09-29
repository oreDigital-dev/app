export default function authHeader() {
    const token = localStorage.getItem("refreshToken");
  
    if (token !== null) {
      return { Authorization: `Bearer ${JSON.parse(token)}` };
    } else {
      return {};
    }
  }
  