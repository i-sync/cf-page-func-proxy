export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="img.viagle.com";
        let new_request=new Request(url,request);
        let res = fetch(new_request);
        res.header('cache-control', 'public, max-age=6048000');
        return res;
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
