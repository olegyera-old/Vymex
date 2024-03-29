import Task from "./app";
import Main from './view/main'
import Create from './view/create'
import Other from './view/other'
// import Profile from './view/profile'

export default [
  {
    path: 'task',
    component: Task,
    children: [
      {
        path: '/',
        name: 'vx.co.task',
        component: Main,
      },
      {
        path: 'create',
        name: 'vx.co.task.create',
        component: Create,
      },
      {
        path: 'other',
        name: 'vx.co.task.other',
        component: Other,
      }
    ]
  },
  // {
  //   path: 'co',
  //   component: Setting,
  //   children: [
  //     {
  //       path: '/create',
  //       name: 'vx.setting',
  //       component: Tuning,
  //     },
  //     {
  //       path: 'profile',
  //       name: 'vx.setting.profile',
  //       component: Profile,
  //     }
  //   ]
  // }
]