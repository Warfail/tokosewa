export default{
    name:'product',
    title:'roduct',
    type:'document',
    fields:[
        {
            name:'image',
            title:'Image',
            type:'array',
            of:[{ type:'image'}],
            options:{
                hotspot:true,
            }
        },
        {
            name:'name',
            title:'Name',
        }
    ]
}