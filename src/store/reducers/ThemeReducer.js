import { SET_DEFAULT_THEME, SET_CODER_THEME } from "../actions/themeAction"

const themes = {
  currentTheme: {},
  coderTheme: {
    app: {
      wrapper: {
        "backgroundColor": "black",
        "color": "rgb(0, 255, 0)"
      }
    },
    header: {
      wrapper: {
        "backgroundColor": "rgb(0, 100, 0)",
        "color": "rgb(0, 255, 0)"
      },
      links: {
        "color": "rgb(0, 255, 0)"
      }
    },
    main: {
      content: {
        "backgroundColor": "rgb(0, 60, 0)",
        "padding": "1rem"
      }
    },
    emailForm: {
      textFields: {
        "backgroundColor": "rgb(0, 100, 0)",
        "color": "rgb(0, 255, 0)",
        "border": "1px solid rgb(0, 255, 0)",
        "fontWeight": "bold"
      },
      button: {
        "backgroundColor": "rgb(0, 100, 0)",
        "color": "rgb(0, 255, 0)",
        "border": "2px solid rgb(0, 255, 0)"
      }
    },
    modal: {
      "backgroundColor": "black",
    }
  }
}

export default function ThemeReducer(state = themes, action) {
  switch (action.type) {
    case SET_DEFAULT_THEME:
      return { ...state, currentTheme: {} }
    case SET_CODER_THEME:
      return { ...state, currentTheme: { ...themes.coderTheme } }
    default:
      return state
  }
}