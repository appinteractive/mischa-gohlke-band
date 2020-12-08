<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%">
    <defs>
      <pattern
        :id="refId"
        x="0"
        y="0"
        width="588"
        height="27"
        patternUnits="userSpaceOnUse"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M0 10.92l8.095-2.362 12.21-3.166 15.069 4.076 21.505-4.076 8.775 1.127 15.314-1.127 25.057 4.076 15.878-4.076 16.821 2.07 25.241-2.07 20.918 2.07 8.546 3.458 13.016-3.458 13.631-3.871 21.376 4.967 31.246-3.166 18.933 5.528 13.826-1.452 9.663-5.877 11.331 5.877 15.832-4.076 27.681 5.528 24.823-5.528 44.714 5.528 33.739-7.329 29.045 5.877 29.701-4.076L559.242 0l16.605 7.462L588 10.92V27H0z"
        />
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" :fill="`url(#${refId})`"></rect>
  </svg>
</template>

<script>
export default {
  data() {
    return {
      refId: this.id || `line-id-${Math.round(Math.random() * 100000)}`
    }
  }
}
</script>
