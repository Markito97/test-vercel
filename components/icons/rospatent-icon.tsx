import Image from 'next/image'


export const RospatentIcon = () => {
    return <div className='flex min-h-16 items-center'>
        <Image
            src="/rospatent.png"
            width={64}
            height={64}
            alt="Picture of the author"
        />
        <h3 className='text-4xl mx-4 text-gray-500 font-bold uppercase'>
            Роспатент
        </h3>
    </div>
}