export default {
  async fetch(request, env, ctx) {
    const KEY = "柳叶Willow leaf";
    const reqKey = request.headers.get("X-Secret-Key");

    if (reqKey !== KEY) {
      // 无密钥，直接重定向rickroll链接
      return Response.redirect("https://b23.tv/MRnB7hi", 302);
    }

    return env.ASSETS.fetch(request);
  }
}
