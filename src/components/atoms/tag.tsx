export const Tag = (props: { text: string }) => {
  return (
    <div className="text-center text-ssm mb-2 mr-2 bg-background px-2 py-1 rounded">
      {props.text}
    </div>
  )
}
