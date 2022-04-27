<template>
  <div
    :title="humanFriendlyDate"
  >
    {{ diffForHumans }}
  </div>
</template>

<script>
import dayjs from 'dayjs'
import localizedDate from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(localizedDate)
dayjs.extend(relativeTime)

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  computed: {
    diffForHumans() {
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyDate() {
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>

<style scoped>
  
</style>