export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);

        // 1. Handle CORS Preflight (OPTIONS)
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*", // You can restrict this to your domain later
                    "Access-Control-Allow-Methods": "GET, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type, x-api-key",
                },
            });
        }

        // 2. Prepare the target URL
        // HARDCODED TEST to rule out parameter encoding issues
        // We will ignore request.url params for this specific debug deploy
        const targetUrl = new URL("https://api.openwebninja.com/jsearch/company-job-salary?job_title=Software+Developer&company=Amazon");

        // 3. Make the request to OpenWeb Ninja
        console.log("Target URL (Hardcoded):", targetUrl.toString());

        let sentKey = env.NINJA_API_KEY;
        if (sentKey) {
            console.log("Key Length:", sentKey.length);
            console.log("Key Start:", sentKey.substring(0, 3));
            // Trim just in case
            sentKey = sentKey.trim();
        } else {
            console.log("Key is MISSING or NULL");
        }

        const response = await fetch(targetUrl.toString(), {
            method: "GET",
            headers: {
                "x-api-key": sentKey,
            },
        });

        // 4. Return response with CORS headers
        const newHeaders = new Headers(response.headers);
        newHeaders.set("Access-Control-Allow-Origin", "*");

        const body = await response.text();
        console.log("Upstream Status:", response.status);
        if (body.length < 500) console.log("Upstream Body:", body);

        return new Response(body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
        });
    },
};
