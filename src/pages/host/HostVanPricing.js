import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();
  return (
    <p>
      <span className="bold-heading">${van.price.toFixed(2)}</span>/day
    </p>
  );
}
