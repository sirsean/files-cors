export default {
    async fetch(request) {
        const url = new URL(request.url);
        url.protocol = 'https';
        url.hostname = 'files-3d9.pages.dev';
        return fetch(url.toString(), request)
            .then(response => {
                let headers = new Headers(response.headers);
                headers.set('Access-Control-Allow-Origin', '*');
                headers.set('Access-Control-Allow-Methods', 'GET,HEAD');
                return new Response(response.body,
                    {
                        status: response.status,
                        statusText: response.statusText,
                        headers: headers,
                    });
            });
    },
};
