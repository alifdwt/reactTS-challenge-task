interface CountdownProps {
  text: string;
}

const CountdownFrag = (props: CountdownProps) => {
  const { text } = props;
  return (
    <div className="border rounded-sm">
      <h2 className="text-center font-bold">{text}</h2>
    </div>
  );
};

export default CountdownFrag;
