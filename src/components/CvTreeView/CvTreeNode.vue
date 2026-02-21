<script setup lang="ts">
import '@carbon/web-components/es/components/tree-view/index.js';

export interface CvTreeNodeProps {
  /**
   * sets if tree node is active
   */
  active?: boolean;
  /**
   * disabled property
   */
  disabled?: boolean;
  /**
   * Specify if the TreeNode is expanded (only applicable to parent nodes)
   */
  isExpanded?: boolean;
  /**
   * Optional: The URL the TreeNode is linking to
   */
  href?: string;
  /**
   * Specify the TreeNode's ID. Must be unique in the DOM
   */
  id?: string;
  /**
   * Rendered label for the TreeNode
   */
  label?: string;
  /**
   * sets if tree node is selected
   */
  selected?: boolean;
  /**
   * when adding an href to control the click functionality
   */
  onClick?: (event: Event) => void;
}

withDefaults(defineProps<CvTreeNodeProps>(), {
  active: false,
  disabled: false,
  isExpanded: false,
  selected: false,
});

const emit = defineEmits<{
  'tree-node-selected': [event: CustomEvent];
  'tree-node-toggled': [event: CustomEvent];
}>();
</script>

<template>
  <cds-tree-node
    :active="active || undefined"
    :disabled="disabled || undefined"
    :is-expanded="isExpanded || undefined"
    :href.attr="href || undefined"
    :id.attr="id || undefined"
    :label="label"
    :selected="selected || undefined"
    .onClick="onClick"
    @cds-tree-node-selected="emit('tree-node-selected', $event as CustomEvent)"
    @cds-tree-node-toggled="emit('tree-node-toggled', $event as CustomEvent)"
  >
    <slot name="icon" />
    <slot />
  </cds-tree-node>
</template>
