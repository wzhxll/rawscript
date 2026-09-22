export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const KEY = "柳叶Willow leaf";
    const inputKey = url.searchParams.get("key");

    // 密钥匹配校验
    if (inputKey !== KEY) {
      // 无密钥/密钥错误，跳转B站链接
      return Response.redirect("https://b23.tv/MRnB7hi", 302);
    }

    return env.ASSETS.fetch(request);
  }
}
