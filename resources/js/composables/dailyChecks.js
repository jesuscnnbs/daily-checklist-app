import {ref} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

export default function useDailyChecks() {
  const router = useRouter()
  const dailyChecks = ref([])

  const errors = ref('')

  const getdailyChecks = async () => {
    let res = await axios.get('/api/daily-check')
    dailyChecks.value = res.data.data
  }

  const storeDailyCheck = async (data) => {
    errors.value=''
    try {
      await axios.post('/api/daily-check', data)
      await router.push({name: 'daily.checks'})  
    } catch (e) {
      if(e.response?.status === 422) {
        for (const key in e.response.data.errors) {
          errors.value = e.response.data.errors
        }
      }
    }
  }

  const updateDailyCheck = async (check) => {
    errors.value = ''
    console.log(check)
    try {
      await axios.patch(`/api/daily-check/${check.id}`, check)
      await router.push({name: 'daily.checks'})
    } catch (e) {
      if(e.response?.status === 422) {
        for (const key in e.response.data.errors) {
          errors.value = e.response.data.errors
        }
      }
    }
  }

  const destroyDailycheck = async (id) => {
    await axios.delete(`/api/daily-check/${id}`)
    await router.push({name: 'daily.checks'})
  }

  return { 
    errors,
    dailyChecks,
    getdailyChecks,
    storeDailyCheck,
    updateDailyCheck,
    destroyDailycheck
  }
}