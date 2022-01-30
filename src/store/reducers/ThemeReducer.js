import { SET_DEFAULT_THEME, SET_CODER_THEME, SET_DARKBLUE_THEME } from "../actions/themeAction"

const initState = {
  currentTheme: {},
  themes: {
    coderTheme: {
      coderApp: {
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
    },
    darkBlueTheme: {
      darkApp: {
        wrapper: {
          "backgroundColor": "rgb(28, 33, 46)",
          "color": "goldenrod"
        }
      },
      header: {
        wrapper: {
          "backgroundColor": "rgb(28, 33, 106)",
          "color": "goldenrod"
        },
        links: {
          "color": "gold"
        }
      },
      main: {
        content: {
          "backgroundColor": "rgb(28, 33, 106)",
          "padding": "1rem"
        }
      },
      emailForm: {
        textFields: {
          "backgroundColor": "rgb(28, 33, 46)",
          "color": "goldenrod",
          "border": "1px solid gold",
          "fontWeight": "bold"
        },
        button: {
          "backgroundColor": "rgb(28, 33, 46)",
          "color": "goldenrod",
          "border": "2px solid gold"
        }
      },
      modal: {
        "backgroundColor": "rgb(28, 33, 106)"
      }
    }
  }

}

export default function ThemeReducer(state = initState, action) {
  switch (action.type) {
    case SET_DEFAULT_THEME:
      return { ...state, currentTheme: {} }
    case SET_CODER_THEME:
      return { ...state, currentTheme: { ...initState.themes.coderTheme } }
    case SET_DARKBLUE_THEME:
      return { ...state, currentTheme: { ...initState.themes.darkBlueTheme } }
    default:
      return state
  }
}