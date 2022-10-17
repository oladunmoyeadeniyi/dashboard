type HeaderProps = {
  title: string;
  category: string;
  children?: React.ReactNode;
};

const Header = ({ title, category, children }: HeaderProps) => {
  return (
    <div className="mb-2 md:mb-10 mt-[50px] md:mt-0 flex flex-col-reverse md:grid md:grid-flow-col md:gap-x-[450px] lg:gap-x-[100px]">
      <div className="mt-5 md:mt-0">
        <p className="text-gray-400">{category}</p>
        <p className="text-3xl font-extrabold tracking-tight text-slate-900">
          {title}
        </p>
      </div>
      <div className="flex align-bottom">{children}</div>
    </div>
  );
};

export default Header;
