import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "@/lib/components/CodeBlock";
import {
  A,
  BlockQuote,
  ContainsTaskList,
  MarkdownWrapper,
  Table
} from "./styles";

interface Props {
  content: string;
}
const Markdown = ({ content }: Props) => {
  return (
    <MarkdownWrapper>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: (props) => <CodeBlock {...props} />,
          tr({ children }) {
            return <tr>{children}</tr>;
          },
          blockquote({ children }) {
            return <BlockQuote>{children}</BlockQuote>;
          },
          table({ children }) {
            return <Table>{children}</Table>;
          },
          ul({ children, className }) {
            return className?.includes("contains-task-list") ? (
              <ContainsTaskList>{children}</ContainsTaskList>
            ) : (
              <ul className={className}>{children}</ul>
            );
          },
          a({ children, href }) {
            return (
              <A href={href} rel="noreferrer" target="_blank">
                {children}
              </A>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default Markdown;
