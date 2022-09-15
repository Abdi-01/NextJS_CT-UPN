import Image from 'next/image'
import {useRouter} from 'next/router'

let User = () => {
    const router = useRouter()
    const {id} = router.query
    return(
        <div>
            <h1>
                Pages User {id}
            </h1>
            <Image src={require('./../../public/2.jpg')}
                alt='Image-1'
                width={500}
                height={500}
            />

            <Image loader={() => "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg"} 
                src="Image-2"
                alt="Image-2: Kucing"
                width={500}
                height={500}
            />

            <Image src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg"
                alt='Image-3'
                width={500}
                height={500}
            />
        </div>
    )
}

export default User