import Vue from 'vue'

import { 
  Menu,
  MenuItem,
  Button,
  Container,
  Aside,
  Main,
} from 'element-ui'

import lang from 'element-ui/lib/locale/lang/ja'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
