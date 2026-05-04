import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import {
    CvStructuredList,
    CvStructuredListHead,
    CvStructuredListHeaderRow,
    CvStructuredListHeaderCell,
    CvStructuredListBody,
    CvStructuredListRow,
    CvStructuredListCell,
    CvStructuredListHeaderCellSkeleton,
} from './index';

const defaultArgs = {
    condensed: false,
    flush: false,
    hasSelection: false,
};

const argTypes: ArgTypes = {
    condensed: {
        control: 'boolean',
        description: 'Specify if structured list is condensed, default is false.',
    },
    flush: {
        control: 'boolean',
        description: 'Specify if structured list is flush, default is false.',
    },
    hasSelection: {
        control: 'boolean',
        description: 'Supports selection feature (has-selection)',
    },
};

const meta: Meta<typeof CvStructuredList> = {
    title: 'Components/Structured list',
    component: CvStructuredList,
};

export default meta;
type Story = StoryObj<typeof CvStructuredList>;

export const Default: Story = {
    args: defaultArgs,
    argTypes,
    render: (args) => ({
        components: {
            CvStructuredList,
            CvStructuredListHead,
            CvStructuredListHeaderRow,
            CvStructuredListHeaderCell,
            CvStructuredListBody,
            CvStructuredListRow,
            CvStructuredListCell,
        },
        setup() {
            return { args };
        },
        template: `
      <CvStructuredList
        :selection-name="args.hasSelection ? 'structured-list-selection' : undefined"
        :condensed="args.condensed"
        :flush="args.flush"
      >
        <CvStructuredListHead>
          <CvStructuredListHeaderRow>
            <CvStructuredListHeaderCell>ColumnA</CvStructuredListHeaderCell>
            <CvStructuredListHeaderCell>ColumnB</CvStructuredListHeaderCell>
            <CvStructuredListHeaderCell>ColumnC</CvStructuredListHeaderCell>
          </CvStructuredListHeaderRow>
        </CvStructuredListHead>
        <CvStructuredListBody>
          <CvStructuredListRow
            :selection-value="args.hasSelection ? 'structured-list-selection-0' : undefined"
          >
            <CvStructuredListCell>Row 1</CvStructuredListCell>
            <CvStructuredListCell>Row 1</CvStructuredListCell>
            <CvStructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.
            </CvStructuredListCell>
          </CvStructuredListRow>
          <CvStructuredListRow
            :selection-value="args.hasSelection ? 'structured-list-selection-1' : undefined"
          >
            <CvStructuredListCell>Row 2</CvStructuredListCell>
            <CvStructuredListCell>Row 2</CvStructuredListCell>
            <CvStructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui
              magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere
              sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque
              vulputate nisl a porttitor interdum.
            </CvStructuredListCell>
          </CvStructuredListRow>
        </CvStructuredListBody>
      </CvStructuredList>
    `,
    }),
};

export const Selection: Story = {
    render: () => ({
        components: {
            CvStructuredList,
            CvStructuredListHead,
            CvStructuredListHeaderRow,
            CvStructuredListHeaderCell,
            CvStructuredListBody,
            CvStructuredListRow,
            CvStructuredListCell,
        },
        setup() {
            const selectionValues = [
                'structured-list-selection-0',
                'structured-list-selection-1',
                'structured-list-selection-2',
                'structured-list-selection-3',
            ];
            return { selectionValues };
        },
        template: `
      <CvStructuredList selection-name="structured-list-selection">
        <CvStructuredListHead>
          <CvStructuredListHeaderRow>
            <CvStructuredListHeaderCell>ColumnA</CvStructuredListHeaderCell>
            <CvStructuredListHeaderCell>ColumnB</CvStructuredListHeaderCell>
            <CvStructuredListHeaderCell>ColumnC</CvStructuredListHeaderCell>
          </CvStructuredListHeaderRow>
        </CvStructuredListHead>
        <CvStructuredListBody>
          <CvStructuredListRow
            v-for="(selectionValue, index) in selectionValues"
            :key="index"
            :selection-value="selectionValue"
          >
            <CvStructuredListCell>Row {{ index }}</CvStructuredListCell>
            <CvStructuredListCell>Row {{ index }}</CvStructuredListCell>
            <CvStructuredListCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              dui magna, finibus id tortor sed, aliquet bibendum augue.
              Aenean posuere sem vel euismod dignissim. Nulla ut cursus
              dolor. Pellentesque vulputate nisl a porttitor
              interdum.
            </CvStructuredListCell>
          </CvStructuredListRow>
        </CvStructuredListBody>
      </CvStructuredList>
    `,
    }),
};

export const Skeleton: Story = {
    render: () => ({
        components: {
            CvStructuredList,
            CvStructuredListHead,
            CvStructuredListHeaderRow,
            CvStructuredListHeaderCellSkeleton,
            CvStructuredListBody,
            CvStructuredListRow,
            CvStructuredListCell,
        },
        template: `
      <div style="width: 800px">
        <CvStructuredList v-for="i in 2" :key="i">
          <CvStructuredListHead>
            <CvStructuredListHeaderRow>
              <CvStructuredListHeaderCellSkeleton v-for="j in 3" :key="j" />
            </CvStructuredListHeaderRow>
          </CvStructuredListHead>
          <CvStructuredListBody>
            <CvStructuredListRow v-for="k in 5" :key="k">
              <CvStructuredListCell />
              <CvStructuredListCell />
              <CvStructuredListCell />
            </CvStructuredListRow>
          </CvStructuredListBody>
        </CvStructuredList>
      </div>
    `,
    }),
};
