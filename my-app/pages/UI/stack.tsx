import Image from "next/image"
const Page = () =>{
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col gap-2">
            <div className="flex flex-col justify-center items-center p-10" style={{border:"1px solid black"}}>
                {/* <div className="w-[700px] h-[auto] grid grid-cols-4 border-solid" 
                >
                    <StackImg src="/stack/react.png" title="Reactjs"/>
                    <StackImg src="/stack/nextjs.png" title="Nextjs"/>
                    <StackImg src="/stack/typescript.png" title="Typescript"/>
                    <StackImg src="/stack/tailwind.png" title="Tailwind"/>
                    
                </div>
                <div className="w-[700px] h-[auto] grid grid-cols-4 border-solid" >
                    <StackImg src="/stack/redux.png" title="Redux"/>
                    <StackImg src="/stack/recoil.png" title="Recoil"/>
                </div> */}

                {/* <div className="w-[700px] h-[auto] grid grid-cols-4 border-solid" >
                    <StackImg src="/stack/nodejs.png" title="nodejs"/>
                    <StackImg src="/stack/mongoDB.png" title="mongoDB"/>
                </div> */}

                 <div className="w-[700px] h-[auto] grid grid-cols-4 border-solid" >
                    
                    <StackImg src="/stack/aws.png" title="AWS(ec2)"/>
                    <StackImg src="/stack/vercel.png" title="vercel"/>
                </div>
            </div>
        </div>
    )
}

export default Page

interface IStackImg{
    src:string
    title:string
}
const StackImg = (props:IStackImg) =>{
    const {src,title} = props
    return (
        <div className="grid" style={{ gridTemplateRows: "auto 50px" }}>
            <div className="mx-auto w-[100px] rounded-lg overflow-hidden">
                <Image src={src} alt="ff" width={100} height={100}/>
            </div>
            <div className="mx-auto flex items-center font-bold text-lg">{title}</div>
        </div>   
    )
}