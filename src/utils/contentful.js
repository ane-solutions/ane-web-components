import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getHomePage = async () => {
    // const results = await client.getEntry(INPUT ENTRY ID HERE)
    // return results
}

