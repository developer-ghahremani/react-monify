import React from "react";
import { useAppSelector } from "store";
import { useGetSourcesQuery } from "store/service";

type Props = {};

const Sources = (props: Props) => {
  const { selectedWallet } = useAppSelector((s) => s);
  const { data, isFetching } = useGetSourcesQuery({
    walletId: selectedWallet._id || "",
  });

  console.log(data, isFetching);

  return <div>Sources</div>;
};

export default Sources;
