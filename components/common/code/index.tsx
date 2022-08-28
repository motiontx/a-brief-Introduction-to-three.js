interface codeProps {
  code: string;
}

export const Code = ({ code }: codeProps) => {
  return (
    <pre>
      <code data-trim data-noescape>
        {code}
      </code>
    </pre>
  );
};
