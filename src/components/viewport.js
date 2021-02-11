import create from "zustand"

const useStore = create(set => ({
  viewport: {
    latitude: 37.78,
    longitude: -122.45,
    zoom: 14,
    pitch: 60,
  },
  setViewport: newViewport => {
    set(state => ({
      viewport: {
        ...state.viewport,
        ...newViewport,
      },
    }))
  },
}))

export default useStore
