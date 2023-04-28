import { useRouter } from 'next/router'
import { useEffect } from 'react'
export default function PostsIndex() {
	const router = useRouter()
	useEffect(() => {
		router.replace('/')
	}, [])
	return <h1>Redirecting...</h1>
}
