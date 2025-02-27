import Image from 'next/image'

import Images from "@/assets/images.jpeg";

export default function Upload() {
    return <div>
        <Image src={Images} alt="" />
        </div>
}