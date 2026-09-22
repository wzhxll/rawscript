export default {
  async fetch(req, env) {
    const u = new URL(req.url);
    const key = u.searchParams.get("key");
    const ua = req.headers.get("user-agent")||"";

    if(key !== "WillowLeaf6688" || ua.includes("Mozilla")){
      return Response.redirect("https://b23.tv/MRnB7hi");
    }
    u.search = "";
    const newReq = new Request(u, req);
    return env.ASSETS.fetch(newReq);
  }
}
