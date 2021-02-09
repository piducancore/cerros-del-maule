import create from "zustand"

const useStore = create(set => ({
  viewport: {
    width: 800,
    height: 600,
    latitude: 37.78,
    longitude: -122.45,
    zoom: 14,
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
