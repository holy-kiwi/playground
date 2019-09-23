import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface Props {
    value: string;
}

class CodeBlock extends PureComponent<Props> {

  render() {
    const { value } = this.props;
    return (
      <SyntaxHighlighter language="javascript">
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
