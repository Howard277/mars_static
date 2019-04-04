export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      window.localStorage['menus'] = undefined
      // window.open(this.$route)
      window.location.reload()
    }
  }
}
