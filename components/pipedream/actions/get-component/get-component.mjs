import pipedream from "../../pipedream.app.mjs";

export default {
  key: "pipedream-get-component",
  name: "Get Component",
  description: "Gets a published component. [See Doc](https://pipedream.com/docs/api/rest/#get-a-component)",
  version: "0.0.1",
  type: "action",
  props: {
    pipedream,
    componentKey: {
      propDefinition: [
        pipedream,
        "componentKey",
      ],
    },
    globalRegistry: {
      type: "boolean",
      label: "Global Registry",
      description: "`TRUE` by default. Gets component from the global registry.",
      optional: true,
      default: true,
    },
  },
  async run({ $ }) {
    const { data } = await this.pipedream.getComponent(this.componentKey, this.globalRegistry);

    if (data) {
      $.export("$summary", `Succesfully fetched component ${this.componentKey}`);
      return data;
    }

    throw new Error(`${this.componentKey} component was not found`);
  },
};
