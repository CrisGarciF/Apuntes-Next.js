import { NextResponse } from "next/server"

export async function GET(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users' + process.env.TOKEN)
    const data = await res.json()
    return NextResponse.json(data)
}

export async function POST(request){
    const {nombre, apellido} = await request.json()
    console.log(nombre, apellido);

    return NextResponse.json({
        message: "creando datos!"
    })

}

export function PUT(){
    return NextResponse.json({
        message: "actualizando datos!"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "eliminando datos!"
    })
}