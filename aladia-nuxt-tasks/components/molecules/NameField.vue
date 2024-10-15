<template>
  <InputField
    data-cy="name-input-field"
    :placeholder="placeholder"
    :icon="icon"
    :error="nameError"
    :inputValue="name"
    @update:inputValue="updateName"
    custom-style="mb-0"
  />
</template>

<script setup>
import InputField from "./InputField.vue";
import { ref, watch, toRef } from "vue";

const props = defineProps({
  placeholder: { type: String, default: "" },
  icon: { type: String, default: "fa-user" },
  name: { type: String, required: true },
});

const emit = defineEmits(["update:name"]);

const name = ref(props.name);
const nameError = ref("");

watch(
  () => props.name,
  (newName) => {
    name.value = newName;
    validateName(newName);
  }
);

const updateName = (value) => {
  name.value = value;
  validateName(value);
  emit("update:name", value);
};

// Validate the name field
const validateName = (value) => {
  if (!value) {
    nameError.value = "(*) required";
  } else {
    nameError.value = "";
  }
};
</script>
