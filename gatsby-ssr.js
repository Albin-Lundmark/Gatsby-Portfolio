// Note: This file is useful for customizing server-side rendering, for example, to wrap the root element in a provider and setting the lang attribute on the <html> element. This file is not required for Gatsby to build.
import React from 'react'

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: 'en' })
}
