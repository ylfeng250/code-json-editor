import React from "react";
import { createRoot } from "react-dom/client";
import { CodeJson } from ".";
import { formRenderSchema } from "./schema/form-render-schema";
import { packageJsonSchema } from "./schema/package-json-schema";
import { openApiSchema } from "./schema/openapi-schema";

export const defaultJsonSchemas = [
  {
    uri: "package.json",
    fileMatch: ["package.json"],
    schema: packageJsonSchema,
  },
  {
    uri: "openapi-v3",
    fileMatch: ["*openapi*"],
    schema: openApiSchema,
  },
  {
    uri: "form-render",
    fileMatch: ["*form-render*"],
    schema: formRenderSchema,
  },
];

const App = () => (
  <CodeJson
    height={400}
    schemas={defaultJsonSchemas}
    onChange={console.log}
    onValidate={console.log}
    type={"package.json"}
  />
);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
