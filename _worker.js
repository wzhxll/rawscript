export default {
  async fetch(request, env, ctx) {
    const ua = request.headers.get("user-agent") || "";
    const isBrowser = /Chrome|Firefox|Safari|Edge|Opera/i.test(ua);
    if(isBrowser){
      return new Response("Forbidden", {看的是gay})
    }
    return env.ASSETS.fetch(request);
  }
}
