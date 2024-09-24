import { AdsBanner } from "@/types/AdsBanner";
import Image from "next/image";
import Link from "next/link";

export default function AdsBanner({ imgUrl, alt, link }: AdsBanner) {
  return <Link href={link}><Image
    src={imgUrl}
    alt={alt}
    style={{
      width: '100%',
      height: 'auto',
    }}
    width={400}
    height={200}
    className="custom-border overflow-hidden"
  /></Link>
}
