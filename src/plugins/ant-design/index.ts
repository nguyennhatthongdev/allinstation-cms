import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Dropdown,
  Select,
  Input,
  Row,
  Col,
  DatePicker,
  Avatar,
  Space,
  Checkbox,
  Pagination,
  Table,
  Tag,
  Modal,
  Radio,
  message,
  Spin,
  Transfer,
  Tree,
  Form,
  Divider,
  Tabs,
  Card,
  Textarea,
  Tooltip,
  Upload
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

export function setupAntDesign (app) {
  app.use(Layout)
  app.use(Menu)
  app.use(Breadcrumb)
  app.use(Dropdown)
  app.use(Select)
  app.use(Input)
  app.use(Row)
  app.use(Col)
  app.use(Button)
  app.use(Avatar)
  app.use(Space)
  app.use(Checkbox)
  app.use(DatePicker)
  app.use(Pagination)
  app.use(Table)
  app.use(Tag)
  app.use(Spin)
  app.use(Modal)
  app.use(Radio)
  app.config.globalProperties.$message = message
  app.use(Transfer)
  app.use(Tree)
  app.use(Form)
  app.use(Divider)
  app.use(Tabs)
  app.use(Card)
  app.use(Textarea)
  app.use(Tooltip)
  app.use(Upload)
}
