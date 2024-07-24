const { NextResponse } = require("next/server");

export async function GET(request, {params}) {
    const {searchParams} = new URL(request.url)
    const n = searchParams.get('nombre')
    const a = searchParams.get('apellido')
    console.log(n , a);

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()

    return NextResponse.json(data)
}