<script setup lang="ts">
import '@carbon/web-components/es/components/file-uploader/index.js';

export interface CvFileUploaderProps {
  disabled?: boolean;
  labelDescription?: string;
  labelTitle?: string;
}

withDefaults(defineProps<CvFileUploaderProps>(), {
  disabled: false,
  labelDescription: '',
  labelTitle: '',
});
</script>

<template>
  <cds-file-uploader
    :disabled="disabled"
    :label-description="labelDescription"
    :label-title="labelTitle"
  >
    <slot name="label-title" />
    <slot name="label-description" />
    <slot name="drop-container" />
    <slot />
  </cds-file-uploader>
</template>
