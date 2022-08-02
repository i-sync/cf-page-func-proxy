export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="img.viagle.com";
        let new_request=new Request(url,request);
        const response = fetch(new_request);        
        response.headers.set('Cache-Control', 'public, max-age=604800');
        response.headers.set('Pragma', 'public');
        return response;
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
