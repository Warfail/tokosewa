import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


const client = sanityClient({
    projectId:'jov3pj9d',
    dataset:'production',
    apiVersion:'',
    useCdn:'true',
    token:'process.env.NEXT_P'
})