export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (localStorage.getItem('loginKey') == '' || localStorage.getItem('loginKey') == null) {
      return navigateTo('/login')
    }
  })