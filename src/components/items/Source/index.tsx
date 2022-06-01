import { INumberFormat } from "components/general";
import React from "react";
import { SourceInterface } from "models/source.model";

type Props = {
  source: SourceInterface;
  index: number;
};

const SourceItem = (props: Props) => {
  return (
    <div
      className="rounded-2xl border-primary animate__animated animate__fadeInUp p-4 border cursor-pointer"
      style={{ animationDelay: `${props.index / 3}s` }}>
      <p>{props.source.name}</p>
      <INumberFormat value={props.source.amount} thousandSeparator />
    </div>
  );
};

export default SourceItem;
