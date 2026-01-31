<script setup lang="ts">
import '@carbon/web-components/es/components/button/index.js';
import type { ButtonKind, ButtonSize, ButtonType, ButtonTooltipAlignment, TooltipPosition } from '@/types';

export interface CvButtonProps {
  /**
   * Specify the kind of Button you want to create
   */
  kind?: ButtonKind;
  /**
   * Specify the size of the button
   */
  size?: ButtonSize;
  /**
   * Specify whether the Button should be disabled
   */
  disabled?: boolean;
  /**
   * Optionally specify an href for your Button to become an anchor element
   */
  href?: string;
  /**
   * Optional prop to specify the type of the Button
   */
  type?: ButtonType;
  /**
   * Specify whether the Button is expressive
   */
  isExpressive?: boolean;
  /**
   * Specify whether the Button is currently selected (only applies to Ghost variant)
   */
  isSelected?: boolean;
  /**
   * Specify the text to be rendered in the tooltip
   */
  tooltipText?: string;
  /**
   * Specify the direction of the tooltip
   */
  tooltipPosition?: TooltipPosition;
  /**
   * Specify the alignment of the tooltip
   */
  tooltipAlignment?: ButtonTooltipAlignment;
  /**
   * Specify the message read by screen readers for the danger button variant
   */
  dangerDescription?: string;
}

const props = withDefaults(defineProps<CvButtonProps>(), {
  kind: 'primary',
  size: 'lg',
  disabled: false,
  type: 'button',
  isExpressive: false,
  isSelected: false,
  tooltipPosition: 'top',
  tooltipAlignment: 'center',
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<template>
  <cds-button
    :kind="kind"
    :size="size"
    :disabled="disabled || undefined"
    :href="href"
    :type="type"
    :isExpressive="isExpressive || undefined"
    :isSelected="isSelected || undefined"
    :tooltip-text="tooltipText"
    :tooltip-position="tooltipPosition"
    :tooltip-alignment="tooltipAlignment"
    :danger-description="dangerDescription"
    @click="handleClick"
  >
    <slot />
    <slot name="icon" />
    <slot name="badge-indicator" />
  </cds-button>
</template>
