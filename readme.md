# Code JSON

A React component for editing JSON files with validation and schema support.

## Installation

To install `code-json-editor`, run:

```bash
npm install code-json-editor
```

Or if you're using Yarn:

```bash
yarn add code-json-editor
```

## Usage
First, import the `CodeJson` component in your React application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CodeJson } from 'code-json';

const App = () => <CodeJson />;

ReactDOM.render(<App />, document.getElementById('root'));

```

## Custom Schemas

You can customize the schemas used by the CodeJson component by importing the provided schemas and passing them as props:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CodeJson, packageJsonSchema } from 'code-json';

const App = () => (
  <CodeJson
    height={400}
    schemas={[
      {
        uri: 'package.json',
        fileMatch: ['package.json'],
        schema: packageJsonSchema,
      },
    ]}
    onChange={(value) => console.log(value)}
    onValidate={(isValid) => console.log(isValid)}
    type={'package.json'}
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
```

you can also use your own schema.json

```json

// custom.schema.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["name", "age"]
}

```
config your schema

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { CodeJson } from 'code-json';
import customSchema from './custom.schema.json';

const App = () => (
  <CodeJson
    height={400}
    schemas={[
      {
        uri: 'custom.json',
        fileMatch: ['custom.json'],
        schema: customSchema,
      },
    ]}
    onChange={(value) => console.log(value)}
    onValidate={(isValid) => console.log(isValid)}
    type={'custom.json'}
  />
);

ReactDOM.render(<App />, document.getElementById('root'));

```