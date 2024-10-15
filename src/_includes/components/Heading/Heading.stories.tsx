import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    lv: {
      control: { type: 'number', min: 1, max: 6 },
      description: '見出しのレベル (h1 ~ h6)',
    },
    text: {
      control: 'text',
      description: '見出しのテキスト',
    },
    className: {
      control: 'text',
      description: 'CSS クラス',
    },
    id: {
      control: 'text',
      description: '要素のID',
    },
    children: {
      control: 'text',
      description: '見出しの下に表示される子要素',
    },
  },
} as Meta;

// テンプレートを定義
const Template: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

// h1 見出しのデフォルトストーリー
export const H1 = Template.bind({});
H1.args = {
  lv: '1',
  text: 'ページタイトル',
  className: 'heading-h1',
  id: 'heading-1',
};

// h2 見出しのストーリー
export const H2 = Template.bind({});
H2.args = {
  lv: '2',
  text: 'Heading Level 2',
  className: 'heading-h2',
  id: 'heading-2',
};

// 子要素付きのストーリー
export const WithChildren = Template.bind({});
WithChildren.args = {
  lv: '3',
  text: 'Heading with children',
  children: <p>This is a paragraph under the heading.</p>,
  className: 'heading-h3',
  id: 'heading-3',
};

// カスタムクラス付きのストーリー
export const CustomClass = Template.bind({});
CustomClass.args = {
  lv: '4',
  text: 'Custom Heading',
  className: 'custom-class',
  id: 'heading-4',
};
