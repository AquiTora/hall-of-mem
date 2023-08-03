import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ content }) => {
    return (
        <div>
            <Image 
                src={content.photos[0]}
                height={140}
                width={140}
                alt='photo'
            />
            <h1>{content.title}</h1>
            <p>{content.content}</p>        
            
            {content.photos.map((photo) => {
                return (
                    <Image 
                        src={photo}
                        height={200}
                        width={200}
                        alt='photo'
                    />
                )
            })}

            <Link
                href='/'
            >
                На главную
            </Link>
        </div>
    )
}

export default Card;