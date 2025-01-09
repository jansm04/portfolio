import Link from "next/link";

export default function Links() {
    return (
        <div className="flex justify-center gap-4 mb-12">
          <div>
            <Link href="/">/home</Link>
          </div>
          <div>
            <Link href="/projects">/projects</Link>
          </div>
          <div>
            <Link href="/about">/about</Link>
          </div>
        </div>
    )
}