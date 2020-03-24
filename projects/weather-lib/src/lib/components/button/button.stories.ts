import { storiesOf } from '@storybook/angular';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { ButtonComponent } from './button.component';

import readme from './README.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: ButtonComponent,
  moduleMetadata: {
    declarations: [ButtonComponent],
  },
  props: {
    disabled: boolean('Disabled', false),
    label: text('Label', 'Label')
  },
  template: `
    <lib-button
      [disabled]="disabled"
      [label]="label"
    >
    </lib-button>
    `
}),
{
  notes: { markdown: readme },
});
