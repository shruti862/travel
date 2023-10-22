export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numPacked / numItems * 100;
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding items to your packing list🚀</em>
      </p>
    );
  }
  return (
    <footer className='stats'>
      <em>{percentage === 100 ? " You got everything! Ready to go ✈️" : `You have ${numItems} items in your list and you already packed ${numPacked} (${Math.round(percentage)}%)`}</em>
    </footer>
  );
}
