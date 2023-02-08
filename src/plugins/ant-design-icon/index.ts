import {
  PlusOutlined,
  FilterOutlined,
  LogoutOutlined,
  UserOutlined,
  LockOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined
} from '@ant-design/icons-vue'

export function setupAntDesignIcon (app) {
  app.component('PlusOutlined', PlusOutlined)
  app.component('FilterOutlined', FilterOutlined)
  app.component('LogoutOutlined', LogoutOutlined)
  app.component('UserOutlined', UserOutlined)
  app.component('LockOutlined', LockOutlined)
  app.component('EyeOutlined', EyeOutlined)
  app.component('EditOutlined', EditOutlined)
  app.component('DeleteOutlined', DeleteOutlined)
  app.component('PieChartOutlined', PieChartOutlined)
  app.component('DesktopOutlined', DesktopOutlined)
  app.component('TeamOutlined', TeamOutlined)
  app.component('FileOutlined', FileOutlined)
}
