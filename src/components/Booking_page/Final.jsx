
import { Canceldetail } from "./Canceldetail";
import { Flightdetail } from "./Flightdetail";
import { Luggagebar } from "./Luggagebar";
import { Paybar } from "./Paybar";
export const Final = () => {
  return (
    <div className="final">
      <div className="detail">
        <Flightdetail />
        <Luggagebar />
        <Canceldetail />
      </div>
      <div className="pay_detail">
        <Paybar />
      </div>
    </div>
  );
};