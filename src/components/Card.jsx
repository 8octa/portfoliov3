const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm w-full h-[10rem] rounded overflow-hidden shadow-lg bg-black border-1 border-zinc-400 p-5 m-5">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-zinc-500 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
