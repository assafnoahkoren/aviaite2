export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function fetchClient(path: string, options?: RequestInit) {
	const _path = path.startsWith('/') ? path.slice(1) : path;
	return fetch(`${BASE_URL}/${_path}`, options);
}

