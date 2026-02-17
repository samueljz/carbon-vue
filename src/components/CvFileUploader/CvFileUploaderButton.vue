<script setup lang="ts">
import '@carbon/web-components/es/components/file-uploader/index.js';

export interface CvFileUploaderButtonProps {
  buttonKind?: string;
  size?: string;
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  name?: string;
}

withDefaults(defineProps<CvFileUploaderButtonProps>(), {
  buttonKind: 'primary',
  size: 'md',
  accept: '',
  disabled: false,
  multiple: false,
  name: '',
});

const emit = defineEmits<{
  'cds-file-uploader-button-changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-file-uploader-button
    :button-kind="buttonKind"
    :size="size"
    :accept="accept"
    :disabled="disabled"
    :multiple="multiple"
    :name="name"
    @cds-file-uploader-button-changed="
      emit('cds-file-uploader-button-changed', $event)
    "
  >
    <slot />
  </cds-file-uploader-button>
</template>
