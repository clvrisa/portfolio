import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeSnippetProps {
  language: string;
  code: string;
}

const CodeSnippet: FC<CodeSnippetProps> = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
