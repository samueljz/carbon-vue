<script setup lang="ts">
import '@carbon/web-components/es/components/data-table/index.js';
import { INPUT_SIZE } from '@carbon/web-components/es/components/text-input/text-input.js';

export interface CvTableToolbarSearchProps {
  /**
   * The assistive text for the close button.
   */
  closeButtonAssistiveText?: string;
  /**
   * `true` if the search box should be disabled.
   */
  disabled?: boolean;
  /**
   * `true` if the search box should be expanded.
   */
  expanded?: boolean;
  /**
   * The label text.
   */
  labelText?: string;
  /**
   * `true` if the search box should be always be open.
   */
  persistent?: boolean;
  /**
   * The placeholder text.
   */
  placeholder?: string;
  /**
   * The search box size.
   */
  size?: INPUT_SIZE;
  /**
   * The `<input>` name.
   */
  type?: string;
  /**
   * The value.
   */
  value?: string;
}

withDefaults(defineProps<CvTableToolbarSearchProps>(), {
  closeButtonAssistiveText: 'Clear search input',
  disabled: false,
  expanded: false,
  labelText: '',
  persistent: false,
  placeholder: '',
  size: INPUT_SIZE.LARGE,
  type: 'text',
  value: '',
});

const emit = defineEmits<{
  'search-input': [event: CustomEvent];
}>();
</script>

<template>
  <cds-table-toolbar-search
    :close-button-assistive-text="closeButtonAssistiveText"
    :disabled="disabled"
    :expanded="expanded"
    :label-text="labelText"
    :persistent="persistent"
    :placeholder="placeholder"
    :size="size"
    :type="type"
    :value="value"
    @cds-search-input="emit('search-input', $event)"
  >
    <slot />
  </cds-table-toolbar-search>
</template>
