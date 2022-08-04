import Link from 'next/link'

export type CTAProps = {
  text: string
  url: string
  ordinal: 'primary' | 'secondary' | 'tertiary'
  filled: boolean
}

export const CTA = (props: CTAProps) => {
  const { text, url, ordinal = 'primary', filled = true } = props

  const className = `text-center font-light rounded-lg text-xs px-2.5 py-1
                      text-card-${
                        ordinal === 'primary' ? 'headline' : 'secondary'
                      }
                     ${filled ? `bg-card-background` : ``}
                     ${filled ? '' : `border-${ordinal}`}`

  return (
    <Link href={url}>
      <button type="button" className={className}>
        {text}
      </button>
    </Link>
  )
}
