import figma, { html } from '@figma/code-connect/html';
import {
  TEXTAREA_FIELD_PROPS_NO_LABEL,
  TEXTAREA_FIELD_PROPS_LABEL,
} from 'src/props/sds-textarea';

figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': false },
  props: TEXTAREA_FIELD_PROPS_NO_LABEL,
  example: ({ disabled, value, placeholder }) =>
    html`<sds-textarea
      disabled=${disabled}
      value=${value}
      placeholder=${placeholder}
    ></sds-textarea>`,
});

figma.connect('<FIGMA_INPUTS_TEXTAREA_FIELD>', {
  variant: { 'Has Label': true },
  props: TEXTAREA_FIELD_PROPS_LABEL,
  example: ({ disabled, value, placeholder, error, label, description }) =>
    html`<sds-textarea-field
      disabled=${disabled}
      value=${value}
      placeholder=${placeholder}
      error=${error}
      label=${label}
      description=${description}
    ></sds-textarea-field>`,
});
