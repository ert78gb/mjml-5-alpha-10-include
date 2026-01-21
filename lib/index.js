import getHtmlEmailContent from './utils/get-html-email-content.js'

const emailContent = await getHtmlEmailContent('my-campaign/01')

console.log(emailContent.html)
