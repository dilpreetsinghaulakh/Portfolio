import { useState } from "react";
import { CodeBlock } from "react-code-block";
import { Check, Clipboard } from "react-feather";

export default function CodeSnippet({
  code,
  language,
  lineNumbers = false,
}: {
  code: string;
  language: string;
  lineNumbers?: boolean;
}) {
  const [copyState, setCopyState] = useState(0); // 0: Copy code, 1: Copied!

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <CodeBlock code={code} language={language}>
      <div className="relative max-w-full">
        <CodeBlock.Code className="bg-gray-900 !p-6 rounded-xl shadow-lg">
          <div className="table-row">
            {lineNumbers && (
              <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
            )}
            <CodeBlock.LineContent className="table-cell whitespace-pre-wrap text-base">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>

        <button
          className="border border-white/10 rounded-lg p-2 absolute top-2 right-2"
          onClick={() => {
            copyCode();
            setCopyState(1);
            setTimeout(() => setCopyState(0), 1500);
          }}
        >
          {copyState == 0 ? (
            <Clipboard className="w-4 h-4" />
          ) : (
            <Check className="w-4 h-4" />
          )}
        </button>
      </div>
    </CodeBlock>
  );
}
