import { StateType } from "./config";
import { WINNING_COMBINATIONS } from "./config";

export const arraysContainSameElements = function (
  array1: number[],
  array2: number[]
) {
  const frequencyCounter1: any = {};
  const frequencyCounter2: any = {};

  for (const element of array1) {
    frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
  }

  for (const element of array2) {
    frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
};

// Check state
export const checkCondition = function (data: StateType) {
  return data.whoWinTurn.O_WIN || data.whoWinTurn.X_WIN || data.whoWinTurn.ties;
};

// Filter arr
export const findWinBox = function (inputArray: any): number[] {
  return WINNING_COMBINATIONS.reduce((result: any, combination) => {
    const intersection = combination.filter((num: any) =>
      inputArray.includes(num)
    );
    if (intersection.length === combination.length) {
      result.push(...intersection);
    }
    return result;
  }, []);
};

// Autobind Decorator
export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFN = originalMethod.bind(this);
      return boundFN;
    },
  };
  return adjDescriptor;
}
