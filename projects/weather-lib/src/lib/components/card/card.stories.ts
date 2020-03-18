import { storiesOf } from '@storybook/angular';
import { text, number, withKnobs, boolean } from '@storybook/addon-knobs';
import { centered } from '@storybook/addon-centered/angular';

import { CardComponent } from './card.component';

import readme from './README.md';

const stories = storiesOf('Card', module);

stories.addDecorator(withKnobs);
stories.addDecorator(centered);

stories.add('default', () => ({
  component: CardComponent,
  moduleMetadata: {
    declarations: [CardComponent],
  },
  props: {
    content: text('Footer Content', 'Footer content'),
    loading: boolean('Is Loading', false),
    temperature: number('Temperature', 10),
    title: text('Title', 'Card Title')
  },
  template: `
    <lib-card
      [loading]="loading"
      [temperature]="temperature"
      [title]="title"
    >
      {{content}}
    </lib-card>
    `
}),
{
  notes: { markdown: readme },
});
