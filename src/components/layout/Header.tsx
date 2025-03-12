function Header() {
  const name = localStorage.getItem("name");
  return (
    <div className="flex justify-between items-center w-full px-4 py-2 fixed top-0 left-0 bg-white h-10">
      <img src="/logo.svg" alt="로고" width={142} className="shrink-0" />
      <div className="px-3 py-[2.5px] border border-secondary-500 rounded-xl text-secondary-500 b5">
        {name}
      </div>
    </div>
  );
}

export default Header;
