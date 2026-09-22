export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const key = u.searchParams.get("key"); // 读取url上的key参数
    const ua = req.headers.get("user-agent")||""; // 获取访问者UA标识

    // 判断条件：密钥不对 【或者】是浏览器(Mozilla)，直接跳转B站
    if(key !== "WillowLeaf6688" || ua.includes("Mozilla")){
      return Response.redirect("https://b23.tv/MRnB7hi");
    }
    // 密钥正确 + 不是浏览器 → 返回你的lua源码
    return env.ASSETS.fetch(req);
  }
}
