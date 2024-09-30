import React from "react";

type PositiveNumberType = {
  value: number;

  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = {
  value: number;

  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};

type ZeroNumberType = {
  value: number;

  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};
type RandomNumberType =
  | PositiveNumberType
  | NegativeNumberType
  | ZeroNumberType;

type RandomNumberTypes = {
  value: number;
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};
export default function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberType) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}
