import type { RequestHandler } from "./$types";
import fs from "fs";

export const GET: RequestHandler = async ({ url }) => {
    
    try {
        const apps = url.searchParams.get('app');

        const dir = fs.readdirSync("./static/images/home/Saas/" + apps);
        const output = {
            data: {
                dir: dir,
            }
        }
        return new Response(JSON.stringify(output), { status: 200 });
    } catch(err) {
        return new Response(JSON.stringify({ error: err }), { status: 500 });
    }
}