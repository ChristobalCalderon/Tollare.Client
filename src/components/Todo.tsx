import * as React from "react";
import { observable, reaction, observe } from "mobx";

export default function Todo() {
  return <div>Hello!</div>;
}

export const store = observable.map(new Map([["strawberries", false]]));

export const todos = observable([
  {
    title: "Make coffee",
    done: true
  },
  {
    title: "Find biscuit",
    done: false
  }
]);

export const changeStore = () => {
  store.set("strawberries", true);
  store.set("banana", false);
};

export const changeStoreReverse = () => {
  store.set("strawberries", false);
  store.set("banana", true);
};

store.observe((change: any) => {
  console.log("WORKS!");
});

store.observe((change: any) => {
  console.log("WORKS!");
});

observe(store, "strawberries", (change: any) => change);

export const reaction2 = reaction(
  () => store,
  (store, reaction) => {
    debugger;
    console.log("reaction 2:", store, reaction);
  }
);

// correct use of reaction: reacts to length and title changes
export const reaction3 = reaction(
  () => store.get("strawberries"),
  (asd: any, reaction: any) => console.log("reaction 2:", asd)
);
