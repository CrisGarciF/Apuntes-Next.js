import { Metadata } from "next"

type Props = { params: {productID: string}}

export const generateMetadata = ({ params } : Props) : Metadata => {
    return {
        title: `Producto ${params.productID}`
    }
}

export default function ProductDetail ({ params } : Props) {
    return <h1>Producto {params.productID} </h1>
}