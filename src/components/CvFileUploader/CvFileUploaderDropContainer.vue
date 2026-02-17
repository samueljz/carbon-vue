<script setup lang="ts">
import '@carbon/web-components/es/components/file-uploader/index.js';

export interface CvFileUploaderDropContainerProps {
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  name?: string;
}

withDefaults(defineProps<CvFileUploaderDropContainerProps>(), {
  accept: '',
  disabled: false,
  multiple: false,
  name: '',
});

const emit = defineEmits<{
  'cds-file-uploader-drop-container-changed': [event: CustomEvent];
}>();
</script>

<template>
  <cds-file-uploader-drop-container
    :accept="accept"
    :disabled="disabled"
    :multiple="multiple"
    :name="name"
    @cds-file-uploader-drop-container-changed="
      emit('cds-file-uploader-drop-container-changed', $event)
    "
  >
    <slot />
  </cds-file-uploader-drop-container>
</template>
