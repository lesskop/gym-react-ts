type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h1 className="font-montserrat text-3xl uppercase">{children}</h1>;
};

export default HText;
