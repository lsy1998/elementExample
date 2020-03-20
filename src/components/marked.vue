<template>
<div id="app">
<div v-html="compiledMarkdown"></div>
</div>
</template>
<script>
import marked from 'marked'
var rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})
export default {
  name: 'marked',
  data () {
    return {
      input: `|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
[百度](www.baidu.com)
\`\`\`
hello
\`\`\`
`
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  }
}
</script>
