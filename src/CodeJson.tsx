import React, { useRef } from "react";
import Editor, { OnMount, type OnValidate } from "@monaco-editor/react";

export type ConfigType = "package.json" | "openapi" | "form-render";

export interface CodeJsonProps {
  /**
   * json 编辑器高度
   * @default 300
   */
  height?: number;
  /**
   * json 的 schema 定义
   * @default {}
   */
  schemas?: {
    uri: string;
    fileMatch?: string[];
    schema?: any;
  }[];
  /**
   * json 值
   * @default {}
   */
  onChange?: (value?: string) => void;
  /**
   * json 校验回调
   */
  onValidate?: OnValidate;
  /**
   * 类型，和填入的 schemas 中的 fileMatch 对应
   * @example
   * fileMatch:["*form-render*"]
   * 想使用 form-render 的schema做校验就配置 type:'form-render'
   * @default ''
   */
  type?: ConfigType & string;
}
const CodeJson = (props: CodeJsonProps) => {
  const { height = 300, schemas = [], onChange, onValidate } = props;
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [...schemas],
    });
  };

  return (
    <Editor
      height={height}
      defaultLanguage="json"
      defaultPath="custom.json"
      defaultValue={JSON.stringify({}, null, 2)}
      onMount={handleEditorDidMount}
      onChange={(value) => {
        onChange && onChange(value);
      }}
      onValidate={(markers) => {
        onValidate && onValidate(markers);
      }}
    />
  );
};

export default CodeJson;
