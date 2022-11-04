const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occuparion),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(
      Person,
      { name: "Irena", occuparion: "architector" },
      null
    ),
    React.createElement(Person, { name: "Olga", occuparion: "teacher" }, null),
    React.createElement(Person, { name: "Victor", occuparion: "doctor" }, null),
  ]);
};
ReactDom.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(React.createElement(App));
