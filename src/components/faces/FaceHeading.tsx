interface FaceHeadingProps {
  eyebrow: string
  title: string
}

export default function FaceHeading({ eyebrow, title }: FaceHeadingProps) {
  return (
    <div className="pr-6">
      <p className="text-brand-300 text-[10px] font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-fg mt-1 line-clamp-1 text-base font-bold">{title}</h2>
    </div>
  )
}
