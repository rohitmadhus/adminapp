import App from './App.vue'
import Login from './components/Login.vue'
import Hello from './components/Hello.vue'

const routes = [
    {
        path: '/',
        component: Hello
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes