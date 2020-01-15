import typography from "./typography"

export default {
  typography: { ...typography },
  responsive: {
    small: "35em",
    medium: "55em",
    large: "70em",
  },

  mixins: {
    widthMixin: (breakpoint, width) => `@media(max-width: ${breakpoint}){
      width: ${width};
    }`,
  },

  shadows: {
    large:
      "0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025)",
  },
}