import { useCallback, useRef, useState } from 'react'
import type { Dataset } from '../types'
import { loadDataset } from '../data/loadData'
import { withEstimatedProfit } from '../data/transform'

/** Loads public/data/dataset.* on mount; allows re-upload with a browser file picker. */
export function useDataset() {
  const [dataset, setDataset] = useState<Dataset | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [triedDefault, setTriedDefault] = useState(false)
  const [margin, setMargin] = useState(0.15)
  const attempted = useRef(false)

  const tryDefault = useCallback(async () => {
    setLoading(true)
    setError(null)
    for (const ext of ['csv', 'xlsx', 'xls', 'json']) {
      try {
        const ds = await loadDataset(`/data/dataset.${ext}`)
        setDataset(withEstimatedProfit(ds, margin))
        setLoading(false)
        setTriedDefault(true)
        return
      } catch {
        // try next extension
      }
    }
    setLoading(false)
    setTriedDefault(true)
  }, [margin])

  // Only attempt once on mount
  if (!attempted.current) {
    attempted.current = true
    void tryDefault()
  }

  const upload = useCallback(
    async (file: File) => {
      setLoading(true)
      setError(null)
      try {
        const ds = await loadDataset(file)
        setDataset(withEstimatedProfit(ds, margin))
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load file.')
      } finally {
        setLoading(false)
      }
    },
    [margin],
  )

  return {
    dataset,
    error,
    loading,
    triedDefault,
    margin,
    setMargin,
    upload,
    reloadDefault: tryDefault,
  }
}
