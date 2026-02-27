import type { RequestHandler } from "./$types";
import fs from "fs";

export const GET: RequestHandler = async () => {
    try {
        const dir = fs.readdirSync("./static/images/home/Saas");
        const output = {
            data: {
                dir: dir,
            }
        }
        return new Response(JSON.stringify(output));
    } catch(err) {
        return new Response(JSON.stringify({ error: err }), { status: 500 });
    }
}