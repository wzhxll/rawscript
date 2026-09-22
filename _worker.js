export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const key = u.searchParams.get("key");
    const ua = req.headers.get("user-agent")||"";

    if(key !== "WillowLeaf6688" || ua.includes("Mozilla")){
      return new Response('<h1 style="color:red">gay</h1>', {
        status: 200,
        headers: {"Content-Type":"text/html"}
      });
    }
    u.search = "";
    const newReq = new Request(u, req);
    return env.ASSETS.fetch(newReq);
  }
}
