import { CodeBlock } from "react-code-block";

export default function SmallCodeSnippet({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <CodeBlock code={code} language={language}>
      <div className="inline-table max-w-full w-fit ">
        <CodeBlock.Code className="bg-gray-900 px-2 py-1 !text-base rounded-lg shadow-lg">
          <div className="table-row">
            <CodeBlock.LineContent className="table-cell whitespace-pre-wrap text-base">
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </div>
        </CodeBlock.Code>
      </div>
    </CodeBlock>
  );
}
