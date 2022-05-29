import React from "react";
import { SourceInterface } from "models/source.model";

type Props = {
  source: SourceInterface;
  index: number;
};

const SourceItem = (props: Props) => {
  return (
    <div
      className="rounded-2xl border-primary animate__animated animate__fadeInUp p-4 border"
      style={{ animationDelay: `${props.index / 3}s` }}>
      <p>{props.source.name}</p>
      <p>{props.source.amount}</p>
    </div>
  );
};

export default SourceItem;
