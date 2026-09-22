export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const key = u.searchParams.get("key");
    const ua = req.headers.get("user-agent")||"";

    if(key !== "WillowLeaf6688" || ua.includes("Mozilla")){
      // 浏览器访问 → 返回带红色样式的HTML
      if(ua.includes("Mozilla")){
        return new Response('<h1 style="color:red">gay</h1>', {
          headers: {"Content-Type":"text/html"}
        });
      }
      // 注入器请求校验失败，返回纯文本，**没有任何HTML标签**，不会炸loadstring
      return new Response("gay", {headers:{"Content-Type":"text/plain"}});
    }
    u.search = "";
    const newReq = new Request(u, req);
    return env.ASSETS.fetch(newReq);
  }
}

