export default function ({ store, redirect }) {
  console.log(store.state)
  /*   console.log(store.state.auth)
  if (store.state.auth) {
    return redirect('/dashboard')
  } */
  debugger;
  const isAuth = store.getters['isAuthenticated']

  if(isAuth) {
    return redirect('/dashboard')
  }
}
