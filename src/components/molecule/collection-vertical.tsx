import { CTA, CTAProps } from '../atoms/cta-btn'
import Image from 'next/image'
type VerticalProps = {
  heroText: string
  imgSrc: string
  cta: CTAProps
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export const Vertical = (props: VerticalProps) => {
  const { heroText, imgSrc, cta } = props
  return (
    <article className="mx-4">
      <div className="relative">
        <Image
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475),
          )}`}
          className="transition-all hover:saturate-50 rounded-lg hover:rounded-lg"
          alt={heroText}
          src={imgSrc}
          width={500}
          height={800}
        />
        <section className="justify-center absolute text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="break-normal text-2xl text-tertiary">{heroText}</h1>
          {/* <CTA {...cta} /> */}
        </section>
      </div>
    </article>
  )
}
