export default function ({ store }) {
  if(process.client) {
    debugger
    store.dispatch('refreshToken')
  }
}
