import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { ActivityCardComponent } from "./activity-card.component";

const meta: Meta<ActivityCardComponent> = {
  title: "Activities/Activity Card",
  component: ActivityCardComponent,
  tags: ['autodocs'],
  render: (args) => ({
    props: {
      ...args,
    },
    template: `<app-activity-card ${argsToTemplate(args)} />`,
  }),
  parameters: {
    layout: "centered",
  },
  args: {},
};

export default meta;

type Story = StoryObj<ActivityCardComponent>;

export const Today: Story = {
  args: {
    size: "small",
    title: "Today",
    distance: 6.21,
    distanceUoM: "km",
    duration: 48,
    durationUoM: "min",
    weight: 77.8,
    weightUoM: "kg",
  }
};

