import Image, { StaticImageData } from "next/image"
import { ReactElement } from "react"

export default function Project({
    src,
    title,
    description,
    site,
    repo
} : {
    src: StaticImageData,
    title: string,
    description: ReactElement,
    site?: string,
    repo?: string
}) {
    return (
        <div className="flex gap-6">
            <Image src={src} className="w-[16%] h-[16%] rounded-lg shadow-lg" alt={title} />
            <div>
                <h1 className="font-bold text-lg mb-2">{title}</h1>
                <div className="mb-2">{description}</div>
                <div className="flex gap-2 underline link">
                    {site && <a href={site}>[site]</a>}
                    {repo && <a href={repo}>[repo]</a>}
                </div>
            </div>
        </div>
    )
}