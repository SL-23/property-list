import HomePage from "./modules/HomePage"
import ModalPage from "./modules/ModalPage"

export const appRoutes: Array<any> = [
  {
    path: "/",
    element: HomePage
  },
  {
    path: "/modal-page",
    element: ModalPage
  },
]