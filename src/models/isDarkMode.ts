import Cookies from 'js-cookie'

export const isDarkMode = (): boolean => {
	if (typeof window === 'undefined') { return false }
	if (Cookies.get('darkMode') === '1') { return true }
	if (Cookies.get('darkMode') === '0') { return false }
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}
