const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const recordVisitor = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/visitors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    })

    if (!response.ok) {
      console.error('Failed to record visitor')
    }
  } catch (error) {
    // Silently handle error - fire-and-forget
    console.error('Error recording visitor:', error)
  }
}
