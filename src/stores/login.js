import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state: () => {
        return { isLogin: false, user: {email: '', permissions:[]} }
    },
    getters: {
        
    },
    actions: {
        logout() {
            this.isLogin = false
            console.log(this.isLogin)
            this.user = {email: '', permissions: []}
        },
        login(user) {
            this.isLogin = true
            console.log(this.isLogin)
            this.user.email = user.email
            this.user.permissions = user.permissions
        },
        havePermissions(access) {
            return this.user.permissions.filter(p => p == access).length > 0 ? true : false
        }
    },
})