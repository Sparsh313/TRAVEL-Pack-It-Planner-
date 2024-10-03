export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">start adding items lets goooooooooooooo</p>;

  const Numitems = items.length;
  const NumPacked = items.filter((item) => item.packed).length;
  const numpercentage = Math.round((NumPacked / Numitems) * 100);

  return (
    <footer className="stats">
      <em>
        {numpercentage === 100
          ? `You are ready to go `
          : `hey you have ${Numitems} elemnts , and u have already packed
        ${NumPacked} items and ${numpercentage}% of your work is completed`}
      </em>
    </footer>
  );
}
