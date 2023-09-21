export interface ContactTypes {
  name: string
  email: string
  message?: string
}

export default function useCommentApi() {

  const defaultContactValues: ContactTypes = {
    name: '',
    email: '',
    message: ''
  }

  const postFetch = async (inputValues: ContactTypes) => {
    try {
      const data = await fetch(import.meta.env.VITE_EXPRESS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputValues)
      })

      if (!data.ok) { throw new Error('Network response was not okay') }

    } catch (err) {
      console.error('Error catched:', err)
    }
  }

  return {
    postFetch,
    defaultContactValues
  }

}