<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="iconName"
    role="img"
  >
    <title :id="iconName" lang="en">{{iconName}} icon</title>
    <g>
      <path :fill="iconColor" :d="iconPath" />
    </g>
  </svg>
</template>

<script>
import * as icon from "@mdi/js";

export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: "24"
    },
    height: {
      type: [Number, String],
      default: "24"
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  },
  data: function() {
    return {
      iconPath: icon[this.iconName]
    };
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>