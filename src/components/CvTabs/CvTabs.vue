<script setup lang="ts">
import '@carbon/web-components/es/components/tabs/index.js';

export interface CvTabsProps {
  /**
   * An assistive text for screen reader to announce, telling the open state.
   */
  selectingItemsAssistiveText?: string;
  /**
   * An assistive text for screen reader to announce, telling that an item is selected.
   */
  selectedItemAssistiveText?: string;
  /**
   * The content of the trigger button for narrow mode.
   */
  triggerContent?: string;
  /**
   * Tabs type. 'regular' | 'contained'
   */
  type?: string;
  /**
   * The selection mode. 'automatic' | 'manual'
   */
  selectionMode?: string;
  /**
   * The value of the selected tab.
   */
  value?: string;
  /**
   * Disable tab selection
   */
  disabled?: boolean;
}

withDefaults(defineProps<CvTabsProps>(), {
  selectingItemsAssistiveText: 'Selecting items. Use up and down arrow keys to navigate.',
  selectedItemAssistiveText: 'Selected an item.',
  triggerContent: '',
  type: 'regular',
});

const emit = defineEmits<{
  'tabs-beingselected': [event: CustomEvent];
  'tabs-selected': [event: CustomEvent];
}>();
</script>

<template>
  <cds-tabs
    :selecting-items-assistive-text="selectingItemsAssistiveText"
    :selected-item-assistive-text="selectedItemAssistiveText"
    :trigger-content="triggerContent"
    :type="type"
    :selection-mode="selectionMode"
    :value="value"
    :disabled="disabled"
    @cds-tabs-beingselected="emit('tabs-beingselected', $event)"
    @cds-tabs-selected="emit('tabs-selected', $event)"
  >
    <slot />
  </cds-tabs>
</template>
