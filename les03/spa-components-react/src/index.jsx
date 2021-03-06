import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./container";

const App = () => {
  /*
        Note that the following is neither a "" string, nor regular JS: it is JSX syntax.
        Furthermore, it should be only a single tag with children (if any).
        If you want several tags at the same level (ie siblings), you need to put
        them inside a <div> for example.
        If you do not want to add a tag to your html-tree, you can use a React fragment.
        The full tag is <React.Fragment></React.Fragment>, whereas the shorthand looks like this <></>.
        If you look at this <></> from the development tools in your browser, it will not be visible.
        More info at: https://reactjs.org/docs/fragments.html
        If you remove the <>, and have the <h2> and <Container> one after the
        other, you will get an error.
     */
  return (
    <>
      <h2>Example of Single-Page Application Components with React</h2>
      {/*
                This will render the HTML from the Container component with
                3 Counter components inside it.
                We simply call the name of component inside a tag.
            */}
      <Container ncounters={3} />
    </>
  );
};

/*
    This is where we bind our generated HTML via React to the .html file.
    Changes in the state of the React Components will automatically trigger
    the re-rendering of the HTML.
 */
ReactDOM.render(<App />, document.getElementById("root"));
