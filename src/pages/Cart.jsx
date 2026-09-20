import Counter from "../components/Counter";
import Clock from "../components/Clock";

function Cart() {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <Counter />
      <Clock />
    </div>
  );
}

export default Cart;