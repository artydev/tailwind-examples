import m from "mithril";

const cardcontainer = "p-6 w-full lg:w-1/2 xl:w-1/2 ";
const card = "overflow-hidden shadow-lg bg-grey-darkest";
const title = "font-bold text-xl mb-2";
const texte = "text-black font-light";

const desc = `
A large drop of sun lingered on the horizon and then dripped over\
and was gone, and the sky was brilliant over the spot where it had\
gone, and a torn cloud, like a bloody rag, hung over the spot of\
its going. And dusk crept over the sky from the eastern horizon,\
and darkness crept over the land from the east.
`;

export const Photo = {
  view: () =>
    m(
      "div",
      { class: cardcontainer },
      m("div", { class: card }, [
        m("img", {
          class: "w-full",
          src:
            "https://user-images.githubusercontent.com/894092/51373630-83fb3200-1af8-11e9-9069-76fcc7538353.jpg",
          alt: "Sunset with grass in the foreground"
        }),
        m("div", { class: "px-6 py-4" }, [
          m("div", { class: title }, "A Cold Sunset"),
          m("p", { class: texte }, desc)
        ])
      ])
    )
};
