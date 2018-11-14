let defaultCity = '江门'
try {
  defaultCity = localStorage.city ? localStorage.city : defaultCity
} catch (e) {}
export default {
  city: defaultCity
}
