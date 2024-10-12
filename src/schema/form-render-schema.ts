export const formRenderSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "协议配置项",
  description: "schema 用于描述表单的基本信息、结构和校验。",
  type: "object",
  properties: {
    type: {
      type: "string",
      enum: ["object"],
      description: "固定配置为 type: 'object'",
    },
    displayType: {
      type: "string",
      enum: ["row", "column", "inline"],
      description: "表单项 label 布局方式",
    },
    column: {
      type: "integer",
      default: 3,
      description: "表单布局，一行应该有几列",
    },
    labelWidth: {
      type: "integer",
      description: "表单项标签的宽度",
    },
    properties: {
      type: "object",
      description: "表单元素的集合",
      additionalProperties: {
        oneOf: [
          {
            $ref: "#/definitions/item",
          },
          {
            $ref: "#/definitions/object",
          },
          {
            $ref: "#/definitions/list",
          },
        ],
      },
    },
  },
  required: ["type", "properties"],
  definitions: {
    item: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: [
            "string",
            "number",
            "boolean",
            "array",
            "range",
            "html",
            "void",
          ],
        },
        title: {
          type: "string",
        },
        widget: {
          type: "string",
        },
        placeholder: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "array",
              items: {
                type: "string",
              },
              minItems: 2,
              maxItems: 2,
            },
          ],
        },
        description: {
          type: "string",
        },
        tooltip: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "object",
              properties: {
                title: {
                  type: "string",
                },
                color: {
                  type: "string",
                },
              },
              required: ["title"],
            },
          ],
        },
        descWidget: {
          type: "string",
        },
        extra: {
          type: "string",
        },
        required: {
          type: "boolean",
          default: false,
        },
        min: {
          type: "integer",
        },
        max: {
          type: "integer",
        },
        format: {
          type: "string",
          enum: [
            "image",
            "textarea",
            "color",
            "email",
            "url",
            "dateTime",
            "date",
            "time",
            "upload",
          ],
        },
        rules: {
          type: "array",
          items: {
            type: "object",
            properties: {
              pattern: {
                type: "string",
              },
              message: {
                type: "string",
              },
            },
            required: ["pattern", "message"],
          },
        },
        hidden: {
          type: "boolean",
          default: false,
        },
        disabled: {
          type: "boolean",
          default: false,
        },
        readOnly: {
          type: "boolean",
          default: false,
        },
        readOnlyWidget: {
          type: "string",
        },
        dependencies: {
          type: "array",
          items: {
            type: "string",
          },
        },
        className: {
          type: "string",
        },
        reserveLabel: {
          type: "boolean",
        },
        props: {
          type: "object",
        },
        action: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "object",
              properties: {
                widget: {
                  type: "string",
                },
              },
              required: ["widget"],
            },
          ],
        },
      },
      required: ["type", "title", "widget"],
    },
    object: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["object"],
        },
        title: {
          type: "string",
        },
        widget: {
          type: "string",
          enum: ["collapse", "card", "lineTitle", "subInline"],
        },
        properties: {
          $ref: "#/properties/properties",
        },
        column: {
          type: "integer",
          default: 3,
        },
        description: {
          type: "string",
        },
        tooltip: {
          oneOf: [
            {
              type: "string",
            },
            {
              type: "object",
              properties: {
                title: {
                  type: "string",
                },
                color: {
                  type: "string",
                },
              },
              required: ["title"],
            },
          ],
        },
        props: {
          type: "object",
        },
      },
      required: ["type", "properties"],
    },
    list: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["array"],
        },
        title: {
          type: "string",
        },
        widget: {
          type: "string",
          enum: [
            "cardList",
            "simpleList",
            "tableList",
            "drawerList",
            "virtualList",
          ],
        },
        max: {
          type: "integer",
        },
        min: {
          type: "integer",
        },
        props: {
          type: "object",
          properties: {
            addBtnProps: {
              type: "object",
            },
            delConfirmProps: {
              type: "object",
            },
            drawerProps: {
              type: "object",
            },
            actionColumnProps: {
              type: "object",
            },
            hideAdd: {
              type: "boolean",
            },
            hideCopy: {
              type: "boolean",
            },
            hideMove: {
              type: "boolean",
            },
            hideDelete: {
              type: "boolean",
            },
            hideColumnNestedObject: {
              oneOf: [
                {
                  type: "boolean",
                },
                {
                  type: "string",
                  enum: ["hide", "collapse"],
                },
              ],
              default: false,
            },
            onAdd: {
              type: "string",
              format: "function",
            },
            onRemove: {
              type: "string",
              format: "function",
            },
            onMove: {
              type: "string",
              format: "function",
            },
            onCopy: {
              type: "string",
              format: "function",
            },
          },
        },
        items: {
          $ref: "#/definitions/item",
        },
      },
      required: ["type", "items"],
    },
  },
};
