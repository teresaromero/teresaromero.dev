<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="ariaLabel"
    role="img"
  >
    <title :id="ariaLabel" lang="en">{{ariaLabel}}</title>
    <g>
      <path :fill="iconColor" :d="iconPath" />
    </g>
  </svg>
</template>

<script>
import {
  mdiNodejs,
  mdiReact,
  mdiVuejs,
  mdiWordpress,
  mdiAws,
  mdiGoogleCloud,
  mdiGithub,
  mdiSass
} from "@mdi/js/mdi.js";

export default {
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    height: {
      type: [Number, String],
      default: "100%"
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    ariaLabel: {
      type: String
    }
  },
  data: function() {
    switch (this.iconName) {
      case "mdiNodejs":
        return { iconPath: mdiNodejs };
      case "mdiReact":
        return { iconPath: mdiReact };
      case "mdiWordpress":
        return { iconPath: mdiWordpress };
      case "mdiVuejs":
        return { iconPath: mdiVuejs };
      case "mdiAws":
        return { iconPath: mdiAws };
      case "mdiGoogleCloud":
        return { iconPath: mdiGoogleCloud };
      case "mdiGithub":
        return { iconPath: mdiGithub };
      case "mdiSass":
        return { iconPath: mdiSass };
      default:
        break;
    }
  }
};
</script>
