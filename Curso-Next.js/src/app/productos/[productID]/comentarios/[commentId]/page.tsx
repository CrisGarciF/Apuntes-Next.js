export default function commentDetail ({ params, } : { params: {productID: string, commentId: string}}) {
    return <h1>Comentario {params.commentId} del producto Producto {params.productID} </h1>
}