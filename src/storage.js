import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import Secure from './Secure'
// ᓢ㰴䂼׀ഡ堫恩Ìࣴ䫀笢Ⱑᠧ㎠ௌLƸِӠൡΐΐ澲Ƽ䬰ᙿ\䮠ߟઞᄝ䨓⩐ҀԂ
// window.localStorage.removeItem('_secure__ls__metadata');
// console.log(window.localStorage)
// let password = '12323'
// console.log(1222)
// var ls = new SecureLS({encodingType: 'AES', encryptionSecret: password,  isCompression: false});
// console.log(ls.setDataToLocalStorage('_secure__ls__metadata', '123'))
// try {
//   ls.get('vymex_session')
// } catch (e){
//   console.log(e)
//
//   throw 'Err'
// }





Vue.use(Vuex);
import History from '@/models/History'

import Countries from '@/app/auth/storage/Countries'
import Categories from '@/app/faq/storage/Categories'
import UserProfile from '@/app/auth/storage/UserProfile'
import VxInfo from "@/app/vx/storage/VxInfo"
import File from "@/app/vx/storage/File"
import Crypto from '@/models/CryptoStorage'

import Company from '@/models/Company'
import {MessengerStore as Messenger} from '@Singletons'
import {NotificationsStore as Notifications} from '@Singletons'
import {UsersStore as Users} from '@Singletons'
import Dashboard from '@/models/Dashboard'
import Processes from '@/models/Processes'
import Resources from "@/models/Resources";

import {SynchronizerStore} from "@Core/Synchronizer";


export default new Vuex.Store({
  state: {},
  mutations: {},
  getters: {},
  modules: {
    Countries,
    History,
    Categories,
    UserProfile,
    Crypto,
    VxInfo,
    File,
    Messenger,
    Notifications,
    Resources,
    Company,
    Dashboard,
    Processes,
    Users,
    SynchronizerStore
  },
  plugins: [
    createPersistedState({
      key: 'vymex_session',
      paths: ['Countries', 'Crypto', 'UserProfile', 'VxInfo', 'History', 'Company', 'Processes', 'SynchronizerStore'],
      storage: {
        getItem: (key) => {
          return Secure.get(key)
        },
        setItem: (key, value) => Secure.set(key, value),
        removeItem: (key) => Secure.remove(key),
      },
    }),
    createPersistedState({
      key: 'vymex_msg_session',
      paths: ['Messenger'],
      storage: {
        getItem: (key) => Secure.get(key),
        setItem: (key, value) => Secure.set(key, value),
        removeItem: (key) => Secure.remove(key),
      },
    }),
    createPersistedState({
      key: 'vymex_notif_session',
      paths: ['Notifications'],
      storage: {
        getItem: (key) => Secure.get(key),
        setItem: (key, value) => Secure.set(key, value),
        removeItem: (key) => Secure.remove(key),
      },
    }),
    createPersistedState({
      key: 'vymex_users_session',
      paths: ['Users'],
      storage: {
        getItem: (key) => Secure.get(key),
        setItem: (key, value) => Secure.set(key, value),
        removeItem: (key) => Secure.remove(key),
      },
    }),
  ],
});
