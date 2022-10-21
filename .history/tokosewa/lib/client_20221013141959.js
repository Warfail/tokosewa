import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId:'jov3pj9d',
    dataset:'production',
    apiVersion:'2022-10-13',
    useCdn:'true',
    
}
);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);