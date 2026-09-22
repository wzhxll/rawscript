export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const KEY = "WillowLeaf6688";
    const inputKey = url.searchParams.get("key");

    if (inputKey !== KEY) {
      return Response.redirect("https://b23.tv/MRnB7hi", 302);
    }
    return env.ASSETS.fetch(request);
  }
}
