import type { CodeProps } from "react-markdown/lib/ast-to-react";
import { BiCopy } from "react-icons/bi";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import React from "react";
import { CodeBlockWrapper, InlineCodeWrapper } from "./styles";

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}: CodeProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <CodeBlockWrapper>
      <button
        className="copy_button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          navigator.clipboard.writeText(children.toString())
        }
      >
        <BiCopy />
      </button>
      <SyntaxHighlighter
        {...props}
        language={match[1]}
        PreTag="div"
        style={dracula}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  ) : (
    <InlineCodeWrapper {...props}>{children}</InlineCodeWrapper>
  );
};

export default CodeBlock;
