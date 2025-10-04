// client/src/pages/ExploreTutors.jsx
import React, { useEffect, useState } from 'react'
import API from '../lib/api'

function ProviderCard({ p }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
          {p.name?.[0] ?? 'P'}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{p.name}</h3>
          <div className="text-sm text-gray-600">{p.subject || 'General'}</div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-700">{p.bio ?? 'No description available.'}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">Rate: {p.rate ? `$${p.rate}/hr` : '—'}</div>
        <a className="text-blue-600 text-sm" href={`/providers/${p.id ?? ''}`}>View profile →</a>
      </div>
    </div>
  )
}

export default function ExploreTutors(){
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    API.get('/api/providers/')
      .then(res => {
        if (!mounted) return
        setProviders(Array.isArray(res.data) ? res.data : res.data.providers ?? [])
      })
      .catch(err => {
        if (!mounted) return
        setError(err.message || 'Network Error')
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => { mounted = false }
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">Explore Tutors</h1>

      {loading && (
        <div className="py-16 text-center text-gray-600">Loading tutors…</div>
      )}

      {error && (
        <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-700 rounded">
          Error: {error}
        </div>
      )}

      {!loading && !error && providers.length === 0 && (
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
          No tutors found yet.
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map(p => <ProviderCard key={p.id ?? p.email ?? p.name} p={p} />)}
      </div>
    </div>
  )
}
