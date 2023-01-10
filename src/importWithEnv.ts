const { SOME_TOKEN } = process.env;

export const client = createClient(SOME_TOKEN)


function createClient(SOME_TOKEN: string) {
    if (!SOME_TOKEN) {
        throw new Error('Missing Env Variable SOME_TOKEN')
    }
}