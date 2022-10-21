import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId:'jov3pj9d',
    dataset:'production',
    apiVersion:'2022-10-13',
    useCdn:'true',
    token:'process.env.NEXT_PUBLIC_SANITY_TOKEN'
});

const builder = imageUrlBuilder(client);

export const 