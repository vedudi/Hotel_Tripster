const Container = ({children, designs}) => {
  return <div className={`max-w-[1440] mx-auto p-5 ${designs}`}>
    {children}</div>
  ;
};

export default Container;
