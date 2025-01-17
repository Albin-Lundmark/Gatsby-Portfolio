import './src/styles/global.css'
import '@fontsource/caveat'
import '@fontsource/quicksand'

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' })
}
