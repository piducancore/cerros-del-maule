import create from "zustand"

const useStore = create(set => ({
  viewport: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
    pitch: 0,
    bearing: 0,
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
