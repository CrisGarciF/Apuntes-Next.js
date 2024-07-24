"use client"
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter()

    return (
        <section>
            <h1>about</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corporis mollitia quidem consequuntur! Et, sit dolorum. Quisquam maiores veritatis sint rem, necessitatibus magnam repudiandae dolorum quas voluptatibus deleniti nam facilis velit, perspiciatis, ex vel quo cum blanditiis magni corporis sunt ipsam vero consequuntur dolores! Quibusdam, similique quaerat nihil expedita numquam blanditiis aspernatur doloremque! Saepe reiciendis deleniti, ipsum nihil repellat accusantium vitae? Ad id animi, unde excepturi ea incidunt nam. Quasi velit ullam dolore incidunt atque inventore reprehenderit eos. Fugiat soluta quos labore ipsa sequi repellat assumenda, earum dolore ad aspernatur necessitatibus facilis ipsum! Quia voluptate deleniti odio maxime velit! Sed.</p>
            <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() =>{
                alert('Ejecutando codigo...')
                router.push('/')
            }}>
                Click
            </button>
        </section>
    )
};

export default About;
