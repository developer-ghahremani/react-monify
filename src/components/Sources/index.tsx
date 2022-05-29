import ILoading from "components/general/ILoading";
import React from "react";
import { SourceItem } from "components/items";
import { useAppSelector } from "store";
import { useGetSourcesQuery } from "store/service";

type Props = {};

const Sources = (props: Props) => {
  const { selectedWallet } = useAppSelector((s) => s);
  const { data, isFetching } = useGetSourcesQuery({
    walletId: selectedWallet._id || "",
  });

  if (isFetching) return <ILoading />;
  return (
    <div className="md:grid-cols-3 grid grid-cols-1 gap-4 mt-4">
      {data?.map((source, index) => (
        <SourceItem index={index} source={source} key={source._id} />
      ))}
    </div>
  );
};

export default Sources;
