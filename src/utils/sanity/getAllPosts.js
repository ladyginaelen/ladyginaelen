import { client } from "./client";


export async function getAllPosts() {
    const clientSanity = client
    const query = '*[_type == "post"]'
    const posts = await clientSanity.fetch(query)
    return posts;
}