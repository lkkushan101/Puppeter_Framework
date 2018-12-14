
const PageObject = require('puppeteer-page-object')
 
class ExamplePage extends PageObject {
  async typeToInput(text) {
    await this.page.type('#input', text)
  }
}
 
const examplePageObject = new ExamplePage()
;async () => {
  await examplePageObject.init()
  await examplePageObject.open('https://example.com')
  await examplePageObject.screenshot()
  await examplePageObject.typeToInput('Hello world')
  await examplePageObject.close()
}