import m from "mithril";
import { Photo } from "./components/Photo";

let root = document.getElementById("app");

m.mount(root, {
  view: () =>
    m("div", { class: "flex flex-wrap" }, [
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo),
      m(Photo)
    ])
});

console.log("ok");
