const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-4">
      <div className="max-w-6xl mx-auto">{children}</div>
    </div>
  );
};

export default Container;
