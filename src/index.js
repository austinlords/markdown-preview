import React, { useState } from "react";
import ReactDOM from "react-dom";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  let [markdown, updateMarkdown] = useState(
    `# Title Here
## subtitle
[a link to Austin's website](https://www.austinlords.com)\n
\`inline code\`
 - here is a list **item**
 - second item

 \`\`\`
 function doSomething() {
   console.log('hello world!');
 }
\`\`\`

> blockquote. _insert famous quote here_
> several line blockquote

![alt text](http://lorempixel.com/200/200/ "random pic")

`
  );

  marked.setOptions({});
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h3>Markdown Editor</h3>
          <hr />
          <textarea
            id="editor"
            value={markdown}
            onChange={e => updateMarkdown(e.target.value)}
          />
        </div>
        <div className="col-6">
          <h3>Preview</h3>
          <hr />
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
