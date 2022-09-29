type TagProps = {
  text: string;
};

export const Tag = (props: TagProps) => {
  return (
    <div className="text-ssm bg-background mb-2 mr-2 rounded px-2 py-1 text-center">
      {props.text}
    </div>
  );
};
