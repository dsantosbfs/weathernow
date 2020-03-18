import { storiesOf } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { DataLabelComponent } from './data-label.component';

import readme from './README.md';

const stories = storiesOf('Data Label', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: DataLabelComponent,
  moduleMetadata: {
    declarations: [DataLabelComponent],
  },
  props: {
    data: text('Data', 'Data'),
    label: text('Label', 'Label')
  },
  template: `
    <lib-data-label
      [data]="data"
      [label]="label"
    >
    </lib-data-label>
    `
}),
{
  notes: { markdown: readme },
});
