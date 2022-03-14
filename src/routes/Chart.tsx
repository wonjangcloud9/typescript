import { useQuery } from "react-query";
import { useOutletContext, useParams } from "react-router";
import { fetchCoinHistory } from "../api";

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId!)
  );
  console.log(data);
  return <h1>Hi</h1>;
}

export default Chart;
