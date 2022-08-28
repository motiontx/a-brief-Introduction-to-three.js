interface linkProps {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children }: linkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
