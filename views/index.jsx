const React = require("react");
function Index(props) {
  const { fruits } = props;
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {fruits.map((fruit, i) => {
          return (
            <li>
              The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}{" "}
              {fruit.readyToEat
                ? "It is ready to eat"
                : "it is not ready to eat"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
module.exports = Index;
      